import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stripe Undersells What It Has Become — A Strategic Communications Critique",
  description: "The product evolved from payments API to financial operating system. The communications still describe the parts more clearly than the whole.",
  openGraph: {
    title: "Stripe Undersells What It Has Become",
    description: "A strategic communications critique: the product evolved from payments API to financial operating system.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
