"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button-shadcn";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Logo from "@/components/logo";

const menuItems = [
  { name: "Case Studies", href: "/case-studies" },
  { name: "Book Call", href: "#booking" },
];

export function HeroSection4() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <section>
          <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
            <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
              <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl text-[#0B1220]">
                  Double Your Revenue in 90 Days{" "}
                  <span className="text-[#1E3A8A]">Or Get Every Penny Back</span>
                </h1>
                <p className="mt-8 max-w-2xl text-pretty text-lg text-[#5B6473]">
                  We partner with Muslim founders to scale their businesses—courses, consulting, and productized services. No prior experience required.
                </p>

                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                  <Button asChild size="lg" className="px-5 text-base">
                    <Link href="#booking">
                      <span className="text-nowrap">Book Your Consultation</span>
                    </Link>
                  </Button>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="px-5 text-base"
                  >
                    <Link href="#booking">
                      <span className="text-nowrap">Learn More</span>
                    </Link>
                  </Button>
                </div>
              </div>
              <img
                className="pointer-events-none order-first ml-auto h-56 w-full object-cover sm:h-96 lg:absolute lg:inset-0 lg:-right-20 lg:-top-96 lg:order-last lg:h-max lg:w-2/3 lg:object-contain"
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=3000&h=4000&fit=crop"
                alt="Business Growth"
                height={4000}
                width={3000}
              />
            </div>
          </div>
        </section>
        <section className="bg-white pb-16 md:pb-32">
          <div className="group relative m-auto max-w-6xl px-6">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:max-w-44 md:border-r md:pr-6">
                <p className="text-end text-sm text-[#5B6473]">Trusted by successful founders</p>
              </div>
              <div className="relative py-6 md:w-[calc(100%-11rem)]">
                <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
                  <div className="flex">
                    <div className="mx-auto h-5 w-fit flex items-center justify-center text-[#1E3A8A] font-bold text-lg">
                      MSA
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mx-auto h-4 w-fit flex items-center justify-center text-[#5B6473] font-semibold">
                      Muslim Founders
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mx-auto h-4 w-fit flex items-center justify-center text-[#5B6473] font-semibold">
                      Halal Business
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mx-auto h-5 w-fit flex items-center justify-center text-[#1E3A8A] font-bold text-lg">
                      MSA
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mx-auto h-4 w-fit flex items-center justify-center text-[#5B6473] font-semibold">
                      Revenue Scaling
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mx-auto h-4 w-fit flex items-center justify-center text-[#5B6473] font-semibold">
                      Business Growth
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mx-auto h-7 w-fit flex items-center justify-center text-[#1E3A8A] font-bold text-xl">
                      MSA
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mx-auto h-6 w-fit flex items-center justify-center text-[#5B6473] font-semibold">
                      Success Stories
                    </div>
                  </div>
                </InfiniteSlider>

                <div className="bg-gradient-to-r from-white absolute inset-y-0 left-0 w-20"></div>
                <div className="bg-gradient-to-l from-white absolute inset-y-0 right-0 w-20"></div>
                <ProgressiveBlur
                  className="pointer-events-none absolute left-0 top-0 h-full w-20"
                  direction="left"
                  blurIntensity={1}
                />
                <ProgressiveBlur
                  className="pointer-events-none absolute right-0 top-0 h-full w-20"
                  direction="right"
                  blurIntensity={1}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);

  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="group bg-white/50 fixed z-20 w-full border-b backdrop-blur-3xl"
      >
        <div className="mx-auto max-w-6xl px-6 transition-all duration-300">
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
              <Link href="/" aria-label="home" className="flex items-center space-x-2">
                <Logo />
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState === true ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>

              <div className="hidden lg:block">
                <ul className="flex gap-8 text-sm">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-[#5B6473] hover:text-[#0B1220] block duration-150"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-[#5B6473] hover:text-[#0B1220] block duration-150"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button asChild variant="outline" size="sm">
                  <Link href="/case-studies">
                    <span>Case Studies</span>
                  </Link>
                </Button>
                <Button asChild size="sm">
                  <Link href="#booking">
                    <span>Book Call</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

