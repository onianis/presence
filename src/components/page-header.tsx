import { cn } from "@/lib/cn";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  className?: string;
}

export function PageHeader({ title, subtitle, className }: PageHeaderProps) {
  return (
    <div className={cn("relative w-full py-12 md:py-16 overflow-hidden mb-12", className)}>
      {/* Diagonal Lines Pattern Background */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            var(--accent-20) 0,
            var(--accent-20) 1px,
            transparent 0,
            transparent 12px
          )`
        }}
      />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-0">
        <div className="flex flex-col items-start gap-1">
          {/* Title with background to mask lines. 
              Negative margin and padding are used to create the 'padding' cutout effect 
              around the text while keeping alignment. 
          */}
          <h1 className="font-display font-bold text-5xl md:text-7xl text-accent-10 bg-primary-50 pr-6 py-2 -ml-2 pl-2 inline-block">
            {title}
          </h1>
          
          {/* Subtitle with background to mask lines */}
          <p className="font-sans text-lg md:text-xl text-accent-30 bg-primary-50 pr-6 py-1 -ml-2 pl-2 max-w-2xl inline-block">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}