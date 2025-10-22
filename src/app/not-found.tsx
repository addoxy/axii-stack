'use client';

import { ThemeToggler } from '@/components/ui/theme-toggler';
import { Github, Home, Search } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  const commonRoutes = [
    { path: '/', label: 'Home' },
    { path: '/sign-in', label: 'Sign In' },
  ];

  return (
    <div className="mx-auto min-h-screen max-w-4xl px-6 py-12 md:px-12 md:py-20">
      {/* Header */}
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

      {/* Main Content */}
      <main className="mt-20 md:mt-32">
        {/* 404 Message */}
        <div className="border-border border-l-2 pl-6 md:pl-8">
          <div className="flex items-center gap-3">
            <Search className="text-muted-foreground h-5 w-5" />
            <h2 className="text-foreground text-xl font-medium md:text-2xl">
              Page not found
            </h2>
          </div>
          <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or may have been
            moved. Please check the URL or navigate to one of the available
            pages below.
          </p>
        </div>

        {/* Error Code */}
        <div className="mt-12">
          <div className="text-muted-foreground mb-3 font-mono text-xs">
            Error code
          </div>
          <div className="border-border bg-card border px-4 py-4">
            <code className="text-foreground font-mono text-sm">404</code>
          </div>
        </div>

        {/* Common Routes */}
        <div className="mt-16 md:mt-20">
          <h3 className="text-foreground mb-6 text-base font-medium">
            Common Pages
          </h3>
          <div className="flex flex-col gap-3">
            {commonRoutes.map((route, index) => (
              <Link
                key={index}
                href={route.path}
                className="border-border hover:border-foreground hover:bg-card group inline-flex items-center gap-3 border px-6 py-3 transition-all"
              >
                <span className="text-muted-foreground font-mono text-xs">
                  {route.path}
                </span>
                <span className="text-foreground text-sm font-medium">
                  {route.label}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Return Home */}
        <div className="mt-12">
          <Link
            href="/"
            className="border-border hover:border-foreground hover:bg-card group inline-flex items-center gap-2 border px-6 py-3 transition-all"
          >
            <Home className="text-muted-foreground group-hover:text-foreground h-4 w-4 transition-colors" />
            <span className="text-foreground text-sm font-medium">
              Return home
            </span>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-muted-foreground mt-32 pb-12 text-center font-mono text-xs">
        Production-ready Next.js starter
      </footer>
    </div>
  );
}
