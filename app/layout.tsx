import type React from "react";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import CursorEffect from "@/components/CursorEffect";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Saer El Masri | Portfolio",
  description: "Hi, I am Saer and this is my portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className} ${poppins.className}`}>
        <AnimatedBackground />
        <CursorEffect />
        <NavBar />
        <main className="pt-16 relative z-10">{children}</main>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
