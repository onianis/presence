import { cn } from "@/lib/cn";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  className?: string;
}

export function PageHeader({ title, subtitle, className }: PageHeaderProps) {
  return (
    <div
      className={cn(
        "relative w-full py-12 md:py-16 overflow-hidden mb-12",
        className
      )}
    >
      {/* Diagonal Lines Pattern Background - Mobile */}
      <div
        className="absolute inset-0 z-0 opacity-40 pointer-events-none md:hidden"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            var(--accent-20),
            var(--accent-20) 2px,
            transparent 2px,
            transparent 12px
          )`,
        }}
      />

      {/* Diagonal Lines Pattern Background - Desktop */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none hidden md:block"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            var(--accent-20),
            var(--accent-20) 1.5px,
            transparent 1.5px,
            transparent 12px
          )`,
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-0">
        <div className="flex flex-col items-start gap-1">
          {/* Title with background to mask lines. 
              Using equal padding (px-6) and negative margin (-ml-6) to center the 
              background box around the text while maintaining text alignment.
          */}
          <h1 className="font-display font-bold text-5xl md:text-7xl text-accent-10 bg-primary-50 px-6 py-2 -ml-6 inline-block">
            {title}
          </h1>

          {/* Subtitle with background to mask lines */}
          <p className="font-sans text-lg md:text-xl text-accent-30 bg-primary-50 px-6 py-1 -ml-6 max-w-5xl inline-block">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
