import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E6EAF0] bg-white/80 backdrop-blur-sm">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Logo />
        <div className="flex items-center gap-4">
          <Link
            href="/case-studies"
            className="text-sm font-medium text-[#5B6473] hover:text-[#0B1220] hover:underline hover:decoration-[#1E3A8A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A8B4E6] focus:ring-offset-white rounded transition-colors hidden md:inline-flex"
          >
            Case Studies
          </Link>
          <Link
            href="/book"
            className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-white bg-[#1E3A8A] transition-colors hover:bg-[#1E40AF] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A8B4E6] focus:ring-offset-white shadow-sm hover:shadow-md"
          >
            Book Call
          </Link>
        </div>
      </nav>
    </header>
  );
}
