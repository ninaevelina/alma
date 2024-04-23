import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Nav from "@/ui/shared/nav/nav";
import { CatProvider } from "@/contexts/CatContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alma's Catitude Tracker",
  description: "An app to keep track of Alma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CatProvider>
          <Nav />
          <main>{children}</main>
        </CatProvider>
      </body>
    </html>
  );
}
