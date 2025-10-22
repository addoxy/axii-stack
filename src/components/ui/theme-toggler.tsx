'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export const ThemeToggler = () => {
  const { resolvedTheme, setTheme } = useTheme();

  function toggleTheme() {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  }

  return (
    <button
      onClick={toggleTheme}
      className="border-border hover:border-foreground hover:text-foreground text-muted-foreground inline-flex cursor-pointer items-center gap-1.5 border-b pb-0.5 text-sm transition-colors"
      aria-label="Toggle theme"
    >
      {resolvedTheme === 'dark' ? (
        <>
          <Sun className="h-3.5 w-3.5" />
          <span>Light</span>
        </>
      ) : (
        <>
          <Moon className="h-3.5 w-3.5" />
          <span>Dark</span>
        </>
      )}
    </button>
  );
};
