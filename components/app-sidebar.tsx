import {
  Ampersand,
  Clapperboard,
  Home,
  Tv,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Movie",
    url: "/movie",
    icon: Clapperboard,
  },
  {
    title: "TV Show",
    url: "/tv",
    icon: Tv,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="bg-secondary">
        <SidebarGroup>
          <SidebarGroupLabel>Section</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-purple-800 text-white">
        <div className="flex items-center justify-center gap-2 flex-col">
       
          <h3>Powered by</h3>
          <span className="flex items-center gap-2">
            <Image src="/tmdb.svg" alt="TMDB" width={50} height={50} />
            <Ampersand />
            <Image src="/vidsrc.svg" alt="VIDSRC" width={50} height={50} />
          </span>
         
         <span className="text-xs">Developed by: Michael Yalon</span>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
