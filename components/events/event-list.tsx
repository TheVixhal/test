"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import { format } from "date-fns"

type Event = {
  id: string
  title: string
  description: string
  startDate: Date
  endDate: Date
  status: string
}

const dummyEvents: Event[] = [
  {
    id: "1",
    title: "Annual Cultural Fest",
    description: "A celebration of diverse cultures through performances, art, and food.",
    startDate: new Date("2024-04-15"),
    endDate: new Date("2024-04-17"),
    status: "upcoming"
  },
  {
    id: "2",
    title: "Leadership Workshop",
    description: "Interactive sessions on developing leadership skills.",
    startDate: new Date("2024-03-25"),
    endDate: new Date("2024-03-25"),
    status: "ongoing"
  },
  {
    id: "3",
    title: "Sports Tournament",
    description: "Inter-house sports competition featuring various games.",
    startDate: new Date("2024-02-10"),
    endDate: new Date("2024-02-12"),
    status: "completed"
  }
]

export function EventList({ status }: { status: string }) {
  const filteredEvents = dummyEvents.filter(event => event.status === status)

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 p-6">
      {filteredEvents.map((event) => (
        <Card key={event.id}>
          <CardHeader className="flex flex-row items-center gap-4">
            <Calendar className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-xl">{event.title}</CardTitle>
              <CardDescription>
                {format(new Date(event.startDate), "PPP")}
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{event.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}