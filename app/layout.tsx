import type { Metadata } from "next";
import { Viewport } from "next";
import { Barlow_Condensed } from "next/font/google";
import "@/app/globals.css";
import { NavLinks } from "@/app/ui/nav-links";
import { BG } from "./ui/bg-dynamic";
import { ScrollToTop } from "./ui/scroll-on-top";
import { Footers } from "./ui/footers";

const barlowcond = Barlow_Condensed({ weight: ["200","300","400","500","600","700"], subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  height: 'device-height',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: {
    template: '%s | Alif',
    default: 'Alif',
  },
  description: "Created by Alif for everyone to see.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${barlowcond.className} antialiased`}>
        <BG />
        <NavLinks />
        <main>
          { children }
        </main>
        <ScrollToTop />
        <Footers />
      </body>
    </html>
  );
}
