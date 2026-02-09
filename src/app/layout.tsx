import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";



export const metadata: Metadata = {
  title: "Texo Prefab World",
  description: "A world of Prefabs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-linear-to-r from-white via-[#f8f5f0] to-white `}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
