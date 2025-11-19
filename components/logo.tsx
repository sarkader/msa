import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="inline-block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0F766E] rounded"
      aria-label="Muslim Scale Accelerator - Home"
    >
      <span className="text-[10px] sm:text-base font-semibold tracking-wide text-[#0B1220] leading-tight">
        Muslim Scale Accelerator
      </span>
    </Link>
  );
}
