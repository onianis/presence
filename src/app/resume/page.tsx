import { PageHeader } from "@/components/page-header";
import Link from "next/link";
import Image from "next/image";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-primary-50 text-foreground pb-20">
      <PageHeader
        title="resume"
        subtitle="an overview of my professional journey, skills, and qualifications."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-0">
        {/* 2. Blurb + Download Section */}
        {/* 2. Blurb + Download Section */}
        <section className="flex flex-col md:flex-row gap-8 md:gap-12 mb-20 md:items-stretch">
          {/* 2.1 Blurb (approx 75% width on desktop) */}
          <div className="md:w-3/4 space-y-4 text-accent-20 leading-relaxed text-lg">
            <p>
              I am a dedicated security engineer and developer with a passion
              for building robust, user-centric applications. My journey began
              in computer science at the University of Tübingen, where I honed
              my skills in both offensive and defensive security operations.
            </p>
            <p>
              Beyond the terminal, I am deeply involved in civic engagement and
              open-source contributions. I believe in the power of technology to
              drive positive change and am constantly seeking new challenges
              that allow me to push the boundaries of what is possible in the
              digital realm.
            </p>
          </div>

          {/* 2.2 Download Buttons (Remaining width) */}
          <div className="md:w-1/4 flex flex-col gap-4 justify-stretch">
            <Link
              href="/cv_en.pdf"
              className="group flex flex-1 items-center justify-between px-4 py-3 border border-accent-20/30 rounded-sm hover:bg-accent-10/10 transition-colors"
            >
              <span className="font-display font-bold text-accent-10">
                CV (English)
              </span>
              <Image
                src="/icons/resume_download_ledicon_96.png"
                alt="Download CV (English)"
                width={24}
                height={24}
                className="text-accent-30 transition-transform duration-150 ease-out group-hover:translate-y-1"
              />
            </Link>
            <Link
              href="/cv_de.pdf"
              className="group flex flex-1 items-center justify-between px-4 py-3 border border-accent-20/30 rounded-sm hover:bg-accent-10/10 transition-colors"
            >
              <span className="font-display font-bold text-accent-10">
                CV (German)
              </span>
              <Image
                src="/icons/resume_download_ledicon_96.png"
                alt="Download CV (German)"
                width={24}
                height={24}
                className="text-accent-30 transition-transform duration-150 ease-out group-hover:translate-y-1"
              />
            </Link>
          </div>
        </section>

        {/* Future Elements Structure */}
        <div className="space-y-20">
          {/* Work Experience Placeholder */}
          <section>
            <h2 className="font-display text-3xl text-accent-10 mb-8 border-b border-accent-20/20 pb-2">
              work experience
            </h2>
            <div className="grid gap-6">
              {/* Placeholder Card */}
              <div className="p-8 border border-dashed border-accent-30/30 rounded-lg text-center text-accent-30 bg-primary-40/30">
                [Work Experience Entry Component]
              </div>
              <div className="p-8 border border-dashed border-accent-30/30 rounded-lg text-center text-accent-30 bg-primary-40/30">
                [Work Experience Entry Component]
              </div>
            </div>
          </section>

          {/* Education Placeholder */}
          <section>
            <h2 className="font-display text-3xl text-accent-10 mb-8 border-b border-accent-20/20 pb-2">
              education
            </h2>
            <div className="grid gap-6">
              <div className="p-8 border border-dashed border-accent-30/30 rounded-lg text-center text-accent-30 bg-primary-40/30">
                [Education Entry Component]
              </div>
            </div>
          </section>

          {/* Certifications Placeholder */}
          <section>
            <h2 className="font-display text-3xl text-accent-10 mb-8 border-b border-accent-20/20 pb-2">
              certifications
            </h2>
            <div className="grid gap-6">
              <div className="p-8 border border-dashed border-accent-30/30 rounded-lg text-center text-accent-30 bg-primary-40/30">
                [Certification Entry Component]
              </div>
            </div>
          </section>

          {/* Projects Placeholder */}
          <section>
            <h2 className="font-display text-3xl text-accent-10 mb-8 border-b border-accent-20/20 pb-2">
              projects & engagement
            </h2>
            <div className="grid gap-6">
              <div className="p-8 border border-dashed border-accent-30/30 rounded-lg text-center text-accent-30 bg-primary-40/30">
                [Project Entry Component]
              </div>
            </div>
          </section>

          {/* Languages Placeholder */}
          <section>
            <h2 className="font-display text-3xl text-accent-10 mb-8 border-b border-accent-20/20 pb-2">
              languages
            </h2>
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 border border-dashed border-accent-30/30 rounded-full text-accent-30 bg-primary-40/30">
                [Language Badge]
              </div>
              <div className="px-4 py-2 border border-dashed border-accent-30/30 rounded-full text-accent-30 bg-primary-40/30">
                [Language Badge]
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
