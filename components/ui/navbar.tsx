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
    </>
  );
}
