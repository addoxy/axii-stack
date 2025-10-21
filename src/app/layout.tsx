import { Providers } from '@/components/providers';
import { env } from '@/config/env/server';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const fontSans = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Axii Stack',
  description:
    'A modern full-stack and production-ready framework powered by Next.js, Hono, Prisma and other cool technologies.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          fontSans.variable,
          env.NODE_ENV === 'development' && 'debug-screens',
          'antialiased'
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
