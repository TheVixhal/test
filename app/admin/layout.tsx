"use client"

import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { AdminAuthGuard } from "@/components/admin/auth-guard"
import { 
  CalendarPlus, 
  BookPlus, 
  Users, 
  Building2, 
  Flag,
  LayoutDashboard,
  LogOut
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const adminRoutes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/admin',
  },
  {
    label: 'Events',
    icon: CalendarPlus,
    href: '/admin/events',
  },
  {
    label: 'Blogs',
    icon: BookPlus,
    href: '/admin/blogs',
  },
  {
    label: 'Teams',
    icon: Users,
    href: '/admin/teams',
  },
  {
    label: 'Club Leaders',
    icon: Building2,
    href: '/admin/club-leaders',
  },
  {
    label: 'Regional Leaders',
    icon: Flag,
    href: '/admin/regional-leaders',
  },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = () => {
    sessionStorage.removeItem("isAdminAuthenticated")
    router.push("/admin/login")
  }

  if (pathname === "/admin/login") {
    return children;
  }

  return (
    <AdminAuthGuard>
      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-6">
          <aside className="w-64 shrink-0">
            <div className="rounded-lg border bg-card text-card-foreground">
              <div className="p-4 border-b">
                <h2 className="text-lg font-semibold">Admin Panel</h2>
              </div>
              <ScrollArea className="h-[calc(100vh-12rem)]">
                <div className="space-y-1 p-2">
                  {adminRoutes.map((route) => (
                    <Button
                      key={route.href}
                      variant={pathname === route.href ? "secondary" : "ghost"}
                      className="w-full justify-start"
                      asChild
                    >
                      <Link href={route.href}>
                        <route.icon className="mr-2 h-4 w-4" />
                        {route.label}
                      </Link>
                    </Button>
                  ))}
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-destructive hover:text-destructive"
                    onClick={handleLogout}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </Button>
                </div>
              </ScrollArea>
            </div>
          </aside>
          <main className="flex-1 space-y-4">
            {children}
          </main>
        </div>
      </div>
    </AdminAuthGuard>
  )
}