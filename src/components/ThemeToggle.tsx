import { motion } from 'motion/react';
import { useTheme } from '@/lib/theme';

const spring = { type: 'spring' as const, stiffness: 250, damping: 35, mass: 4 };

const dots = [
  { cx: 22, cy: 12, delay: 0.48 },
  { cx: 19.0711, cy: 19.0711, delay: 0.4 },
  { cx: 12, cy: 22, delay: 0.32 },
  { cx: 4.9289, cy: 19.0711, delay: 0.24 },
  { cx: 2, cy: 12, delay: 0.2 },
  { cx: 4.9289, cy: 4.9289, delay: 0.28 },
  { cx: 12, cy: 2, delay: 0.36 },
  { cx: 19.0711, cy: 4.9289, delay: 0.44 },
];

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="p-2 rounded-lg text-muted-foreground hover:text-primary transition-colors"
    >
      <motion.svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        initial={false}
        animate={{ rotate: isDark ? 40 : 90 }}
        transition={spring}
      >
        <mask id="sun-dot-mask">
          <rect x="-10" y="-10" width="44" height="44" fill="#FFF" />
          <circle r="6" cx="12" cy="12" fill="#000" />
        </mask>
        <mask id="moon-cutout-mask">
          <rect x="0" y="0" width="24" height="24" fill="#FFF" />
          <motion.circle
            cx="12"
            r="8"
            fill="#000"
            initial={false}
            animate={{ cy: isDark ? 4 : -4 }}
            transition={spring}
          />
        </mask>
        <mask id="moon-crescent-mask">
          <rect x="0" y="0" width="24" height="24" fill="#000" />
          <motion.circle
            cx="12"
            cy="12"
            fill="#FFF"
            initial={false}
            animate={{ r: isDark ? 10.5 : 7 }}
            transition={spring}
          />
        </mask>

        <g mask="url(#sun-dot-mask)">
          {dots.map((dot, i) => (
            <motion.circle
              key={i}
              cx={dot.cx}
              cy={dot.cy}
              r="1.5"
              fill="currentColor"
              style={{ transformOrigin: `${dot.cx}px ${dot.cy}px` }}
              initial={false}
              animate={{ scale: isDark ? 0 : 1 }}
              transition={{ ...spring, delay: isDark ? 0 : dot.delay }}
            />
          ))}
        </g>

        <g mask="url(#moon-cutout-mask)">
          <motion.circle
            cx="12"
            cy="12"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            initial={false}
            animate={{ r: isDark ? 9.5 : 6 }}
            transition={spring}
          />
        </g>

        <g mask="url(#moon-crescent-mask)">
          <motion.circle
            cx="12"
            r="8"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            initial={false}
            animate={{ cy: isDark ? 4 : -4 }}
            transition={spring}
          />
        </g>
      </motion.svg>
    </button>
  );
}
