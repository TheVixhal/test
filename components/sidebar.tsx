"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
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
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useMemo } from "react";

const routes = [
  { label: "Home", icon: Home, href: "/" },
  { label: "Events", icon: Calendar, href: "/events" },
  { label: "Blogs", icon: BookOpen, href: "/blogs" },
  { label: "Council", icon: Users, href: "/council" },
  { label: "Teams", icon: Briefcase, href: "/teams" },
  { label: "Club Leaders", icon: Building2, href: "/club-leaders" },
  { label: "Regional Leaders", icon: Flag, href: "/regional-leaders" },
  { label: "Admin", icon: Settings, href: "/admin" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const renderedRoutes = useMemo(() => {
    return routes.map((route) => (
      <Button
        key={route.href}
        variant={pathname === route.href ? "secondary" : "ghost"}
        className={cn(
          "w-full justify-start",
          pathname === route.href && "bg-secondary",
          isCollapsed && "px-2",
          // Increased padding and larger text
          "py-4 text-lg"
        )}
        asChild
      >
        {/* Link component with prefetching */}
        <Link href={route.href} aria-label={route.label} prefetch={true}>
          <route.icon className={cn("h-6 w-6", !isCollapsed && "mr-4")} />
          {!isCollapsed && route.label}
        </Link>
      </Button>
    ));
  }, [pathname, isCollapsed]);

  return (
    <div
      className={cn(
        "relative flex flex-col h-full bg-card text-card-foreground transition-all duration-300",
        isCollapsed ? "w-16" : "w-64" // Increased sidebar width
      )}
    >
      <div className="p-4 flex items-center">
        {!isCollapsed && (
          <Image
            src="06-Nallamala-large (1).png"
            alt="Nallamala House Logo"
            className="rounded-full ring-yellow-500 ring-offset-0 ring-1 h-[120px] w-[120px] ml-10" // Larger image
            width={120}
            height={120}
          />
        )}
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto"
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      <ScrollArea className="flex-1 px-3">
        <div className="space-y-2 py-4">{renderedRoutes}</div> {/* Increased spacing between items */}
      </ScrollArea>
    </div>
  );
}
