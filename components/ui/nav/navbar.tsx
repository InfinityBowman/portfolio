'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import MobileMenuToggle from './mobile-menu-toggle';

interface NavBarProps {
  children: ReactNode;
}

const NAVIGATION_LINKS = [
  { href: '/about', label: 'About Me' },
  { href: '/hobbies', label: 'Hobbies' },
];

export default function NavBar({ children }: NavBarProps) {
  const pathname = usePathname();

  return (
    <nav
      className="w-full py-4"
      aria-label="Main navigation"
    >
      <div className="flex items-center">
        <Link
          href="/"
          className="font-semibold text-lg hover:opacity-80 transition-opacity"
          aria-label="Home"
        >
          Jacob Maynard
        </Link>
        <div className="flex-grow flex justify-center">
          <div className="hidden md:flex md:items-center md:gap-5">
            {NAVIGATION_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`navbar-link relative pb-3 top-2 transition-colors ${
                  pathname === href ? 'link-active' : 'border-b border-transparent'
                }`}
                aria-current={pathname === href ? 'page' : undefined}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden md:flex md:items-center">{children}</div>

        <div className="md:hidden flex">
          <MobileMenuToggle>{children}</MobileMenuToggle>
        </div>
      </div>
    </nav>
  );
}
