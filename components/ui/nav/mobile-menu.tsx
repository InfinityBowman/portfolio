import Link from "next/link";
import { usePathname } from "next/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function MobileMenu({ isOpen, onClose, children }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <div
      className={`fixed inset-0 top-12 bg-background transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className={`flex w-screen bg-background rounded-xl shadow-lg transform transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col py-4 space-y-2">
          <Link
            href="/projects"
            className={`block px-4 py-2 rounded-md text-lg font-medium duration-300 bg-background text-primary hover:bg-primary-foreground`}
            onClick={onClose}
          >
            Projects
          </Link>
          <Link
            href="/kontakt-guide"
            className={`block px-4 py-2 rounded-md text-lg font-medium duration-300 bg-background text-primary hover:bg-primary-foreground`}
            onClick={onClose}
          >
            Kontakt Guide
          </Link>
          <Link
            href="/hobbies"
            className={`block px-4 py-2 rounded-md text-lg font-medium duration-300 bg-background text-primary hover:bg-primary-foreground`}
            onClick={onClose}
          >
            Hobbies
          </Link>
          <div className="flex w-screen border-t border-t-foreground/10 pt-2 justify-center">{children}</div>
        </div>
      </div>
    </div>
  );
}
