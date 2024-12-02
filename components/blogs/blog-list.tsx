"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { format } from "date-fns"

const blogs = [
  {
    id: "1",
    title: "House Council Elections 2024",
    content: "Learn about the upcoming elections and how you can participate...",
    author: "John Doe",
    createdAt: new Date("2024-03-15"),
  },
  {
    id: "2",
    title: "Cultural Festival Highlights",
    content: "Recap of the amazing performances and events from this year's fest...",
    author: "Jane Smith",
    createdAt: new Date("2024-03-10"),
  }
]

export function BlogList() {
  return (
    <div className="grid gap-6">
      {blogs.map((blog) => (
        <Card key={blog.id}>
          <CardHeader>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarFallback>{blog.author[0]}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-xl">{blog.title}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  By {blog.author} • {format(blog.createdAt, "PPP")}
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{blog.content}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}