import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="w-full min-h-screen flex flex-wrap place-content-between p-10">
        <div className="hidden md:flex flex-row flex-wrap w-full justify-around h-full px-5 mx-5 mb-10 gap-y-5 md:gap-y-0 md:px-0 md:mx-0">
          <Link
            className="font-display font-light text-3xl md:text-[2.75rem] text-accent-20 md:text-accent-30 hover:md:text-accent transition-all duration-200 ease-in-out border-t-2 hover:px-2 hover:pt-2"
            href="/resume"
          >
            resume
          </Link>
          <Link
            className="font-display font-light text-3xl md:text-[2.75rem] text-accent-20 md:text-accent-30 hover:md:text-accent transition-all duration-200 ease-in-out border-t-2 hover:px-2"
            href="/projects"
          >
            projects
          </Link>
          <Link
            className="font-display font-light text-3xl md:text-[2.75rem] text-accent-20 md:text-accent-30 hover:md:text-accent transition-all duration-200 ease-in-out border-t-2 hover:px-2"
            href="/blog"
          >
            blog
          </Link>
          <Link
            className="font-display font-light text-3xl md:text-[2.75rem] text-accent-20 md:text-accent-30 hover:md:text-accent transition-all duration-200 ease-in-out border-t-2 hover:px-2"
            href="/hashes"
          >
            hashes
          </Link>
          <Link
            className="font-display font-light text-3xl md:text-[2.75rem] text-accent-20 md:text-accent-30 hover:md:text-accent transition-all duration-200 ease-in-out border-t-2 hover:px-2"
            href="/about"
          >
            about
          </Link>
        </div>

        <div className="block p-10"></div>
      </main>

      <div className="mt-8" />
    </div>
  );
}
