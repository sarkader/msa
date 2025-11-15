import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Logo />
        <Link
          href="/apply"
          className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-white bg-[#0F766E] transition-colors hover:bg-[#0d6361] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0F766E] focus:ring-offset-white"
        >
          Apply
        </Link>
      </nav>
    </header>
  );
}
