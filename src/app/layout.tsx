import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "The Presence Web Portfolio",
  description: "Shota Sotiris Oniani on the web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-background text-foreground font-sans">
        { }
        <Navbar />
        { }
        {children}
      </body>
    </html>
  );
}
