import type { Metadata } from "next";
import "./globals.css"; // Boleh dicomment kalau belum ada globals.css

export const metadata: Metadata = {
  title: "Teravia - Marketplace Properti & Ekosistem",
  description: "Platform Marketplace Properti, AI Copywriting & Jasa Konstruksi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
