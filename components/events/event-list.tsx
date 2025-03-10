"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Calendar, ExternalLink, Clock, MapPin, Tag } from "lucide-react"
import { format } from "date-fns"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

type Event = {
  id: string
  title: string
  description: string
  startDate: Date
  endDate: Date
  status: string
  registrationLink: string
  ytLink: string
  imageUrl?: string // New field for image
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

const EventCard = ({ event }: { event: Event }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [imageError, setImageError] = useState(false)
  
  const statusColors = {
    upcoming: "bg-blue-500",
    ongoing: "bg-green-500",
    completed: "bg-gray-500"
  }

  // Determine if we should show registration button based on status
  const showRegistration = event.status !== "completed" && event.registrationLink;

  return (
    <motion.div variants={item}>
      <Card 
        className="group relative flex flex-col h-full transform transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Section */}
        {event.imageUrl && !imageError && (
          <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
            <img
              src={event.imageUrl}
              alt={event.title}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        )}

        <div className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs text-white ${statusColors[event.status as keyof typeof statusColors]}`}>
          {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
        </div>
        
        <CardHeader className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Calendar className="h-6 w-6 text-primary" />
            </div>
            <div className="space-y-1">
              <CardTitle className="text-xl line-clamp-2 group-hover:text-primary transition-colors">
                {event.title}
              </CardTitle>
              <CardDescription className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {format(new Date(event.startDate), "PPP")}
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex-grow">
          <div className="relative">
            <p className={`text-sm text-muted-foreground ${isHovered ? 'line-clamp-none' : 'line-clamp-3'} transition-all duration-300`}>
              {event.description}
            </p>
            {!isHovered && event.description.length > 150 && (
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-background to-transparent" />
            )}
          </div>
        </CardContent>

        <CardFooter className="pt-4">
          {showRegistration && (
            <Button 
              className="w-full group/button relative overflow-hidden"
              onClick={() => window.open(event.registrationLink, '_blank')}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Register Now 
                <ExternalLink className="h-4 w-4 transform group-hover/button:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-primary/10 transform translate-y-full group-hover/button:translate-y-0 transition-transform" />
            </Button>
          )}
          {event.ytLink && (
            <Button 
              className={`w-full group/button relative overflow-hidden ${showRegistration ? 'ml-8' : ''}`}
              onClick={() => window.open(event.ytLink, '_blank')}
            >
              <span className="relative z-10 flex items-center justify-center gap-2 ml-5">
                YouTube
                <ExternalLink className="h-4 w-4 transform group-hover/button:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-primary/10 transform translate-y-full group-hover/button:translate-y-0 transition-transform" />
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}

const LoadingState = () => (
  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 p-6">
    {[1, 2, 3].map((i) => (
      <Card key={i} className="relative overflow-hidden">
        <div className="animate-pulse">
          <div className="h-48 bg-primary/20 rounded-t-lg" /> {/* Added image placeholder */}
          <CardHeader>
            <div className="h-8 w-8 bg-primary/20 rounded" />
            <div className="h-6 w-3/4 bg-primary/20 rounded" />
            <div className="h-4 w-1/2 bg-primary/20 rounded" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="h-4 w-full bg-primary/20 rounded" />
              <div className="h-4 w-5/6 bg-primary/20 rounded" />
            </div>
          </CardContent>
        </div>
      </Card>
    ))}
  </div>
)

export function EventList({ status }: { status: string }) {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const SHEET_ID = '1lLRZ6J28xRl2Oztszko1VIbQ01ZNA9FmNgWewOKA6ck'
        const API_KEY = 'AIzaSyCxtw0FYRoykePA-RSHMWLFlMg218bR_gQ'
        const RANGE = 'Events!A2:I' // Updated range to include image column
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`

        const response = await fetch(url)
        if (!response.ok) throw new Error('Failed to fetch events')
        
        const data = await response.json()
        
        const transformedEvents: Event[] = data.values.map((row: any[], index: number) => ({
          id: index.toString(),
          title: row[0],
          description: row[1],
          startDate: new Date(row[2]),
          endDate: new Date(row[3]),
          status: row[4].toLowerCase(),
          registrationLink: row[5] || '',
          imageUrl: row[6] || '', // New image URL field
          ytLink: row[7] || ''
        }))

        setEvents(transformedEvents)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch events')
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  const filteredEvents = events.filter(event => event.status === status)

  if (loading) {
    return <LoadingState />
  }

  if (error) {
    return (
      <div className="p-6 flex items-center justify-center">
        <Card className="max-w-md w-full bg-destructive/10">
          <CardContent className="flex items-center gap-4 p-6">
            <div className="rounded-full p-3 bg-destructive/20">
              <ExternalLink className="h-6 w-6 text-destructive" />
            </div>
            <div>
              <h3 className="font-semibold text-destructive">Error Loading Events</h3>
              <p className="text-sm text-destructive/80">{error}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (filteredEvents.length === 0) {
    return (
      <div className="p-6 flex items-center justify-center">
        <Card className="max-w-md w-full bg-muted/50">
          <CardContent className="flex items-center gap-4 p-6">
            <div className="rounded-full p-3 bg-muted">
              <Calendar className="h-6 w-6 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground">No {status} events found</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <motion.div 
      className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 p-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {filteredEvents.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </motion.div>
  )
}
