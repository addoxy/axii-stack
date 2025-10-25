import { env as clientEnv } from '@/lib/config/env/client';
import { env as serverEnv } from '@/lib/config/env/server';
import { PrismaClient } from '@prisma/client';
import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { lastLoginMethod } from 'better-auth/plugins';

const prisma = new PrismaClient();

export const auth = betterAuth({
  baseURL: clientEnv.NEXT_PUBLIC_API_URL,
  basePath: '/api/auth',
  secret: serverEnv.BETTER_AUTH_SECRET,
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
    autoSignIn: true,
  },
  socialProviders: {
    google: {
      clientId: serverEnv.GOOGLE_CLIENT_ID,
      clientSecret: serverEnv.GOOGLE_CLIENT_SECRET,
    },
  },
  plugins: [lastLoginMethod()],
});
