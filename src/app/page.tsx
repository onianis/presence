import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="w-full py-5 px-8 min-h-screen">
        <div className="font-display font-light text-6xl text-accent-10 text-left">
          what is
        </div>
        <div className="font-display font-bold tracking-tighter text-8xl text-accent text-left">
          shota oniani
        </div>
        <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center">
          <div className="font-display font-bold tracking-wide text-9xl text-accent text-left">
            creating
          </div>
        </div>
        <div className="font-display font-light text-6xl text-accent-10 text-right absolute bottom-0 right-0 my-40 mx-8">
          today?
        </div>
      </main>

      <div className="flex flex-row flex-nowrap w-full justify-around absolute bottom-0">
        <Link
          className="flex h-12 w-full items-center justify-center rounded-full border border-border bg-primary-20 font-mono text-accent-1 px-5 transition-colors hover:bg-primary-10 md:w-[158px]"
          href="/resume"
        >
          Resume
        </Link>
        <Link
          className="flex h-12 w-full items-center justify-center rounded-full border border-border bg-primary-20 font-mono text-accent-1 px-5 transition-colors hover:bg-primary-10 md:w-[158px]"
          href="/projects"
        >
          Projects
        </Link>
        <Link
          className="flex h-12 w-full items-center justify-center rounded-full border border-border bg-primary-20 font-mono text-accent-1 px-5 transition-colors hover:bg-primary-10 md:w-[158px]"
          href="/blog"
        >
          Blog
        </Link>
        <Link
          className="flex h-12 w-full items-center justify-center rounded-full border border-border bg-primary-20 font-mono text-accent-1 px-5 transition-colors hover:bg-primary-10 md:w-[158px]"
          href="/hashes"
        >
          Hashes
        </Link>
        <Link
          className="flex h-12 w-full items-center justify-center rounded-full border border-border bg-primary-20 font-mono text-accent-1 px-5 transition-colors hover:bg-primary-10 md:w-[158px]"
          href="/about"
        >
          About
        </Link>
      </div>
      <div className="mt-8" />
    </div>
  );
}
