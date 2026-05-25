import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from '@tanstack/react-router';
import { useLenis } from 'lenis/react';
import { AnimatePresence, motion } from 'motion/react';
import SOCIAL_LINKS from '@/lib/socials';
import ThemeToggle from '@/components/ThemeToggle';

const navLinks = [
  { to: '/' as const, label: 'Portfolio' },
  { to: '/digest' as const, label: 'Digest' },
];

export default function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (!menuOpen) return;
    const onClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [menuOpen]);

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
    <header
      ref={headerRef}
      className='bg-background/80 border-accent/50 fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-md'
    >
      <nav className='mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-8'>
        <Link
          to='/'
          className='text-primary text-xl tracking-tight transition-opacity hover:opacity-80'
          style={{
            fontFamily: "'Fira Mono', 'JetBrains Mono', 'Consolas', monospace",
            fontWeight: 600,
          }}
        >
          j<span style={{ color: '#7287fd' }}>;</span>maynard
        </Link>

        {/* Desktop nav */}
        <div className='hidden items-center gap-6 sm:flex'>
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors ${
                location.pathname.startsWith(link.to) ?
                  'text-primary'
                : 'text-muted-foreground hover:text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={scrollToContact}
            className='border-muted bg-background hover:bg-secondary hover:border-primary text-primary rounded-lg border px-4 py-2 text-sm font-medium transition-colors'
          >
            Let's Talk
          </button>
          <ThemeToggle />
        </div>

        {/* Mobile hamburger */}
        <button
          className='text-primary p-2 sm:hidden'
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label='Menu'
          aria-expanded={menuOpen}
        >
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
          >
            <motion.line
              x1='3'
              y1='6'
              x2='21'
              y2='6'
              animate={menuOpen ? { rotate: 45, y: 6, x: 0 } : { rotate: 0, y: 0, x: 0 }}
              style={{ transformOrigin: 'center' }}
            />
            <motion.line
              x1='3'
              y1='12'
              x2='21'
              y2='12'
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.line
              x1='3'
              y1='18'
              x2='21'
              y2='18'
              animate={menuOpen ? { rotate: -45, y: -6, x: 0 } : { rotate: 0, y: 0, x: 0 }}
              style={{ transformOrigin: 'center' }}
            />
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='border-accent/50 bg-background/95 overflow-hidden border-t backdrop-blur-md sm:hidden'
          >
            <div className='space-y-2 px-4 py-4'>
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                    location.pathname.startsWith(link.to) ?
                      'text-primary bg-secondary/50'
                    : 'text-muted-foreground hover:text-primary hover:bg-secondary/30'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={scrollToContact}
                className='border-muted text-primary hover:bg-secondary/30 w-full rounded-lg border px-4 py-3 text-left text-base font-medium transition-colors'
              >
                Let's Talk
              </button>
              <div className='flex items-center gap-4 px-4 pt-2'>
                {SOCIAL_LINKS.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={link.className}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
