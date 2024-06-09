/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

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
      <body className={`${inter.className} ${poppins.className}`}>
        <NavBar />
        <main className="pt-16">
          {" "}
          {/* Adjust padding to match NavBar height */}
          {children}
        </main>{" "}
        <Footer />
      </body>
    </html>
  );
}
