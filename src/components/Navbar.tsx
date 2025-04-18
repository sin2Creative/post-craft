"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-[#111827] text-white">
      <div className="flex flex-col h-full">
        {/* Logo Section */}
        <div className="p-6 border-b border-gray-800">
          <Link
            href="/dashboard"
            className="text-2xl font-bold text-indigo-400"
          >
            PostCraft
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 pt-4">
          <div className="space-y-1">
            <Link
              href="/dashboard"
              className="flex items-center px-4 py-3 text-gray-300 hover:bg-[#1F2937] hover:text-indigo-400 rounded-lg transition-colors group"
            >
              <svg
                className="w-5 h-5 mr-3 text-gray-400 group-hover:text-indigo-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Home
            </Link>

            <Link
              href="/dashboard/posts"
              className="flex items-center px-4 py-3 text-gray-300 hover:bg-[#1F2937] hover:text-indigo-400 rounded-lg transition-colors group"
            >
              <svg
                className="w-5 h-5 mr-3 text-gray-400 group-hover:text-indigo-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2"
                />
              </svg>
              Posts
            </Link>

            <Link
              href="/dashboard/analytics"
              className="flex items-center px-4 py-3 text-gray-300 hover:bg-[#1F2937] hover:text-indigo-400 rounded-lg transition-colors group"
            >
              <svg
                className="w-5 h-5 mr-3 text-gray-400 group-hover:text-indigo-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              Analytics
            </Link>
          </div>
        </nav>

        {/* User Profile Section */}
        <div className="p-4 border-t border-gray-800 bg-[#0F1623]">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <button
                onClick={toggleMenu}
                className="flex items-center space-x-3 focus:outline-none"
              >
                {session?.user?.image ? (
                  <Image
                    className="h-10 w-10 rounded-full ring-2 ring-indigo-500"
                    src={session.user.image}
                    alt=""
                    width={40}
                    height={40}
                  />
                ) : (
                  <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center ring-2 ring-indigo-500">
                    {session?.user?.name?.[0]?.toUpperCase() || "U"}
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white truncate">
                    {session?.user?.name}
                  </p>
                  <p className="text-xs text-indigo-300 truncate">
                    {session?.user?.email}
                  </p>
                </div>
              </button>

              {isMenuOpen && (
                <div className="absolute bottom-full left-0 mb-2 w-48 rounded-md shadow-lg bg-[#1F2937] ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#374151] hover:text-indigo-400"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Profile Settings
                    </Link>
                    <button
                      onClick={() => signOut({ callbackUrl: "/" })}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-[#374151] hover:text-indigo-400"
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
