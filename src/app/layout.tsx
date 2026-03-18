import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stripe's Biggest Untold Story — A Strategic Communications Opportunity",
  description: "Stripe has built something far bigger than payments. Here's the opportunity to tell that story more explicitly.",
  openGraph: {
    title: "Stripe's Biggest Untold Story",
    description: "A strategic communications opportunity: the product has become a financial operating system. The story can go bigger.",
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
