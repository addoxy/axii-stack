'use client';

import { ThemeToggler } from '@/components/ui/theme-toggler';
import { ArrowRight, Github } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const stack = [
    { name: 'Next.js 15', detail: 'React 19 with Turbopack' },
    { name: 'Better Auth', detail: 'Full-featured auth library' },
    { name: 'Prisma', detail: 'Type-safe PostgreSQL ORM' },
    { name: 'Hono', detail: 'Lightweight type-safe API' },
    { name: 'TanStack Query', detail: 'Async state management' },
    { name: 'Tailwind v4 + shadcn', detail: 'Radix with dark mode' },
    { name: 'Zod + T3 Env', detail: 'Runtime validation library' },
    { name: 'Pino', detail: 'Structured logging system' },
    { name: 'ESLint + Prettier', detail: 'Linting and formatting' },
    { name: 'Husky + lint-staged', detail: 'Pre-commit quality checks' },
  ];

  const commands = [
    {
      id: 'clone',
      label: 'Clone repository',
      command: 'git clone https://github.com/addoxy/axii-stack.git',
    },
    {
      id: 'install',
      label: 'Install dependencies',
      command: 'cd axii-stack && pnpm install',
    },
    {
      id: 'env',
      label: 'Configure environment',
      command: 'cp .env.example .env.local',
    },
    {
      id: 'dev',
      label: 'Start development',
      command: 'pnpm db:start && pnpm db:migrate && pnpm dev',
    },
  ];

  return (
    <div className="mx-auto min-h-screen max-w-4xl px-6 py-12 md:px-12 md:py-20">
      {/* Header */}
      <AxiiStackHeader />

      {/* Main Content */}
      <main className="mt-20 md:mt-32">
        {/* Intro */}
        <div className="border-border border-l pl-6 md:pl-8">
          <p className="text-foreground max-w-2xl text-lg leading-relaxed md:text-xl">
            A production-ready Next.js starter. Built with modern tools,
            configured for type-safety, and designed to deploy immediately.
          </p>
        </div>

        {/* Stack List */}
        <div className="mt-16 space-y-0 md:mt-24">
          <div className="border-border border-t">
            {stack.map((item, index) => (
              <div
                key={index}
                className="border-border group hover:bg-muted/30 flex items-baseline justify-between gap-2 border-b px-4 py-4 transition-colors md:px-6 md:py-5"
              >
                <div className="flex items-baseline gap-3 md:gap-4">
                  <span className="text-muted-foreground font-mono text-xs">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-foreground text-left font-medium">
                    {item.name}
                  </span>
                </div>
                <span className="text-muted-foreground text-right text-sm">
                  {item.detail}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Getting Started */}
        <div className="mt-20 space-y-8 md:mt-32">
          <h2 className="text-foreground border-border border-l pl-6 text-lg font-medium md:pl-8">
            Getting Started
          </h2>

          <div className="space-y-6">
            {commands.map((cmd) => (
              <div key={cmd.id} className="group">
                <div className="text-muted-foreground mb-2 font-mono text-xs">
                  {cmd.label}
                </div>
                <div className="border-border bg-card relative border">
                  <code className="text-foreground block overflow-x-auto px-4 py-3 font-mono text-sm">
                    {cmd.command}
                  </code>
                  <button
                    onClick={() => copyToClipboard(cmd.command, cmd.id)}
                    className="hover:text-foreground text-muted-foreground absolute top-2 right-2 font-mono text-xs opacity-0 transition-all group-hover:opacity-100"
                    aria-label="Copy command"
                  >
                    {copied === cmd.id ? 'Copied' : 'Copy'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Next Step */}
          <div className="border-l pl-6 md:pl-8">
            <p className="text-muted-foreground flex items-center gap-2 text-sm">
              <ArrowRight className="h-4 w-4" />
              <span>Open http://localhost:3000 to see your application</span>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-muted-foreground mt-32 pb-12 text-center font-mono text-xs">
        Production-ready Next.js starter
      </footer>
    </div>
  );
}

export const AxiiStackHeader = () => {
  return (
    <header className="flex items-start justify-between">
      <div>
        <h1 className="text-foreground text-2xl font-light tracking-tight">
          Axii Stack
        </h1>
        <div className="text-muted-foreground mt-1 font-mono text-sm">
          v1.0.0
        </div>
      </div>
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/addoxy/axii-stack"
          target="_blank"
          className="border-border hover:border-foreground hover:text-foreground text-muted-foreground inline-flex items-center gap-1.5 border-b pb-0.5 text-sm transition-colors"
        >
          <Github className="h-3.5 w-3.5" />
          <span>GitHub</span>
        </a>
        <ThemeToggler />
      </div>
    </header>
  );
};
