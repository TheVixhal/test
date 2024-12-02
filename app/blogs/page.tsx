"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BlogList } from "@/components/blogs/blog-list"

export default function BlogsPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Blogs</h2>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Latest Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <BlogList />
        </CardContent>
      </Card>
    </div>
  )
}