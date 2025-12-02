import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary-40 text-accent-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8 text-sm">
        {/* Left: placeholder text */}
        <div className="text-xs sm:text-sm text-accent-20">
          Placeholder footer text goes here. Describe your presence, credits, or whatever.
        </div>

        {/* Right: placeholder contact buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <Link
            href="#"
            className="rounded-full border border-border px-3 py-1 text-xs sm:text-sm text-accent-1 hover:bg-primary-30 transition-colors"
          >
            Email
          </Link>
          <Link
            href="#"
            className="rounded-full border border-border px-3 py-1 text-xs sm:text-sm text-accent-1 hover:bg-primary-30 transition-colors"
          >
            LinkedIn
          </Link>
          <Link
            href="#"
            className="rounded-full border border-border px-3 py-1 text-xs sm:text-sm text-accent-1 hover:bg-primary-30 transition-colors"
          >
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}