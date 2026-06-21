import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'light',
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

function getSystemTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/**
 * Sync the <meta name="theme-color"> to the page's actual background so iOS
 * Safari paints the status-bar safe area to match instead of defaulting to
 * white.
 */
export function syncThemeColor() {
  if (typeof document === 'undefined') return;
  const color = getComputedStyle(document.body).backgroundColor;
  if (!color) return;
  // Drop the SSR media-scoped fallbacks
  document.querySelectorAll('meta[name="theme-color"][media]').forEach(el => el.remove());
  let meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]:not([media])');
  if (!meta) {
    meta = document.createElement('meta');
    meta.name = 'theme-color';
    document.head.appendChild(meta);
  }
  meta.content = color;
}

function applyTheme(theme: Theme) {
  const el = document.documentElement;
  if (el.dataset.themeLocked !== undefined) {
    syncThemeColor();
    return;
  }
  el.dataset.theme = theme;
  syncThemeColor();
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof document === 'undefined') return 'light';
    const attr = document.documentElement.dataset.theme;
    return attr === 'dark' || attr === 'light' ? attr : 'light';
  });

  useLayoutEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem('theme');
    } catch {}
    const initial = saved === 'light' || saved === 'dark' ? saved : getSystemTheme();
    setThemeState(initial);
    applyTheme(initial);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => {
      try {
        if (localStorage.getItem('theme')) return;
      } catch {}
      const next = mq.matches ? 'dark' : 'light';
      setThemeState(next);
      applyTheme(next);
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState(prev => {
      const next = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', next);
      document.documentElement.classList.add('theme-transition');
      applyTheme(next);
      setTimeout(() => document.documentElement.classList.remove('theme-transition'), 550);
      return next;
    });
  }, []);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
