"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <>
      <Link href="/" className="font-semibold h-full flex items-center">
        {/* TODO replace with name logo */}
        Jacob Maynard
      </Link>
      <div className="flex gap-5 -mb-[2px] mx-auto h-full">
        <Link
          href="/kontakt-guide"
          className={`navbar-link h-full flex items-center ${pathname === "/kontakt-guide" ? "link-active" : "border-b border-transparent"}`}
        >
          Kontakt Guide
        </Link>
        <Link
          href="/services"
          className={`navbar-link h-full flex items-center ${pathname === "/services" ? "link-active" : "border-b border-transparent"}`}
        >
          Services
        </Link>
        <Link
          href="/contact"
          className={`navbar-link h-full flex items-center ${pathname === "/contact" ? "link-active" : "border-b border-transparent"}`}
        >
          Contact
        </Link>
      </div>
    </>
  );
}
