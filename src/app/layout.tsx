import { Providers } from '@/components/providers';
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
    'A modern full-stack framework powered by Next.js, Hono, Drizzle and other cool technologies.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          fontSans.variable,
          process.env.NODE_ENV === 'development' && 'debug-screens',
          'antialiased'
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
