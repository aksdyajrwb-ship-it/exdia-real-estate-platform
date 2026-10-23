import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EXDIA | إدارة العقارات",
  description: "منصة إكسديا لإدارة العقارات والأعمال العقارية",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
