import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EventList } from "@/components/events/event-list"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"

export default function EventsPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Events</h2>
      </div>
      
      <Tabs defaultValue="upcoming" className="space-y-4">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <EventList status="upcoming" />
          </Card>
        </TabsContent>
        <TabsContent value="ongoing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Ongoing Events</CardTitle>
            </CardHeader>
            <EventList status="ongoing" />
          </Card>
        </TabsContent>
        <TabsContent value="completed" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Completed Events</CardTitle>
            </CardHeader>
            <EventList status="completed" />
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}