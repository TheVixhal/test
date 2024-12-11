"use client"

import { Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Navbar() {
  return (
    <div className="border-b">
      <div className="relative flex h-16 items-center px-4">
        <Building className="h-8 w-8 mr-2" />
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