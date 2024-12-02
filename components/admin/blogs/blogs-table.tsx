"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Pencil, Trash2 } from "lucide-react"
import { format } from "date-fns"

const dummyBlogs = [
  {
    id: "1",
    title: "House Council Elections 2024",
    content: "Learn about the upcoming elections...",
    author: "John Doe",
    createdAt: new Date("2024-03-15"),
  },
  {
    id: "2",
    title: "Cultural Festival Highlights",
    content: "Recap of the amazing performances...",
    author: "Jane Smith",
    createdAt: new Date("2024-03-10"),
  }
]

export function BlogsTable() {
  const onEdit = (id: string) => {
    // TODO: Implement edit functionality
  }

  const onDelete = async (id: string) => {
    // TODO: Implement delete functionality
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Author</TableHead>
          <TableHead>Created At</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {dummyBlogs.map((blog) => (
          <TableRow key={blog.id}>
            <TableCell className="font-medium">{blog.title}</TableCell>
            <TableCell>{blog.author}</TableCell>
            <TableCell>{format(blog.createdAt, "PPP")}</TableCell>
            <TableCell className="text-right space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onEdit(blog.id)}
              >
                <Pencil className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onDelete(blog.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}