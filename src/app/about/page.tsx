import { PageHeader } from "@/components/page-header";

export default function AboutPage() {
return (
    <main className="min-h-screen bg-primary-50 text-foreground pb-20">
      <PageHeader
        title="about"
        subtitle="other information about the website and me."
      />
    </main>
  );
}