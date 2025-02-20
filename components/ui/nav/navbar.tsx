'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import MobileMenuToggle from './mobile-menu-toggle';

interface NavBarProps {
  children: ReactNode;
}

export default function NavBar({ children }: NavBarProps) {
  const pathname = usePathname();

  return (
    <div className="w-full py-4">
      <div className="flex items-center">
        {pathname !== '/kontakt-guide' && (
          <div className="absolute">
            <Link
              href="/"
              className="font-semibold text-x"
            >
              Jacob Maynard
            </Link>
          </div>
        )}
        <div className="flex-grow flex justify-center">
          <div className="hidden md:flex md:items-center md:gap-5">
            {pathname === '/kontakt-guide' && (
              <Link
                href="/kontakt-guide"
                className={`navbar-link relative pb-3 top-2 ${pathname === '/kontakt-guide' ? 'link-active' : 'border-b border-transparent'}`}
              >
                Kontakt Guide
              </Link>
            )}
            {pathname !== '/kontakt-guide' && (
              <>
                <Link
                  href="/about"
                  className={`navbar-link relative pb-3 top-2 ${pathname === '/about' ? 'link-active' : 'border-b border-transparent'}`}
                >
                  About Me{' '}
                </Link>
                <Link
                  href="/hobbies"
                  className={`navbar-link relative pb-3 top-2 ${pathname === '/hobbies' ? 'link-active' : 'border-b border-transparent'}`}
                >
                  Hobbies
                </Link>
              </>
            )}
          </div>
        </div>
        <div className="hidden md:flex md:items-center">{children}</div>

        <div className="md:hidden flex">
          <MobileMenuToggle>{children}</MobileMenuToggle>
        </div>
      </div>
    </div>
  );
}
