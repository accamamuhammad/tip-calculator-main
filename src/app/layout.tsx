import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tip Calculator",
  description: "Calculate your tips with ease 😃",
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
