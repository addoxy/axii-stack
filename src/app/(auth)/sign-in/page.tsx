'use client';

import { GoogleIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { signIn } from '@/lib/auth';
import { signInRedirect } from '@/lib/config/redirects.config';
import { ArrowLeft } from 'lucide-react';
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
    <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 py-12 md:px-12 md:py-20">
      {/* Main Content */}
      <main className="w-full">
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
                className="w-full rounded-none"
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
    </div>
  );
}
