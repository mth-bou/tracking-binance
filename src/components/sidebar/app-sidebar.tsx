import React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarFooter,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from "@/components/ui/sidebar";
import {
  ChartNoAxesColumnIcon,
  ChartPieIcon,
  Command,
  Home,
  Settings,
  WalletCardsIcon
} from "lucide-react";
import UserSidebar from "@/components/sidebar/user-sidebar";
import NavSecondary from "@/components/sidebar/nav-secondary";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Performances",
    url: "/performances",
    icon: ChartNoAxesColumnIcon,
  },
  {
    title: "Portefeuille",
    url: "/wallet",
    icon: WalletCardsIcon,
  },
  {
    title: "Reporting",
    url: "/reporting",
    icon: ChartPieIcon,
  },
  {
    title: "Paramètres",
    url: "/settings",
    icon: Settings,
  },
];

const data = {
  user: {
    name: "John Doe",
    email: "john.doe@gmail.com",
    avatar: "https://avatar.iran.liara.run/public/30"
  }
}

const AppSidebar = ({ ...props }) => {
  return (
    <Sidebar variant="inset" collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-base leading-tight">
                  <span className="truncate font-semibold">Binance</span>
                  <span className="truncate text-xs">Manager</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-2">
              {items.map(item => (
                <SidebarMenuItem key={item.title} className="">
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon size={30} />
                      <span className="text-base">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <NavSecondary className="mt-auto" />

      </SidebarContent>

      <SidebarFooter>
        <UserSidebar user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
