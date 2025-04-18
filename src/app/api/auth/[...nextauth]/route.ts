import NextAuth, { AuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "@/lib/prisma"; // Adjust path if necessary
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import type { Adapter } from "next-auth/adapters";
import type { DefaultSession } from "next-auth";
import { authOptions } from "@/lib/auth";

// Extend the default Session type to include the user ID
declare module "next-auth" {
  interface Session {
    user?: {
      id?: string;
    } & DefaultSession["user"];
  }
}

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: Number(process.env.EMAIL_SERVER_PORT),
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
      // Custom function to send verification emails via Mailgun
      async sendVerificationRequest({
        identifier: email,
        url,
        provider: { server, from },
      }) {
        const { host } = new URL(url);
        const transport = nodemailer.createTransport(server);
        await transport.sendMail({
          to: email,
          from,
          subject: `Sign in to ${host}`,
          text: `Sign in to ${host}\n${url}\n\n`,
          html: `<p>Sign in to <strong>${host}</strong></p><p><a href="${url}">Click here to sign in</a></p>`,
        });
      },
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "jsmith@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Please enter an email and password");
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || !user.password) {
          throw new Error(
            "No user found with this email or user signed up with a different method."
          );
        }

        const isValidPassword = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isValidPassword) {
          throw new Error("Incorrect password");
        }

        if (!user.emailVerified) {
          throw new Error(
            "Please verify your email before logging in. Check your inbox for a verification link."
          );
        }

        // Return user object if everything is valid
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.image,
          // Add any other user properties needed in the session/token
        };
      },
    }),
    // Add Google Provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      // Optional: Specify profile scope if needed beyond default
      // authorization: { params: { scope: 'openid email profile' } },
    }),
  ],
  session: {
    strategy: "jwt", // Use JWT for session strategy (recommended)
  },
  pages: {
    signIn: "/login", // Optional: Custom sign-in page
    verifyRequest: "/auth/verify-request", // Optional: Custom page for email verification messages
    // error: '/auth/error', // Optional: Custom error page
    // newUser: '/auth/new-user' // Optional: Redirect new users to a specific page
  },
  callbacks: {
    // Include user.id on session
    async session({ session, token }) {
      if (token?.sub && session.user) {
        session.user.id = token.sub;
      }
      return session;
    },
    // Include user.id on JWT
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development", // Enable debug messages in development
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
