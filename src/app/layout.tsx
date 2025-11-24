import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
