import { Hono } from 'hono';
import { handle } from 'hono/vercel';

const app = new Hono()
  .basePath('/api')
  .get('/', (c) => c.json({ message: 'Hello from Axii Stack API!' }));

export type AppType = typeof app;
export const httpHandler = handle(app);
