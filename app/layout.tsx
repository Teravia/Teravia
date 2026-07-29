import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// 1. TAMBAHKAN IMPORT NAVBAR DI SINI
import Navbar from "@/components/Navbar"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Teravia - Marketplace Properti Terpercaya",
  description: "Cari dan jual properti impianmu dengan mudah.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        
        {/* 2. PASANG NAVBAR DI SINI (Di atas {children}) */}
        <Navbar />

        {/* Konten halaman kamu (Home, Add Listing, dll) akan dirender di sini */}
        <main>{children}</main>

      </body>
    </html>
  );
}
