import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import { Suspense } from "react";
import SidebarContainer from "@/components/Sidebar/SidebarContainer";

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
