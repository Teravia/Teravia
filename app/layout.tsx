import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import { AuthProvider } from "@/contexts/AuthContext";
import { AdminAuthProvider } from "@/contexts/AdminAuthContext";

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
      <body className="font-sans antialiased">
        <AdminAuthProvider>
          <AuthProvider>
            <Navbar />
            <main>{children}</main>
          </AuthProvider>
        </AdminAuthProvider>
      </body>
    </html>
  );
}
