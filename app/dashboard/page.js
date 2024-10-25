'use client';

import { useSession } from 'next-auth/react';

export default function Dashboard() {
  const { data: session, status } = useSession();

  console.log('Session:', session);
  console.log('Status:', status);

  if (status === 'loading') return <div>Loading...</div>;
  if (!session) return <div>You are not authenticated</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-6">Welcome, {session.user.name}</h1>
        <p className="mb-6">This is your WorkTrack Dashboard. You can log your work hours and view reports.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h2 className="font-bold">Log Work Hours</h2>
            <p>Input your work hours for different projects.</p>
            <a href="/worklog" className="text-blue-500">Go to Worklog</a>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h2 className="font-bold">View Reports</h2>
            <p>See your work summary for this month.</p>
            <a href="/reports" className="text-blue-500">View Reports</a>
          </div>
        </div>
      </div>
    </div>
  );
}