'use client';

import { AlertCircle, Home, RefreshCw } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto min-h-screen max-w-4xl px-6 py-12 md:px-12 md:py-20">
      {/* Main Content */}
      <main className="mt-20 md:mt-32">
        {/* Error Message */}
        <div className="border-border border-l pl-6 md:pl-8">
          <div className="flex items-center gap-3">
            <AlertCircle className="text-muted-foreground h-5 w-5" />
            <h2 className="text-foreground text-xl font-medium md:text-2xl">
              Something went wrong
            </h2>
          </div>
          <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed">
            An unexpected error occurred while processing your request. This has
            been logged and we&apos;ll investigate the issue.
          </p>
        </div>

        {/* Error Details */}
        {error.message && (
          <div className="mt-12">
            <div className="text-muted-foreground mb-3 font-mono text-xs tracking-wider uppercase">
              Error details
            </div>
            <div className="bg-muted/30 border-border border-l-2">
              <code className="text-foreground/70 block overflow-x-auto px-4 py-3 font-mono text-sm">
                {error.message}
              </code>
              {error.digest && (
                <div className="border-border border-t px-4 py-2">
                  <span className="text-muted-foreground/70 font-mono text-xs">
                    Digest: {error.digest}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="mt-12 flex flex-col gap-4 md:flex-row">
          <button
            onClick={reset}
            className="border-border hover:border-foreground dark:hover:border-border hover:bg-card group inline-flex items-center gap-2 border px-6 py-3 transition-all"
          >
            <RefreshCw className="text-muted-foreground group-hover:text-foreground h-4 w-4 transition-colors" />
            <span className="text-foreground text-sm font-medium">
              Try again
            </span>
          </button>
          <Link
            href="/"
            className="border-border hover:border-foreground hover:bg-card group inline-flex items-center gap-2 border px-6 py-3 transition-all"
          >
            <Home className="text-muted-foreground group-hover:text-foreground h-4 w-4 transition-colors" />
            <span className="text-foreground text-sm font-medium">
              Return home
            </span>
          </Link>
        </div>
      </main>
    </div>
  );
}
