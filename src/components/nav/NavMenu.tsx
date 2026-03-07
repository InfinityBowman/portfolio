import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Link, useLocation, useNavigate } from '@tanstack/react-router';
import SOCIAL_LINKS from '@/lib/socials';

interface NavMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NavMenu({ isOpen, onClose }: NavMenuProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const [activeSection, setActiveSection] = useState(
    location.pathname.startsWith('/blog') ? 'blog'
    : location.pathname.startsWith('/digest') ? 'digest'
    : 'hero',
  );

  const homeSections = [
    { href: '/#hero', label: 'Home', id: 'hero' },
    { href: '/#about', label: 'About', id: 'about' },
    { href: '/#skills', label: 'Skills', id: 'skills' },
    { href: '/#experience', label: 'Experience', id: 'experience' },
    { href: '/#education', label: 'Education', id: 'education' },
    { href: '/#projects', label: 'Projects', id: 'projects' },
    { href: '/#contact', label: 'Contact', id: 'contact' },
  ];

  const pageLinks = [
    { to: '/blog', label: 'Blog', id: 'blog' },
    { to: '/digest', label: 'Digest', id: 'digest' },
  ];

  // Update active section when route changes
  useEffect(() => {
    if (location.pathname.startsWith('/blog')) {
      setActiveSection('blog');
    } else if (location.pathname.startsWith('/digest')) {
      setActiveSection('digest');
    } else if (location.pathname === '/') {
      setActiveSection('hero');
    }
  }, [location.pathname]);

  // Update active section based on scroll position (only on home page)
  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname !== '/') return;

      const sections = homeSections.map((item) => item.id);
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

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();

    if (location.pathname !== '/') {
      navigate({ to: '/' }).then(() => {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      });
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        window.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
      }
    }

    setActiveSection(sectionId);
    onClose();
  };

  const allItems = [
    ...homeSections.map((s) => ({ ...s, type: 'section' as const })),
    ...pageLinks.map((p) => ({ ...p, href: p.to, type: 'page' as const })),
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div className="fixed inset-0 z-40" onClick={onClose} />

          <motion.div
            className="fixed top-0 right-0 h-dvh w-80 sm:w-96
                    bg-secondary shadow-lg z-41 overflow-y-auto
                    border-l border-accent flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 40,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex-1 flex items-center">
              <ul className="space-y-4 w-full p-6 pb-16">
                {allItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.1 + index * 0.1,
                      duration: 0.3,
                    }}
                  >
                    {item.type === 'section' ? (
                      <a
                        href={item.href}
                        className={`block px-4 py-3 rounded-lg text-lg font-medium transition-all duration-400
                          ${
                            activeSection === item.id
                              ? 'border-accent border text-primary hover:bg-background/70'
                              : 'border border-transparent text-muted-foreground hover:text-primary hover:bg-background/70'
                          }`}
                        onClick={(e) => handleSectionClick(e, item.id)}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        to={item.href}
                        viewTransition
                        onClick={() => onClose()}
                        className={`block px-4 py-3 rounded-lg text-lg font-medium transition-all duration-400
                          ${
                            activeSection === item.id
                              ? 'border-accent border text-primary hover:bg-background/70'
                              : 'border border-transparent text-muted-foreground hover:text-primary hover:bg-background/70'
                          }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>
            </nav>

            <motion.div
              className="absolute bottom-0 left-0 right-0 py-3 border-t border-accent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex justify-center gap-4">
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
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
