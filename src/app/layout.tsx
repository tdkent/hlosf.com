import type { Metadata } from "next";
import { Cormorant, Work_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import NavBar from "@/components/layout/NavBar";

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Historic Landmarks of San Francisco",
  description:
    "A guide to the 48 officially designated historical landmarks of California that are located in the city and county of San Francisco, including Union Square, Mission Dolores, and the Presidio.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${workSans.variable} ${cormorant.variable} antialiased`}
    >
      <body className="font-sans bg-background text-foreground">
        <div id="backdrop-hook"></div>
        <div id="modal-hook"></div>
        <Header />
        <NavBar />
        <div className="min-h-[calc(100vh-16rem)]">
          <main className="w-full mx-auto my-12 px-2 max-w-225">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
