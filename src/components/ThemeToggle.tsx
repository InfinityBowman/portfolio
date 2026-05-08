import { FaSun, FaMoon } from 'react-icons/fa';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '@/lib/theme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="p-2 rounded-lg text-muted-foreground hover:text-primary transition-colors"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'dark' ? (
          <motion.span
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="block"
          >
            <FaSun size={16} />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="block"
          >
            <FaMoon size={16} />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
