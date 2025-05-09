import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Admin",
    url: "/admin",
    icon: Home,
  },
  {
    title: "Manager",
    url: "admin/manager",
    icon: Inbox,
  },
  {
    title: "Form Management",
    url: "/admin/forms",
    icon: Calendar,
  }
]

export function AppSidebar() {
  return (
    <Sidebar className="p-4">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg md:text-2xl font-semibold py-5">Freddie AI</SidebarGroupLabel>
          <SidebarGroupContent className="my-5">
            <SidebarMenu className="text-lg md:text-xl">
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
    </Sidebar>
  )
}
