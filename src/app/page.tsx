import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main
        className="
          w-full
          min-h-[calc(100vh-3.5rem)]   /* 3.5rem = mobile bottom bar (h-14) */
          flex flex-col
          justify-center                /* center content vertically in that space */
          md:p-10
        "
      >
        <div className="hidden md:flex flex-row flex-wrap w-full justify-around h-full px-5 mx-5 mb-10 gap-y-5 md:gap-y-0 md:px-0 md:mx-0">
          <Link
            className="font-display font-light text-3xl md:text-[2.75rem] text-accent-20 md:text-accent-30 hover:md:text-accent transition-all duration-200 ease-in-out border-t-2 hover:px-2 hover:pt-4"
            href="/resume"
          >
            resume
          </Link>
          <Link
            className="font-display font-light text-3xl md:text-[2.75rem] text-accent-20 md:text-accent-30 hover:md:text-accent transition-all duration-200 ease-in-out border-t-2 hover:px-2 hover:pt-4"
            href="/projects"
          >
            projects
          </Link>
          <Link
            className="font-display font-light text-3xl md:text-[2.75rem] text-accent-20 md:text-accent-30 hover:md:text-accent transition-all duration-200 ease-in-out border-t-2 hover:px-2 hover:pt-4"
            href="/blog"
          >
            blog
          </Link>
          <Link
            className="font-display font-light text-3xl md:text-[2.75rem] text-accent-20 md:text-accent-30 hover:md:text-accent transition-all duration-200 ease-in-out border-t-2 hover:px-2 hover:pt-4"
            href="/hashes"
          >
            hashes
          </Link>
          <Link
            className="font-display font-light text-3xl md:text-[2.75rem] text-accent-20 md:text-accent-30 hover:md:text-accent transition-all duration-200 ease-in-out border-t-2 hover:px-2 hover:pt-4"
            href="/about"
          >
            about
          </Link>
        </div>

        <div className="grid *:font-display w-full px-5 *******">
          <div className="text-5xl text-accent-20">what is</div>
          <div className="text-7xl tracking-tightest">shota oniani</div>
          <div className="text-7xl tracking-tighter font-bold py-5">
            verbhere
          </div>
          <div className="text-5xl text-accent-20">today?</div>
        </div>
      </main>
    </div>
  );
}
