import { useEffect, useState, useSyncExternalStore } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Link, useLocation, useNavigate } from '@tanstack/react-router';
import { useLenis } from 'lenis/react';
import SOCIAL_LINKS from '@/lib/socials';

interface NavMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const mq = typeof window !== 'undefined' ? window.matchMedia('(max-width: 640px)') : null;
function useMobile() {
  return useSyncExternalStore(
    cb => {
      mq?.addEventListener('change', cb);
      return () => mq?.removeEventListener('change', cb);
    },
    () => mq?.matches ?? false,
    () => false,
  );
}

export default function NavMenu({ isOpen, onClose }: NavMenuProps) {
  const mobile = useMobile();
  const location = useLocation();
  const navigate = useNavigate();
  const lenis = useLenis();

  const [activeSection, setActiveSection] = useState('hero');

  const homeSections = [
    { href: '/#hero', label: 'Home', id: 'hero' },
    { href: '/#about', label: 'About', id: 'about' },
    { href: '/#skills', label: 'Skills', id: 'skills' },
    { href: '/#experience', label: 'Experience', id: 'experience' },
    { href: '/#education', label: 'Education', id: 'education' },
    { href: '/#projects', label: 'Projects', id: 'projects' },
    { href: '/#contact', label: 'Contact', id: 'contact' },
  ];

  const pageLinks: Array<{ to: string; label: string; id: string }> = [];

  // Update active section when route changes
  useEffect(() => {
    if (location.pathname === '/') {
      setActiveSection('hero');
    }
  }, [location.pathname]);

  // Update active section based on scroll position (only on home page)
  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname !== '/') return;

      const sections = homeSections.map(item => item.id);
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        const topPosition = rect.top + window.scrollY;
        const bottomPosition = topPosition + rect.height;

        if (scrollPosition >= topPosition && scrollPosition < bottomPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const scrollToElement = (el: HTMLElement) => {
    if (lenis) {
      lenis.scrollTo(el);
    } else {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();

    if (location.pathname !== '/') {
      navigate({ to: '/' }).then(() => {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) scrollToElement(el);
        }, 50);
      });
    } else {
      const el = document.getElementById(sectionId);
      if (el) scrollToElement(el);
    }

    setActiveSection(sectionId);
    onClose();
  };

  const allItems = [
    ...homeSections.map(s => ({ ...s, type: 'section' as const })),
    ...pageLinks.map(p => ({ ...p, href: p.to, type: 'page' as const })),
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div className='fixed inset-0 z-40' onClick={onClose} />

          <motion.div
            className='bg-secondary border-accent fixed top-0 right-0 z-41 flex h-dvh w-80 flex-col overflow-y-auto border-l shadow-lg sm:w-96'
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{
              type: 'spring',
              stiffness: mobile ? 500 : 400,
              damping: 40,
            }}
            onClick={e => e.stopPropagation()}
          >
            <nav className='flex flex-1 items-center'>
              <ul className='w-full space-y-1 p-6 pb-16 sm:space-y-4'>
                {allItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: mobile ? 0.04 + index * 0.03 : 0.08 + index * 0.07,
                      duration: mobile ? 0.2 : 0.3,
                    }}
                  >
                    {item.type === 'section' ?
                      <a
                        href={item.href}
                        className={`block rounded-lg px-4 py-3 text-lg font-medium transition-all duration-200 ${
                          activeSection === item.id ?
                            'border-accent text-primary hover:bg-background/70 border'
                          : 'text-muted-foreground hover:text-primary hover:bg-background/70 border border-transparent'
                        }`}
                        onClick={e => handleSectionClick(e, item.id)}
                      >
                        {item.label}
                      </a>
                    : <Link
                        to={item.href}
                        viewTransition
                        onClick={() => onClose()}
                        className={`block rounded-lg px-4 py-3 text-lg font-medium transition-all duration-200 ${
                          activeSection === item.id ?
                            'border-accent text-primary hover:bg-background/70 border'
                          : 'text-muted-foreground hover:text-primary hover:bg-background/70 border border-transparent'
                        }`}
                      >
                        {item.label}
                      </Link>
                    }
                  </motion.li>
                ))}
              </ul>
            </nav>

            <motion.div
              className='border-accent absolute right-0 bottom-0 left-0 border-t py-3'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: mobile ? 0.2 : 0.35,
                duration: mobile ? 0.2 : 0.3,
              }}
            >
              <div className='flex justify-center gap-4'>
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
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
