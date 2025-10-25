import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Matéria escura",
  description: "Simulador das suas influências no universo. Aprenda física e astronomia de forma interativa!",
  keywords: ["matéria escura", "física", "astronomia", "simulação", "educação"],
  authors: [{ name: "iSmart Universe Team" }],
  robots: "index, follow",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-black text-white min-h-screen`}>
        <div className="relative">
          {/* Background gradient */}
          <div className="fixed inset-0 bg-gradient-to-br from-black via-purple-900/10 to-black -z-10"></div>
          
          {/* Stars background */}
          <div className="fixed inset-0 opacity-30 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:50px_50px] animate-pulse"></div>
          </div>
          
          {/* Navigation */}
          <NavBar />
          
          {/* Main content */}
          <main className="relative z-10 pt-16">
            {children}
          </main>
          
       
        </div>
      </body>
    </html>
  );
}
