import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex max-w-7xl w-full min-h-screen items-center justify-center">
        <div className="flex flex-row flex-nowrap w-full justify-around">
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
      </main>
        <div className="mt-8" />
    </div>
  );
}
