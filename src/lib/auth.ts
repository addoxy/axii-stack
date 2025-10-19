import { env } from '@/config/env/client';
import { createAuthClient } from 'better-auth/react';

export const authClient = createAuthClient({
  baseURL: env.NEXT_PUBLIC_APP_URL,
  basePath: '/api/auth',
});

export const {
  signIn,
  signUp,
  signOut,
  forgetPassword,
  resetPassword,
  useSession,
} = authClient;
