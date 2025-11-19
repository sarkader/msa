import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="inline-block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0F766E] rounded"
      aria-label="Muslim Scale Accelerator - Home"
    >
      {/* Mobile Logo (Short) */}
      <span className="text-lg font-bold tracking-wide text-[#0B1220] md:hidden">
        MSA
      </span>

      {/* Desktop Logo (Full) */}
      <span className="hidden text-lg font-semibold tracking-wide text-[#0B1220] md:block">
        Muslim Scale Accelerator
      </span>
    </Link>
  );
}
