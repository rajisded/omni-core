import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/Sidebar";
import { TopNav } from "@/components/layout/TopNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Omni Core | AI Agent Team Management",
  description: "The Operating System for AI Agent Teams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-bg-primary text-text-primary flex`}>
        <Sidebar />
        <div className="flex-1 flex flex-col md:ml-[260px] min-h-screen">
          <TopNav />
          <main className="flex-1 p-6 overflow-x-hidden">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
