'use client'

import { useState } from 'react'
import { Users, Calendar, ExternalLink, Search } from 'lucide-react'
import { motion } from 'framer-motion'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { formatDate } from "@/utils/format-date"

interface Event {
  id: number
  title: string
  date: string
  description: string
  registrationLink?: string
  image: string
}

const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "Classical AI vs Quantum AI vs Photonic AI",
    date: "2024-04-15",
    description: "Blog about Classical AI vs Quantum AI vs Photonic AI ",
    registrationLink: "https://medium.com/@vixal/classical-ai-vs-quantum-ai-vs-photonic-ai-4adfc8b99023",
    image: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*9O_s2PNmLN7nYM27lN0oow.jpeg"
  },
  {
    id: 2,
    title: "The Hidden Wiki: How To Access Dark Web?",
    date: "2024-04-20",
    description: "How to access dark web?",
    registrationLink: "https://medium.com/@vixal/the-hidden-wiki-how-to-access-dark-web-4496cfc6d7fd",
    image: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*xd1jvPKVZhupaO2M4lPzAg.png"
  }
]

const BlogList = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredEvents = upcomingEvents.filter(event =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const EventCard: React.FC<{ event: Event }> = ({ event }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden h-full bg-card hover:shadow-lg transition-all duration-300 border-muted">
        <div className="aspect-video overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        </div>
        <CardHeader>
          <h3 className="text-2xl font-semibold tracking-tight line-clamp-2">
            {event.title}
          </h3>
          <div className="flex items-center text-muted-foreground mt-2">
            <Calendar className="w-4 h-4 mr-2" />
            <time dateTime={event.date}>{formatDate(event.date)}</time>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground line-clamp-3">
            {event.description}
          </p>
        </CardContent>
        <CardFooter>
          {event.registrationLink && (
            <Button
              asChild
              className="w-full"
            >
              <a
                href={event.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center"
              >
                Read Article
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Latest Blog Posts
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore our latest articles about technology, artificial intelligence, and cybersecurity.
        </p>
      </div>

      {/* Search Section */}
      <div className="max-w-md mx-auto mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            type="search"
            placeholder="Search articles..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {filteredEvents.length > 0 ? (
          filteredEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-muted-foreground">No articles found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default BlogList

