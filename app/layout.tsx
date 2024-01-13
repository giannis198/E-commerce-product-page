import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ToastProvider } from "@/providers/toast-provider";
import Footer from "@/components/Footer";

const kumbh = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce product page",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={kumbh.className}>
        <header>
          <ToastProvider />
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />{" "}
        </footer>
      </body>
    </html>
  );
}
