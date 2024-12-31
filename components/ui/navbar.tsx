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
      <div className="flex gap-5 mx-auto h-full">
        <Link
          href="/kontakt-guide"
          className={`link-hover h-full flex items-center ${pathname === "/kontakt-guide" ? "link-active" : ""}`}
        >
          Kontakt Guide
        </Link>
        <Link
          href="/services"
          className={`link-hover h-full flex items-center ${pathname === "/services" ? "link-active" : ""}`}
        >
          Services
        </Link>
        <Link
          href="/contact"
          className={`link-hover h-full flex items-center ${pathname === "/contact" ? "link-active" : ""}`}
        >
          Contact
        </Link>
      </div>
    </>
  );
}
