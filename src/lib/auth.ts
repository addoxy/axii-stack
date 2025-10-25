import { env } from '@/lib/config/env/client';
import { lastLoginMethodClient } from 'better-auth/client/plugins';
import { createAuthClient } from 'better-auth/react';

export const authClient = createAuthClient({
  baseURL: env.NEXT_PUBLIC_APP_URL,
  basePath: '/api/auth',
  plugins: [lastLoginMethodClient()],
});

export const {
  signIn,
  signUp,
  signOut,
  forgetPassword,
  resetPassword,
  useSession,
  isLastUsedLoginMethod,
} = authClient;
