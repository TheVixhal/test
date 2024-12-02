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

const dummyEvents = [
  {
    id: "1",
    title: "Annual Cultural Fest",
    description: "A celebration of diverse cultures",
    startDate: new Date("2024-04-15"),
    endDate: new Date("2024-04-17"),
    status: "upcoming"
  },
  {
    id: "2",
    title: "Leadership Workshop",
    description: "Interactive sessions on leadership",
    startDate: new Date("2024-03-25"),
    endDate: new Date("2024-03-25"),
    status: "ongoing"
  }
]

export function EventsTable() {
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
          <TableHead>Status</TableHead>
          <TableHead>Start Date</TableHead>
          <TableHead>End Date</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {dummyEvents.map((event) => (
          <TableRow key={event.id}>
            <TableCell className="font-medium">{event.title}</TableCell>
            <TableCell className="capitalize">{event.status}</TableCell>
            <TableCell>{format(event.startDate, "PPP")}</TableCell>
            <TableCell>{format(event.endDate, "PPP")}</TableCell>
            <TableCell className="text-right space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onEdit(event.id)}
              >
                <Pencil className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onDelete(event.id)}
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