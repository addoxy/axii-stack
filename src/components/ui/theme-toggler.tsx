'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from './button';

export const ThemeToggler = () => {
  const { resolvedTheme, setTheme } = useTheme();

  function toggleTheme() {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  }

  return (
    <Button onClick={toggleTheme} size="icon" variant="outline">
      {resolvedTheme === 'dark' ? <Sun /> : <Moon />}
    </Button>
  );
};
