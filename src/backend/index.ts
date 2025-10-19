import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import { auth } from './auth';

const app = new Hono()
  .basePath('/api')
  .on(['POST', 'GET'], '/auth/*', (c) => {
    return auth.handler(c.req.raw);
  })
  .get('/', (c) =>
    c.json({
      message: 'Hello from Axii Stack API!',
    })
  );

export type AppType = typeof app;
export const httpHandler = handle(app);
