import { useState, useSyncExternalStore } from 'react';
import { Link, useLocation } from '@tanstack/react-router';
import { useLenis } from 'lenis/react';
import { AnimatePresence, motion } from 'motion/react';
import SOCIAL_LINKS from '@/lib/socials';
import ThemeToggle from '@/components/ThemeToggle';

const mq = typeof window !== 'undefined' ? window.matchMedia('(max-width: 640px)') : null;
function useMobile() {
  return useSyncExternalStore(
    (cb) => { mq?.addEventListener('change', cb); return () => mq?.removeEventListener('change', cb); },
    () => mq?.matches ?? false,
    () => false,
  );
}

const navLinks = [
  { to: '/portfolio' as const, label: 'Portfolio' },
  { to: '/digest' as const, label: 'Digest' },
];

export default function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const mobile = useMobile();
  const location = useLocation();
  const lenis = useLenis();

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      if (lenis) lenis.scrollTo(el);
      else el.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-accent/50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl tracking-tight text-primary hover:opacity-80 transition-opacity" style={{ fontFamily: "'Fira Mono', 'JetBrains Mono', 'Consolas', monospace", fontWeight: 600 }}>
          j<span style={{ color: '#7287fd' }}>;</span>maynard
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors ${
                location.pathname.startsWith(link.to)
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={scrollToContact}
            className="text-sm font-medium px-4 py-2 rounded-lg border border-muted bg-background hover:bg-secondary hover:border-primary text-primary transition-colors"
          >
            Let's Talk
          </button>
          <ThemeToggle />
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden p-2 text-primary"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <motion.line x1="3" y1="6" x2="21" y2="6" animate={menuOpen ? { rotate: 45, y: 6, x: 0 } : { rotate: 0, y: 0, x: 0 }} style={{ transformOrigin: 'center' }} />
            <motion.line x1="3" y1="12" x2="21" y2="12" animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} />
            <motion.line x1="3" y1="18" x2="21" y2="18" animate={menuOpen ? { rotate: -45, y: -6, x: 0 } : { rotate: 0, y: 0, x: 0 }} style={{ transformOrigin: 'center' }} />
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && mobile && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden overflow-hidden border-t border-accent/50 bg-background/95 backdrop-blur-md"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    location.pathname.startsWith(link.to)
                      ? 'text-primary bg-secondary/50'
                      : 'text-muted-foreground hover:text-primary hover:bg-secondary/30'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={scrollToContact}
                className="w-full text-left px-4 py-3 rounded-lg text-base font-medium border border-muted text-primary hover:bg-secondary/30 transition-colors"
              >
                Let's Talk
              </button>
              <div className="flex gap-4 px-4 pt-2">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={link.className}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
