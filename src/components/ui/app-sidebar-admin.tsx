"use client";

import type * as React from "react";
import { BriefcaseBusiness, Grid, IdCard, Settings, LogOut } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation"; 
import Link from "next/link";

import {
  Sidebar,
  SidebarContent,
  SidebarRail,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupContent,
  useSidebar,
} from "@/components/ui/sidebar";

import { useDispatch } from "react-redux";
import { openLogoutModal } from "@/redux/features/logoutModalSlice";
import { LogoutModal } from "./modals/logout";


const navigationItems = [
  { title: "Overview", icon: Grid, url: "/admin-dashboard" },
  { title: "User Management", icon: IdCard, url: "/admin-dashboard/user-management" },
  { title: "Job Management", icon: BriefcaseBusiness, url: "/admin-dashboard/job-management" },
  { title: "Settings", icon: Settings, url: "/admin-dashboard/settings" },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { isMobile, state, setOpen } = useSidebar();
  const pathname = usePathname();
  const dispatch = useDispatch();

  const handleNavClick = (url: string) => {
    if (state === "collapsed" && !isMobile) {
      setOpen(true);
      setTimeout(() => {
        window.location.href = url;
      }, 150);
    } else {
      window.location.href = url;
    }
  };

  return (
    <>
      <Sidebar collapsible="icon" {...props} className="flex flex-col h-screen">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo Auth"
            width={80}
            height={80}
            className="mx-4 w-16 sm:w-20 md:w-24 h-auto mt-4 mb-8"
          />
        </Link>

        {/* Navigation */}
        <SidebarContent className="flex-1 flex flex-col justify-between">
          <div>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navigationItems.map((item) => {
                    const isActive = pathname === item.url;
                    return (
                      <SidebarMenuItem key={item.title}>
                        <Link href={item.url}>
                          <SidebarMenuButton
                            size="lg"
                            tooltip={item.title}
                            className={`group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:items-center group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:!w-12 group-data-[collapsible=icon]:!h-12 group-data-[collapsible=icon]:!p-0 group-data-[collapsible=icon]:mx-auto ${
                              isActive ? "bg-primary text-primary-foreground" : ""
                            }`}
                          >
                            <item.icon
                              className={`size-5 group-data-[collapsible=icon]:size-5 ${
                                isActive ? "text-primary-foreground" : ""
                              }`}
                            />
                            <span className="group-data-[collapsible=icon]:hidden text-base">
                              {item.title}
                            </span>
                          </SidebarMenuButton>
                        </Link>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </div>

          {/* Logout button at bottom */}
          <div className="mb-6">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  size="lg"
                  tooltip="Logout"
                  onClick={() => dispatch(openLogoutModal())}
                  className="group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:items-center group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:!w-12 group-data-[collapsible=icon]:!h-12 group-data-[collapsible=icon]:!p-0 group-data-[collapsible=icon]:mx-auto text-red-500 hover:bg-red-50"
                >
                  <LogOut className="size-5 group-data-[collapsible=icon]:size-5 text-red-500" />
                  <span className="group-data-[collapsible=icon]:hidden text-base">
                    Logout
                  </span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </div>
        </SidebarContent>

        <SidebarRail />
      </Sidebar>

      {/* Logout Modal */}
      <LogoutModal />
    </>
  );
}
