'use client';

import { api } from '@/backend/rpc';
import { useSession } from '@/lib/auth';
import { useQuery } from '@tanstack/react-query';

export default function Home() {
  const { data: session, isPending } = useSession();

  const { data: users, status } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await api.users.all.$get();
      const data = await response.json();
      return data;
    },
  });

  if (isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500">Loading session...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-4xl">
        {session ? (
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome back, {session.user?.name || 'User'}!
            </h1>
            <p className="mt-4 text-gray-700">Here is the list of all users:</p>

            {status === 'pending' && (
              <p className="mt-2 text-gray-500">Loading users...</p>
            )}
            {status === 'error' && (
              <p className="mt-2 text-red-500">Failed to load users.</p>
            )}
            {status === 'success' && (
              <ul className="mt-4 space-y-2">
                {users.data?.map((user) => (
                  <li key={user.id} className="rounded-lg bg-white p-4 shadow">
                    <p className="font-medium text-gray-900">
                      {user.name || 'No Name'}
                    </p>
                    <p className="text-sm text-gray-600">{user.email}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ) : (
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome to Axii Stack!
            </h1>
            <p className="mt-4 text-gray-700">
              Please sign in to view user information.
              <button
                className="ml-2 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                onClick={() => {
                  window.location.href = '/sign-in';
                }}
              >
                Sign In
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
