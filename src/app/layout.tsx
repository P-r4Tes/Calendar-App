import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import { Suspense } from "react";
import SidebarContainer from "@/components/Sidebar/SidebarContainer";
import Script from "next/script";

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
      <head>
        <Script src="https://developers.kakao.com/sdk/js/kakao.js"></Script>
      </head>
      <body className="flex">
        <Suspense>
          <SidebarContainer />
        </Suspense>

        <div className="flex flex-col flex-1">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
