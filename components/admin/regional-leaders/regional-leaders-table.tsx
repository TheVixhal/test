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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const dummyRegionalLeaders = [
  {
    id: "1",
    name: "Daniel Park",
    region: "North Campus",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    contact: "north@campus.edu"
  },
  {
    id: "2",
    name: "Rachel Kim",
    region: "South Campus",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    contact: "south@campus.edu"
  }
]

export function RegionalLeadersTable() {
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
          <TableHead>Leader</TableHead>
          <TableHead>Region</TableHead>
          <TableHead>Contact</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {dummyRegionalLeaders.map((leader) => (
          <TableRow key={leader.id}>
            <TableCell>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={leader.imageUrl} alt={leader.name} />
                  <AvatarFallback>{leader.name[0]}</AvatarFallback>
                </Avatar>
                <span className="font-medium">{leader.name}</span>
              </div>
            </TableCell>
            <TableCell>{leader.region}</TableCell>
            <TableCell>{leader.contact}</TableCell>
            <TableCell className="text-right space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onEdit(leader.id)}
              >
                <Pencil className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onDelete(leader.id)}
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