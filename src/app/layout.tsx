import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/layout/LayoutWrapper/layout-wrapper";
import CursorAnimation from "@/utils/CursorGlow/CursorGlow";
import ScrollProgress from "@/shared/scroll-progress/scrollProgress";
import { AppToaster } from "@/helper/toasts";
import Providers from "@/shared/scroll-progress/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Adventiq Labs | Software Solutions",
  description: "Adventiq Labs is a global software company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <LayoutWrapper>
          <ScrollProgress />
          <CursorAnimation />
          <AppToaster />
          <Providers>{children}</Providers>
        </LayoutWrapper>
      </body>
    </html>
  );
}
