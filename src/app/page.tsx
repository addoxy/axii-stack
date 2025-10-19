import { env } from '@/config/env/server';

export default function Home() {
  return <div>{env.DATABASE_URL}</div>;
}
