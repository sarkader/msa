import Link from "next/link";
import Logo from "./logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t-2 border-t-[#1E3A8A] border-b border-b-[#E6EAF0] bg-white">
      <div className="container-section px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* About */}
          <div>
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-[#5B6473] max-w-xs">
              We partner with Muslim founders to scale offers—courses, consulting, and productized
              services.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-[#0B1220] mb-4 uppercase tracking-wide">
              Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/case-studies"
                  className="text-sm text-[#5B6473] hover:text-[#0B1220] hover:underline hover:decoration-[#1E3A8A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A8B4E6] focus:ring-offset-white rounded transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/book"
                  className="text-sm text-[#5B6473] hover:text-[#0B1220] hover:underline hover:decoration-[#1E3A8A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A8B4E6] focus:ring-offset-white rounded transition-colors"
                >
                  Book Call
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-[#5B6473] hover:text-[#0B1220] hover:underline hover:decoration-[#1E3A8A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A8B4E6] focus:ring-offset-white rounded transition-colors"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-[#5B6473] hover:text-[#0B1220] hover:underline hover:decoration-[#1E3A8A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A8B4E6] focus:ring-offset-white rounded transition-colors"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-[#0B1220] mb-4 uppercase tracking-wide">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:anyemail@test.com"
                  className="text-sm text-[#5B6473] hover:text-[#0B1220] hover:underline hover:decoration-[#1E3A8A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A8B4E6] focus:ring-offset-white rounded transition-colors"
                >
                  anyemail@test.com
                </a>
              </li>
              <li className="text-sm text-[#5B6473]">City, Timezone</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#E6EAF0] pt-8">
          <p className="text-sm text-[#5B6473] text-center">© {currentYear} MSA</p>
        </div>
      </div>
    </footer>
  );
}
