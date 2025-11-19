export default function Logo() {
  return (
    <a
      href="/"
      className="inline-block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0F766E] rounded"
      aria-label="Muslim Scale Accelerator - Home"
    >
      {/* Mobile Logo (Short) */}
      <svg
        viewBox="0 0 48 24"
        className="h-6 w-auto md:hidden"
        aria-hidden="false"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
      >
        <title>MSA</title>
        <text
          x="0"
          y="18"
          fontSize="16"
          fontWeight="700"
          letterSpacing="0.02em"
          fill="currentColor"
        >
          MSA
        </text>
      </svg>

      {/* Desktop Logo (Full) */}
      <svg
        viewBox="0 0 320 24"
        className="hidden h-6 w-auto md:block"
        aria-hidden="false"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
      >
        <title>Muslim Scale Accelerator</title>
        <text
          x="0"
          y="18"
          fontSize="16"
          fontWeight="600"
          letterSpacing="0.02em"
          fill="currentColor"
        >
          Muslim Scale Accelerator
        </text>
      </svg>
    </a>
  );
}
