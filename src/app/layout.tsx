import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reel Memory",
  description: "Web Developer • Web3 Builder • AI Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}