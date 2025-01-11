"use client"

import { Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"

interface NavbarProps {
  onMenuClick?: () => void
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <div className="border-b">
      <div className="relative flex h-16 items-center px-4">
        {/* Optional menu button for mobile screens */}
        {onMenuClick && (
          <Button
            variant="ghost"
            className="mr-4 md:hidden"
            onClick={onMenuClick}
          >
            <span className="sr-only">Toggle Menu</span>
            <Building className="h-6 w-6" />
          </Button>
        )}
        <Building className="h-8 w-8 mr-2 hidden md:block" />
        <h1 className="text-xl font-bold mr-8">Nallamala</h1>
        <div className="flex-1">
          <form>
            <div className="relative">
              <Input
                placeholder="Search..."
                className="w-[300px] pl-8"
              />
            </div>
          </form>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
          <Button>
            Sign in
          </Button>
        </div>
      </div>
    </div>
  )
}
