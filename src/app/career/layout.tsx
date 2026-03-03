import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PremiumFooter from "@/components/Footer";



export const metadata: Metadata = {
  title: "Texo Prefab World",
  description: "A world of Prefabs",
};

export default function CareerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <PremiumFooter />
      </body>
    </html>
  );
}
