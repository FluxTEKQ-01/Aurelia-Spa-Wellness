import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-geist-sans",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-geist-mono",
  weight: ["400", "600"],
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aurelia Grove | Blueprint Desk",
  description: "A dark-first founder war-room and tactical planning surface.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} ${fraunces.variable} h-full antialiased dark`}
    >
      <body className="min-h-full bg-background text-foreground planner-bg">
        <div className="flex min-h-screen flex-col lg:flex-row">
          <SiteHeader />
          <main className="flex-1 overflow-hidden">
            <div className="container mx-auto px-4 py-8 lg:py-12">
              {children}
            </div>
            <SiteFooter />
          </main>
        </div>
      </body>
    </html>
  );
}
