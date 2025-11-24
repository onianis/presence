import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-primary-40 sm:items-start">
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-display leading-10 tracking-tight text-accent-1">
            New website. New architecture.{" "}
            <p>
              <b>Better results.</b>
            </p>
          </h1>
          <p className="max-w-md text-lg leading-8 text-accent-20">
            The <b>Presence Web Portfolio</b>. <br /> <br />
            Now built from the ground up for <br /> <i>efficiency</i> and{" "}
            <i>visual appeal</i>.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
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
      </main>
    </div>
  );
}
