import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Undercover",
  description: "jeu de role tres drole",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/icone.png" />
      </head>
      <body className="flex flex-col min-h-screen">
      <Navbar />
      <div className={`${inter.className} flex-grow p-6`}>{children}</div>
      <Footer />
      </body>
    </html>
  );
}