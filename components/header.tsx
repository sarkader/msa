import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E8E6E3] bg-white/80 backdrop-blur-sm">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Logo />
        <Link
          href="/book"
          className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-white bg-[#111111] transition-colors hover:bg-[#000000] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#111111] focus:ring-offset-white shadow-sm hover:shadow-md"
        >
          Apply
        </Link>
      </nav>
    </header>
  );
}
