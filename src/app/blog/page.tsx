import { PageHeader } from "@/components/page-header";

export default function BlogPage() {
return (
    <main className="min-h-screen bg-primary-50 text-foreground pb-20">
      <PageHeader
        title="blog"
        subtitle="snippets of my (among others) professional journey that i decide to put into the world."
      />
    </main>
  );
}