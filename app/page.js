'use client';  // Ensure this is at the very top if using app directory

import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-center">
        {/* <Image
          src="/logo.png" 
          alt="WorkTrack logo"
          width={180}
          height={38}
          priority
        /> */}
        <h1 className="text-3xl font-bold">Welcome to WorkTrack</h1>
        <p className="text-lg">
          Manage your worklogs and track your projects efficiently with WorkTrack.
        </p>

        {!session ? (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={() => window.location.href = '/login'}
          >
            Sign in to get started
          </button>
        ) : (
          <>
            <p className="text-lg">
              Welcome back, {session.user.name}! You are signed in.
            </p>
            <a
              href="/dashboard"
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Go to Dashboard
            </a>
          </>
        )}
      </main>
    </div>
  );
}