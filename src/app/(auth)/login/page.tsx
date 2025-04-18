"use client";

import { SignInButton } from "@/components/auth/SignInButton";

export default function LoginPage({
  searchParams,
}: {
  searchParams: { error?: string };
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
          <SignInButton />
          {searchParams.error && (
            <div className="mt-4 text-center text-sm text-red-600">
              {searchParams.error === "OAuthSignin" &&
                "Error signing in with OAuth provider."}
              {searchParams.error === "OAuthCallback" &&
                "Error during OAuth callback."}
              {searchParams.error === "default" &&
                "An error occurred during sign in."}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
