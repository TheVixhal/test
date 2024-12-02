"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus } from "lucide-react"
import { BlogDialog } from "@/components/admin/blogs/blog-dialog"
import { BlogsTable } from "@/components/admin/blogs/blogs-table"

export default function AdminBlogsPage() {
  const [open, setOpen] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Blogs Management</h1>
        <Button onClick={() => setOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Blog
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Blogs</CardTitle>
        </CardHeader>
        <CardContent>
          <BlogsTable />
        </CardContent>
      </Card>

      <BlogDialog open={open} onOpenChange={setOpen} />
    </div>
  )
}