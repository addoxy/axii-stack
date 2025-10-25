'use client';

import { GoogleIcon } from '@/components/icons';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { isLastUsedLoginMethod, signIn } from '@/lib/auth';
import { signInRedirect } from '@/lib/config/redirects.config';
import { useState } from 'react';
import { toast } from 'sonner';

export function SocialSignIn() {
  const [isPending, setIsPending] = useState(false);
  const isLastUsed = isLastUsedLoginMethod('google');

  const handleSocialSignIn = async (provider: string) => {
    try {
      setIsPending(true);
      await signIn.social({
        provider: provider,
        callbackURL: signInRedirect,
        fetchOptions: {
          onError: () => {
            toast.error('Failed to sign in with Google. Please try again.');
          },
        },
      });
    } catch (error) {
      toast.error('An unexpected error occurred. Please try again.');
      console.error('Google sign in error:', error);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="border-border w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background text-muted-foreground px-2">
            Or continue with
          </span>
        </div>
      </div>
      <Button
        size="lg"
        variant="outline"
        onClick={() => handleSocialSignIn('google')}
        className="relative w-full rounded-none"
        disabled={isPending}
      >
        {isLastUsed && (
          <Badge
            variant="secondary"
            className="border-primary/10 absolute -top-3 -right-2 rounded-none border"
          >
            Last used
          </Badge>
        )}
        {isPending && <Spinner />}
        <GoogleIcon />
        Continue with Google
      </Button>
    </>
  );
}
