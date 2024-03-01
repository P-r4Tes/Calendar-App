import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Calendar App",
  description: "With Typescript Pirates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
