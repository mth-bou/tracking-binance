import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Lato as FontSans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Binance Manager Dashboard",
  description: "A Binance manager dashboard",
};

const lato = FontSans({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-sans",
});

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={cn("min-h-screen bg-background font-sans font-normal antialiased", lato.variable, geistSans.variable, geistMono.variable)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;
