"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { 
  Home, 
  Calendar, 
  BookOpen, 
  Award,
  Briefcase, 
  Flag, 
  Building2, 
  ChevronLeft, 
  ChevronRight,
  Settings,
  ChevronDown,
  ChevronUp,
  LucideIcon,
  Map,
  Users,
  Clock,
  Star,
 
  ClubIcon
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// Define types for routes
type RouteItem = {
  label: string;
  icon: LucideIcon;
  href?: string;
  children?: RouteItem[];
};

const routes: RouteItem[] = [
  { label: "Home", icon: Home, href: "/" },
  { label: "Events", icon: Calendar, href: "/events" },
  { label: "Blogs", icon: BookOpen, href: "/blogs" },
  { 
    label: "Present UHC", 
    icon: Building2, 
    children: [
      { label: "Council", icon: Award, href: "/council" },
      { label: "Teams", icon: Users, href: "/teams" },
      { label: "Regional Leaders", icon: Map, href: "/regional-leaders" }
    ]
  },
  { 
    label: "Previous UHCs", 
    icon: Clock, 
    children: [
      { label: "2023-2024", icon: Star, href: "https://sites.google.com/student.onlinedegree.iitm.ac.in/nallamala/house-council/2023-24" },
      { label: "2022-2023", icon: Star, href: "https://sites.google.com/student.onlinedegree.iitm.ac.in/nallamala/house-council/2022-23" },
      { label: "2021-2022", icon: Star, href: "https://sites.google.com/student.onlinedegree.iitm.ac.in/nallamala/house-council/2021-22" }
    ]
  },
  { label: "Club Leaders", icon: ClubIcon, href: "/club-leaders" },
  { label: "Admin Panel", icon: Settings, href: "/admin" },
];

export default function Sidebar(): JSX.Element {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
  const [openDropdowns, setOpenDropdowns] = useState<{ [key: string]: boolean }>({});

  const toggleDropdown = (label: string): void => {
    setOpenDropdowns(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  const renderRoutes = (routeList: RouteItem[], level: number = 0): JSX.Element[] => {
    return routeList.map((route) => {
      if (route.children) {
        const isOpen = openDropdowns[route.label];
        return (
          <Collapsible 
            key={route.label} 
            open={isOpen} 
            onOpenChange={() => toggleDropdown(route.label)}
          >
            <CollapsibleTrigger asChild>
              <Button
                variant={pathname?.startsWith(`/${route.label.toLowerCase().replace(' ', '-')}`) ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start",
                  pathname?.startsWith(`/${route.label.toLowerCase().replace(' ', '-')}`) && "bg-secondary",
                  isCollapsed && "px-2",
                  "py-4 text-lg"
                )}
              >
                <route.icon className={cn("h-6 w-6", !isCollapsed && "mr-4")} />
                {!isCollapsed && (
                  <div className="flex items-center justify-between w-full">
                    {route.label}
                    {isOpen ? <ChevronUp className="h-4 w-4 ml-2" /> : <ChevronDown className="h-4 w-4 ml-2" />}
                  </div>
                )}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              {!isCollapsed && renderRoutes(route.children, level + 1)}
            </CollapsibleContent>
          </Collapsible>
        );
      }

      // Regular route
      return (
        <Button
          key={route.href}
          variant={pathname === route.href ? "secondary" : "ghost"}
          className={cn(
            "w-full justify-start",
            pathname === route.href && "bg-secondary",
            isCollapsed && "px-2",
            level > 0 && "pl-8", // Indent nested routes
            "py-4 text-lg"
          )}
          asChild
        >
          <Link
            href={route.href || '/'}
            aria-label={route.label}
            prefetch={true}
            onClick={() => setIsCollapsed(true)} // Collapse the sidebar on click
          >
            <route.icon className={cn("h-6 w-6", !isCollapsed && "mr-4")} />
            {!isCollapsed && route.label}
          </Link>
        </Button>
      );
    });
  };

  return (
    <div
      className={cn(
        "z-50 fixed flex flex-col h-full bg-card text-card-foreground transition-all duration-300 shadow shadow-white",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="p-4 flex items-center">
        {!isCollapsed && (
          <Image
            src="/Nallamala-House.png"
            alt="Nallamala House Logo"
            className="rounded-full ring-yellow-500 ring-offset-0 ring-1 h-[120px] w-[120px] ml-10"
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
        <div className="space-y-5 py-5">
          {renderRoutes(routes)}
        </div>
      </ScrollArea>

      {!isCollapsed && (
        <div className="p-4 text-center text-sm text-muted-foreground">
          Made with <span className="text-red-500">❤️</span> by Vishal Baraiya
        </div>
      )}
    </div>
  );
}
