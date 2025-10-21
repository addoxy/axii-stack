'use client';

import { Button, buttonVariants } from '@/components/ui/button';
import { ThemeToggler } from '@/components/ui/theme-toggler';
import { cn } from '@/lib/utils';
import { GithubIcon } from 'lucide-react';
import { Edu_NSW_ACT_Cursive } from 'next/font/google';
import { useState } from 'react';

const fontCursive = Edu_NSW_ACT_Cursive({
  variable: '--font-cursive',
  subsets: ['latin'],
});

export default function Home() {
  const [copied, setCopied] = useState<number | null>(null);

  const copyToClipboard = async (text: string, index: number) => {
    await navigator.clipboard.writeText(text);
    setCopied(index);
    setTimeout(() => setCopied(null), 2000);
  };

  const features = [
    {
      title: 'Next.js 15',
      description: 'App Router with React 19 support',
    },
    {
      title: 'Authentication',
      description: 'Better Auth with Google OAuth integration',
    },
    {
      title: 'Database',
      description: 'Prisma ORM with PostgreSQL database',
    },
    {
      title: 'API Layer',
      description: 'Hono RPC with type-safe endpoints',
    },
    {
      title: 'Type-Safety',
      description: 'Zod schemas + validated environment variables',
    },
    {
      title: 'Styling',
      description: 'Tailwind v4 with shadcn/ui components',
    },
    {
      title: 'Data Fetching',
      description: 'TanStack Query for server state management',
    },
    {
      title: 'Developer Experience',
      description: 'Pino structured logging with type-safe config',
    },
    {
      title: 'Production Ready',
      description: 'Security headers with CORS and Docker support',
    },
  ];

  const commands = [
    {
      title: '1. Clone and install',
      code: 'git clone https://github.com/addoxy/axii-stack.git\ncd axii-stack\npnpm install',
    },
    {
      title: '2. Setup environment',
      code: 'cp .env.example .env.local',
    },
    {
      title: '3. Start development',
      code: 'pnpm db:start && pnpm db:migrate\npnpm dev',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <main className="w-full max-w-3xl space-y-16 py-20">
        {/* Hero */}
        <div className="space-y-6 text-center">
          <h1
            className={cn(
              'text-foreground text-4xl font-medium tracking-wider sm:text-5xl',
              fontCursive.className
            )}
          >
            Axii Stack
          </h1>
          <p className="text-muted-foreground mx-auto max-w-sm">
            Production-ready Next.js starter with auth, database, and type-safe
            APIs.
          </p>
          <div className="flex items-center justify-center gap-2">
            <a
              href="https://github.com/addoxy/axii-stack"
              target="_blank"
              className={cn(buttonVariants())}
            >
              <GithubIcon />
              GitHub
            </a>
            <ThemeToggler />
          </div>
        </div>

        {/* Features */}
        <div className="grid gap-3 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group border-border bg-card hover:bg-muted space-y-2 rounded-lg border px-6 py-5 transition-colors"
            >
              <h3 className="text-card-foreground group-hover:text-foreground font-medium">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quick Start */}
        <div className="space-y-4">
          <h2 className="text-foreground text-center text-xl font-semibold">
            Quick Start
          </h2>
          <div className="border-border bg-card space-y-3 rounded-lg border p-6">
            {commands.map((cmd, index) => (
              <div key={index} className="space-y-2">
                <p className="text-card-foreground text-sm font-medium">
                  {cmd.title}
                </p>
                <div className="group relative">
                  <pre className="bg-muted text-muted-foreground overflow-x-auto rounded-md p-3 pr-12 text-xs">
                    {cmd.code}
                  </pre>
                  <Button
                    onClick={() => copyToClipboard(cmd.code, index)}
                    className="absolute top-1.5 right-1.5 text-xs opacity-0 transition-opacity group-hover:opacity-100"
                    size="xs"
                    variant="outline"
                    aria-label="Copy command"
                  >
                    {copied === index ? 'Copied!' : 'Copy'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
