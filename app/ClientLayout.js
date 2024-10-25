'use client';  // Menandakan ini adalah Client Component

import { SessionProvider } from 'next-auth/react';

export default function ClientLayout({ children }) {
  return (
    <SessionProvider>
      {/* Header or Navbar */}
      <header className="bg-gray-800 text-white p-4">
        <nav className="flex justify-between items-center container mx-auto">
          <div>
            <h1 className="text-2xl font-bold">WorkTrack</h1>
          </div>
          <ul className="flex gap-4">
            <li><a href="/dashboard" className="hover:underline">Dashboard</a></li>
            <li><a href="/worklog" className="hover:underline">Worklogs</a></li>
            <li><a href="/api/auth/signout" className="hover:underline">Logout</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto p-4">
        {children}
      </main>

      <footer className="bg-gray-800 text-white text-center p-4 mt-auto">
        <p>© 2024 WorkTrack. All rights reserved.</p>
      </footer>
    </SessionProvider>
  );
}
