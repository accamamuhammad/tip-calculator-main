import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Tip Calculator",
  description: "Calculate your tips with ease 😃",
};

// Import local Space Mono font
const spaceMono = localFont({
  src: [
    {
      path: "../public/fonts/SpaceMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/SpaceMono-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-space-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceMono.variable}`}>
      <body className="font-space">{children}</body>
    </html>
  );
}
