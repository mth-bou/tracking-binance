import React from "react";
import type { Metadata } from "next";
import { Lato as FontSans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { cn } from "@/lib/utils";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/sidebar/app-sidebar";
import { cookies } from "next/headers"
import Header from "@/components/header/header";

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
	// Sidebar state management
	const cookieStore = await cookies();
	const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";

	return (
		<html lang="fr" suppressHydrationWarning>
		<body
			className={cn("min-h-screen font-sans font-normal antialiased", lato.variable)}
		>
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
		>
			<div className="flex h-screen overflow-hidden w-full">
				<SidebarProvider defaultOpen={defaultOpen}>
					<AppSidebar/>
					<SidebarInset>
						<div>
							<Header/>
							{children}
						</div>
					</SidebarInset>
				</SidebarProvider>
			</div>
		</ThemeProvider>
		</body>
		</html>
	);
}

export default RootLayout;
