import { env } from '@/config/env/client';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { requestId } from 'hono/request-id';
import { secureHeaders } from 'hono/secure-headers';
import { handle } from 'hono/vercel';
import { auth } from './auth';
import { logger } from './logger';

const app = new Hono().basePath('/api').use(
  '*',
  cors({
    origin: env.NEXT_PUBLIC_APP_URL,
    credentials: true,
  }),
  secureHeaders(),
  requestId(),
  logger()
);

const router = app
  .on(['POST', 'GET'], '/auth/*', (c) => {
    return auth.handler(c.req.raw);
  })
  .get('/', (c) => {
    return c.json({
      message: 'Hello from Axii Stack API!',
    });
  });

export type AppType = typeof router;
export const httpHandler = handle(router);
