import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Texo Prefab World",
  description: "A world of Prefabs",
};

export default function ContactUsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
        <div>
          {children}
        </div>
        
  );
}
