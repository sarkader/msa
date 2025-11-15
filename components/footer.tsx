import Link from "next/link";
import Logo from "./logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[#EDEDED] bg-white">
      <div className="container-section px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Left: Wordmark and description */}
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-[#6B6B6B] max-w-xs">
              We partner with Muslim founders to scale offers—courses, consulting, and productized
              services.
            </p>
          </div>

          {/* Right: Two columns */}
          <div className="md:col-span-2 grid md:grid-cols-2 gap-8">
            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold text-[#0A0A0A] mb-4 uppercase tracking-wide">
                Company
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/case-studies"
                    className="text-sm text-[#6B6B6B] hover:text-[#0A0A0A] hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#111111] focus:ring-offset-white rounded transition-colors"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/book"
                    className="text-sm text-[#6B6B6B] hover:text-[#0A0A0A] hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#111111] focus:ring-offset-white rounded transition-colors"
                  >
                    Book Demo
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold text-[#0A0A0A] mb-4 uppercase tracking-wide">
                Contact
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:anyemail@test.com"
                    className="text-sm text-[#6B6B6B] hover:text-[#0A0A0A] hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#111111] focus:ring-offset-white rounded transition-colors"
                  >
                    anyemail@test.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#EDEDED] pt-8">
          <p className="text-sm text-[#6B6B6B] text-center">
            © {currentYear} Muslim Scale Accelerator
          </p>
        </div>
      </div>
    </footer>
  );
}
