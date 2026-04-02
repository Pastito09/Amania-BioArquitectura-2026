import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "@/config/fonts";




export const metadata: Metadata = {
  title: "Amania Bio Arquitectura",
  description: "Página del estudio de bio-arquitectura de la Arquitecta Ana Maria Zienka Hogan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
