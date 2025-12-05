import { PageHeader } from "@/components/page-header";

export default function HashesPage() {
return (
    <main className="min-h-screen bg-primary-50 text-foreground pb-20">
      <PageHeader
        title="hashes"
        subtitle="received a file from me? here, you make sure that it hasn't been tampered with."
      />
    </main>
  );
}