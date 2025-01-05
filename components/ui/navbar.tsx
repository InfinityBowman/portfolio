"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, ReactNode } from "react";
import MobileMenuToggle from "./mobile-menu-toggle";

interface NavBarProps {
  children: ReactNode;
}

export default function NavBar({ children }: NavBarProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full py-4 z-50">
      <div className="flex justify-between h-16">
        <div className="flex-shrink-0 flex items-center">
          <Link href="/" className="font-semibold text-x">
            Jacob Maynard
          </Link>
        </div>
        <div className="hidden md:flex md:items-center md:gap-5">
          <Link
            href="/projects"
            className={`navbar-link h-full flex items-center ${pathname === "/projects" ? "link-active" : "border-b border-transparent"}`}
          >
            Projects
          </Link>
          <Link
            href="/kontakt-guide"
            className={`navbar-link h-full flex items-center ${pathname === "/kontakt-guide" ? "link-active" : "border-b border-transparent"}`}
          >
            Kontakt Guide
          </Link>
          <Link
            href="/hobbies"
            className={`navbar-link h-full flex items-center ${pathname === "/hobbies" ? "link-active" : "border-b border-transparent"}`}
          >
            Hobbies
          </Link>
        </div>
        <div className="hidden md:flex md:items-center">{children}</div>
        <div className="md:hidden flex">
          <MobileMenuToggle>{children}</MobileMenuToggle>
        </div>
      </div>
    </div>
  );
}
