import Link from "next/link";
import Logo from "./logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[#E8E6E3] bg-white">
      <div className="container-section px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* About */}
          <div>
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-[#5F5F5F] max-w-xs">
              We partner with Muslim founders to scale offers—courses, consulting, and productized
              services.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-[#111111] mb-4 uppercase tracking-wide">
              Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/case-studies"
                  className="text-sm text-[#5F5F5F] hover:text-[#111111] hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#111111] focus:ring-offset-white rounded transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/book"
                  className="text-sm text-[#5F5F5F] hover:text-[#111111] hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#111111] focus:ring-offset-white rounded transition-colors"
                >
                  Book Call
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-[#5F5F5F] hover:text-[#111111] hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#111111] focus:ring-offset-white rounded transition-colors"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-[#5F5F5F] hover:text-[#111111] hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#111111] focus:ring-offset-white rounded transition-colors"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-[#111111] mb-4 uppercase tracking-wide">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:anyemail@test.com"
                  className="text-sm text-[#5F5F5F] hover:text-[#111111] hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#111111] focus:ring-offset-white rounded transition-colors"
                >
                  anyemail@test.com
                </a>
              </li>
              <li className="text-sm text-[#5F5F5F]">City, Timezone</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#E8E6E3] pt-8">
          <p className="text-sm text-[#5F5F5F] text-center">
            © {currentYear} Muslim Scale Accelerator
          </p>
        </div>
      </div>
    </footer>
  );
}
