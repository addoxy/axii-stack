import { env } from '@/config/env/client';
import { hc } from 'hono/client';
import { AppType } from '.';

const client = hc<AppType>(env.NEXT_PUBLIC_APP_URL);
export const api = client.api;
