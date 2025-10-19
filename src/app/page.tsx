'use client';

import { signOut, useSession } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  const { data: session, isPending } = useSession();

  useEffect(() => {
    if (!isPending && !session) {
      router.push('/sign-in');
    }
  }, [session, isPending, router]);

  const handleSignOut = async () => {
    await signOut();
    router.push('/sign-in');
  };

  if (isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-lg bg-white p-8 shadow-lg">
          <div className="flex items-center justify-between border-b pb-4">
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome to Axii Stack
            </h1>
            <button
              onClick={handleSignOut}
              className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none"
            >
              Sign Out
            </button>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-4">
              {session.user.image && (
                <img
                  src={session.user.image}
                  alt={session.user.name || 'User'}
                  className="h-16 w-16 rounded-full"
                />
              )}
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {session.user.name}
                </h2>
                <p className="text-gray-600">{session.user.email}</p>
              </div>
            </div>

            <div className="mt-6 rounded-lg bg-gray-50 p-4">
              <h3 className="mb-2 font-semibold text-gray-900">
                Session Information
              </h3>
              <pre className="overflow-auto text-sm text-gray-700">
                {JSON.stringify(session, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
