import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navbar from "@/components/Navbar";

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
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          {" "}
          <div className="attribution">
            Challenge by{" "}
            <Link
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </Link>
            . Coded by{" "}
            <Link href="https://www.linkedin.com/in/ioannis-nikitopoulos-547a99122/">
              Ioannis Nikitopoulos
            </Link>
            .
          </div>
        </footer>
      </body>
    </html>
  );
}
