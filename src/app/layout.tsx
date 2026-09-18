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
  style: ["italic", "normal"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Historic Landmarks of San Francisco",
    template: "%s | Historic Landmarks of San Francisco",
  },
  description:
    "A guide to the 48 officially designated historical landmarks of California that are located in the city and county of San Francisco, including Union Square, Mission Dolores, and the Presidio.",
  metadataBase: new URL("https://www.hlosf.com"),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${workSans.variable} ${cormorant.variable}`}>
      <body className="font-sans bg-background text-foreground h-screen flex flex-col">
        <Header />
        <div className="w-full flex-1">
          <NavBar />
          <main className="my-12 px-6 w-full max-w-225 mx-auto">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
