'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Laptop, Moon, Sun, Sparkles } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ICON_SIZE = 20;

type ThemeType = 'light' | 'dark' | 'twilight' | 'system';

const themeLabels = {
  light: 'Light theme',
  dark: 'Dark theme',
  twilight: 'Twilight theme',
  system: 'System theme',
} as const;

const themeIcons = {
  light: Sun,
  dark: Moon,
  twilight: Sparkles,
  system: Laptop,
} as const;

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = (newTheme: ThemeType) => {
    setTheme(newTheme);
    window.dispatchEvent(new Event('themechange'));
  };

  if (!mounted) return null;

  const ThemeIcon = themeIcons[theme as ThemeType] || themeIcons.system;
  const currentThemeLabel = themeLabels[theme as ThemeType] || themeLabels.system;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="md:h-9 md:px-3 h-11 rounded-md px-4"
          aria-label={`Change theme, current theme is ${currentThemeLabel}`}
        >
          <ThemeIcon
            size={ICON_SIZE}
            className="text-muted-foreground"
            aria-hidden="true"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-content"
        align="start"
        role="menu"
        aria-label="Theme options"
      >
        <DropdownMenuRadioGroup
          value={theme}
          onValueChange={() => handleThemeChange}
        >
          {Object.entries(themeIcons).map(([value, Icon]) => (
            <DropdownMenuRadioItem
              key={value}
              className="flex gap-2"
              value={value}
              role="menuitemradio"
              aria-label={themeLabels[value as ThemeType]}
            >
              <Icon
                size={ICON_SIZE}
                className="text-muted-foreground"
                aria-hidden="true"
              />
              <span className="capitalize">{value}</span>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { ThemeSwitcher };
