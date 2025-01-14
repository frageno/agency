import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import SmoothScroll from "@/components/ui/SmoothScroll";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-merriweather',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Agency Website",
  description: "Modern Digital Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={merriweather.variable}>
      <body className="antialiased font-serif overflow-x-hidden">
        {/* <Cursor /> */}
        <Navbar />
        <SmoothScroll>
          <div className="relative z-10">
          {children}
            </div></SmoothScroll>
        <Footer />
      </body>
    </html>
  );
}