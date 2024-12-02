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

const dummyTeams = [
  {
    id: "1",
    name: "WebOps Team",
    description: "Website development and maintenance",
    type: "webops",
  },
  {
    id: "2",
    name: "Content Team",
    description: "Content creation and management",
    type: "content",
  }
]

export function TeamsTable() {
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
          <TableHead>Name</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {dummyTeams.map((team) => (
          <TableRow key={team.id}>
            <TableCell className="font-medium">{team.name}</TableCell>
            <TableCell className="capitalize">{team.type}</TableCell>
            <TableCell>{team.description}</TableCell>
            <TableCell className="text-right space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onEdit(team.id)}
              >
                <Pencil className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onDelete(team.id)}
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