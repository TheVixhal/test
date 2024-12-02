"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  Home, 
  Calendar, 
  BookOpen, 
  Users, 
  Briefcase, 
  Flag, 
  Building2, 
  ChevronLeft, 
  ChevronRight,
  Settings
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const routes = [
  {
    label: 'Home',
    icon: Home,
    href: '/',
  },
  {
    label: 'Events',
    icon: Calendar,
    href: '/events',
  },
  {
    label: 'Blogs',
    icon: BookOpen,
    href: '/blogs',
  },
  {
    label: 'Council',
    icon: Users,
    href: '/council',
  },
  {
    label: 'Teams',
    icon: Briefcase,
    href: '/teams',
  },
  {
    label: 'Club Leaders',
    icon: Building2,
    href: '/club-leaders',
  },
  {
    label: 'Regional Leaders',
    icon: Flag,
    href: '/regional-leaders',
  },
  {
    label: 'Admin',
    icon: Settings,
    href: '/admin',
  }
]

export default function Sidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className={cn(
      "relative flex flex-col h-full bg-card text-card-foreground transition-all duration-300",
      isCollapsed ? "w-16" : "w-64"
    )}>
      <div className="p-4 flex content-center justify-items-center">
        {!isCollapsed && (
          <img src="06-Nallamala-large (1).png" alt="Avatar" className="rounded-full ring-yellow-500 ring-offset-0 ring-1 h-[100px] w-[100px] ml-10" />
          
        )}
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>
      <ScrollArea className="flex-1 px-3">
        <div className="space-y-1 py-2">
          {routes.map((route) => (
            <Button
              key={route.href}
              variant={pathname === route.href ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start",
                pathname === route.href && "bg-secondary",
                isCollapsed && "px-2"
              )}
              asChild
            >
              <Link href={route.href}>
                <route.icon className={cn("h-4 w-4", !isCollapsed && "mr-2")} />
                {!isCollapsed && route.label}
              </Link>
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}