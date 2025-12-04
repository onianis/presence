import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="w-full min-h-screen flex flex-wrap place-content-between">
        <div className="block">
          <div className="font-display font-light text-6xl text-accent-10 text-left">
            what is
          </div>
          <div className="font-display font-bold tracking-tighter text-8xl text-accent text-left">
            shota oniani
          </div>
          <div className="absolute pointer-events-none w-full h-full top-0 left-0 flex items-center justify-center">
            <div className="font-display font-bold tracking-wide text-5xl md:text-9xl text-accent text-left">
              creating
            </div>
          </div>
          <div className="font-display font-light text-6xl text-accent-10">
            today?
          </div>
        </div>
        <div className="hidden md:flex flex-row flex-wrap w-full justify-around h-full px-5 mx-5 gap-y-5 md:gap-y-0 md:px-0 md:mx-0">
          <Link
            className="font-display font-light text-3xl md:text-5xl text-accent-20 md:text-accent-30 hover:md:text-accent transition-all duration-200 ease-in-out border-b-2 hover:px-2 pb-1"
            href="/resume"
          >
            resume
          </Link>
          <Link
            className="font-display font-light text-3xl md:text-5xl text-accent-20 md:text-accent-30 hover:md:text-accent transition-all duration-200 ease-in-out border-b-2 hover:px-2"
            href="/projects"
          >
            projects
          </Link>
          <Link
            className="font-display font-light text-3xl md:text-5xl text-accent-20 md:text-accent-30 hover:md:text-accent transition-all duration-200 ease-in-out border-b-2 hover:px-2"
            href="/blog"
          >
            blog
          </Link>
          <Link
            className="font-display font-light text-3xl md:text-5xl text-accent-20 md:text-accent-30 hover:md:text-accent transition-all duration-200 ease-in-out border-b-2 hover:px-2"
            href="/hashes"
          >
            hashes
          </Link>
          <Link
            className="font-display font-light text-3xl md:text-5xl text-accent-20 md:text-accent-30 hover:md:text-accent transition-all duration-200 ease-in-out border-b-2 hover:px-2"
            href="/about"
          >
            about
          </Link>
        </div>
      </main>

      <div className="mt-8" />
    </div>
  );
}
