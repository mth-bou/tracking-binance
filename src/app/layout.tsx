import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Lato as FontSans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { cn } from "@/lib/utils";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/sidebar/app-sidebar";
import { cookies } from "next/headers"

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
  description: "Your preferred Binance manager dashboard",
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
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";

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
          <div className="flex h-screen overflow-hidden w-full">
            <SidebarProvider defaultOpen={defaultOpen}>
              <AppSidebar />
              <main>
                <SidebarTrigger />
                {children}
              </main>
            </SidebarProvider>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;
