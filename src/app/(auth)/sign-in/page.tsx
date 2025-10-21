'use client';

import { GoogleIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { signIn } from '@/lib/auth';
import { signInRedirect } from '@/lib/config/redirects.config';
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
    <div className="bg-muted/30 flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="border-border bg-card rounded-xl border p-8 shadow-lg">
          <div className="space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-foreground text-3xl font-bold tracking-tight">
                Welcome back
              </h1>
              <p className="text-muted-foreground text-sm">
                Sign in to your account
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="border-border w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card text-muted-foreground px-2">
                  Continue with
                </span>
              </div>
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
              Google
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
