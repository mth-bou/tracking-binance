"use client";

import React from 'react';
import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar";
import ThemeToggle from "@/components/ui/theme-toggle";

const NavSecondary = ({ ...props }) => {
	const { state } = useSidebar();

	return (
		<SidebarGroup {...props}>
			<SidebarGroupContent>
				<SidebarMenu>
					{state !== "collapsed" && (
						<SidebarMenuItem>
							<ThemeToggle/>
						</SidebarMenuItem>
					)}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	);
};

export default NavSecondary;
