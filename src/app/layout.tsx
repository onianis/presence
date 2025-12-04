import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { VantaBackground } from "@/components/vanta-background";

export const metadata: Metadata = {
  title: "shota oniani",
  description: "Shota Sotiris Oniani on the web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-primary-50 text-foreground font-sans flex min-h-screen flex-col">
        {/* <VantaBackground /> */}

        {/* Global nav */}
        <Navbar />

        {/* Page content + footer container */}
        <div className="flex min-h-screen bg-primary-50 flex-col pb-14 md:pb-0">
          {/* Main route content grows to push footer down */}
          <div className="flex-1">
            {children}
          </div>

          {/* Global footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}