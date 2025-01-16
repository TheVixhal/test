"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EventList } from "@/components/events/event-list"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Calendar, Clock, Users } from "lucide-react"
import { motion } from "framer-motion"

// Animation variants
const pageTransition = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}



const StatsCard = ({ icon: Icon, label, value, description }: {
  icon: any
  label: string
  value: string
  description: string
}) => (
  <Card className="overflow-hidden">
    <CardHeader className="space-y-0 pb-2">
      <div className="flex items-center justify-between">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {label}
        </CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </div>
    </CardHeader>
    <div className="p-6 pt-0">
      <div className="text-2xl font-bold">{value}</div>
      <p className="text-xs text-muted-foreground">{description}</p>
    </div>
  </Card>
)

export default function EventsPage() {
  return (
    <motion.div 
      className="flex-1 space-y-8 p-8 pt-6"
      initial="hidden"
      animate="visible"
      variants={pageTransition}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Events</h2>
            <p className="text-muted-foreground">Manage and track all your events in one place</p>
          </div>
        </div>

        
      </div>
      
      <Tabs defaultValue="upcoming" className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b">
          <TabsList className="bg-background h-9 w-full sm:w-auto">
            <TabsTrigger 
              value="upcoming"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Upcoming
            </TabsTrigger>
            <TabsTrigger 
              value="ongoing"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Ongoing
            </TabsTrigger>
            <TabsTrigger 
              value="completed"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Completed
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="upcoming" className="space-y-4">
          <Card className="border-t-4 border-t-blue-500">
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Events scheduled for the future</CardDescription>
            </CardHeader>
            <EventList status="upcoming" />
          </Card>
        </TabsContent>

        <TabsContent value="ongoing" className="space-y-4">
          <Card className="border-t-4 border-t-green-500">
            <CardHeader>
              <CardTitle>Ongoing Events</CardTitle>
              <CardDescription>Currently active events</CardDescription>
            </CardHeader>
            <EventList status="ongoing" />
          </Card>
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          <Card className="border-t-4 border-t-gray-500">
            <CardHeader>
              <CardTitle>Completed Events</CardTitle>
              <CardDescription>Past events and their outcomes</CardDescription>
            </CardHeader>
            <EventList status="completed" />
          </Card>
        </TabsContent>
      </Tabs>
    </motion.div>
  )
}