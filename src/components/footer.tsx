/* eslint-disable react/jsx-no-comment-textnodes */
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-primary-40 text-accent-10">
      <div className="w-full flex flex-col flex-nowrap gap-y-4 md:gap-y-2 py-3 md:pt-5 md:pb-3 select-none">
        <div className="mx-auto flex flex-row max-w-7xl items-start justify-between gap-4 px-4 text-sm w-full">
          <div className="flex items-center">
            <Image
              src="/icons/logo_color_512.png"
              alt="Logo"
              width={128}
              height={128}
              className="w-16 h-16 md:w-20 md:h-20"
            />
            <div className="font-display font-bold text-2xl md:text-3xl grid grid-cols-1 grid-rows-3 [&>span]:leading-[0.75] [&>span]:tracking-tighter ml-1">
              <span className="row-start-1">shota</span>
              <span className="row-start-2">sotiris</span>
              <span className="row-start-0">oniani.</span>
            </div>
          </div>

          {/* Right: placeholder contact buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-1 md:gap-4 *:w-8 *:h-8 *:md:w-12 *:md:h-12">
            <Link
              href="mailto:fake@email.com"
              className="group relative inline-block"
            >
              <Image
                src="/icons/cont_email_light_ledicon_64.png"
                width={64}
                height={64}
                alt="Email Icon (light)"
                className="rounded-sm transition-opacity duration-200 ease-out group-hover:opacity-0"
              />
              <Image
                src="/icons/cont_email_dark_ledicon_64.png"
                width={64}
                height={64}
                alt="Email Icon (dark)"
                className="absolute inset-0 rounded-sm opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100"
              />
            </Link>

            <Link href="#" className="group relative inline-block">
              <Image
                src="/icons/cont_github_light_ledicon_64.png"
                width={64}
                height={64}
                alt="GitHub Icon (light)"
                className="rounded-sm transition-opacity duration-200 ease-out group-hover:opacity-0"
              />
              <Image
                src="/icons/cont_github_dark_ledicon_64.png"
                width={64}
                height={64}
                alt="GitHub Icon (dark)"
                className="absolute inset-0 rounded-sm opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100"
              />
            </Link>

            <Link href="#" className="group relative inline-block">
              <Image
                src="/icons/cont_linkedin_light_ledicon_64.png"
                width={64}
                height={64}
                alt="LinkedIn Icon (light)"
                className="rounded-sm transition-opacity duration-200 ease-out group-hover:opacity-0"
              />
              <Image
                src="/icons/cont_linkedin_dark_ledicon_64.png"
                width={64}
                height={64}
                alt="LinkedIn Icon (dark)"
                className="absolute inset-0 rounded-sm opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100"
              />
            </Link>

            <Link
              href="mailto:fake@email.com"
              className="group relative inline-block"
            >
              <Image
                src="/icons/cont_xing_light_ledicon_64.png"
                width={64}
                height={64}
                alt="Xing Icon (light)"
                className="rounded-sm transition-opacity duration-200 ease-out group-hover:opacity-0"
              />
              <Image
                src="/icons/cont_xing_dark_ledicon_64.png"
                width={64}
                height={64}
                alt="Xing Icon (dark)"
                className="absolute inset-0 rounded-sm opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-row flex-nowrap mx-auto max-w-7xl w-full justify-between px-4">
          <div className="flex flex-col justify-center [&>span]:tracking-tighter">
            <span className="font-display font-light text-md md:text-3xl text-accent-30">
              the Presence Web Portfolio{" "}
              <span className="font-mono text-accent-20 text-sm md:text-[1.3rem] align-middle">
                // v1.0
              </span>
            </span>
            <span className="font-display text-sm md:text-lg">
              S.S.O Enterprises - all rights reserved ©2025
            </span>
          </div>
          <div className="flex flex-col justify-end text-accent-30 *:text-right *:hover:text-accent-10 *:transition-all *:duration-300 *:linear text-sm md:text-lg">
            <Link href="/legal" className="font-mono">
              legal
            </Link>
            <Link href="/about" className="font-mono">
              about
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
