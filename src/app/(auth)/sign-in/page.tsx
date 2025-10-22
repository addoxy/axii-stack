'use client';

import { GoogleIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { ThemeToggler } from '@/components/ui/theme-toggler';
import { signIn } from '@/lib/auth';
import { signInRedirect } from '@/lib/config/redirects.config';
import { ArrowLeft, Github } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'sonner';

export default function SignInPage() {
  const [isPending, setIsPending] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      setIsPending(true);
      await signIn.social({
        provider: 'google',
        callbackURL: signInRedirect,
        fetchOptions: {
          onError: () => {
            toast.error('Failed to sign in. Please try again.');
          },
        },
      });
    } catch (error) {
      toast.error('An unexpected error occurred. Please try again.');
      console.error('Sign in error:', error);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="mx-auto min-h-screen max-w-4xl px-6 py-12 md:px-12 md:py-20">
      {/* Header */}
      <header className="flex items-start justify-between">
        <div>
          <h1 className="text-foreground text-2xl font-light tracking-tight">
            Axii Stack
          </h1>
          <div className="text-muted-foreground mt-1 font-mono text-sm">
            v1.0.0
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/addoxy/axii-stack"
            target="_blank"
            className="border-border hover:border-foreground hover:text-foreground text-muted-foreground inline-flex items-center gap-1.5 border-b pb-0.5 text-sm transition-colors"
          >
            <Github className="h-3.5 w-3.5" />
            <span>GitHub</span>
          </a>
          <ThemeToggler />
        </div>
      </header>

      {/* Main Content */}
      <main className="mt-20 md:mt-32">
        <div className="mx-auto max-w-md">
          {/* Back Link */}
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-2 text-sm transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to home</span>
          </Link>

          {/* Sign In Section */}
          <div className="border-border border-l pl-6 md:pl-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-foreground text-2xl font-light tracking-tight md:text-3xl">
                  Welcome back
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Sign in to your account to continue
                </p>
              </div>
              <Button
                size="lg"
                variant="outline"
                onClick={handleGoogleSignIn}
                className="w-full"
                disabled={isPending}
              >
                {isPending && <Spinner />}
                <GoogleIcon />
                Continue with Google
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-muted-foreground mt-32 pb-12 text-center font-mono text-xs">
        Production-ready Next.js starter
      </footer>
    </div>
  );
}
