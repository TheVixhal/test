'use client'

import { useState, useEffect } from 'react'
import { Users, Calendar, ExternalLink, Search } from 'lucide-react'
import { motion } from 'framer-motion'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { formatDate } from "@/utils/format-date"

interface BlogPost {
  id: string
  title: string
  date: string
  description: string
  Link?: string
  image?: string
}

const LoadingCard = () => (
  <Card className="overflow-hidden h-full bg-card border-muted">
    <div className="aspect-video overflow-hidden bg-muted animate-pulse" />
    <CardHeader>
      <div className="h-8 bg-muted rounded animate-pulse mb-2" />
      <div className="h-4 w-1/3 bg-muted rounded animate-pulse" />
    </CardHeader>
    <CardContent>
      <div className="space-y-2">
        <div className="h-4 bg-muted rounded animate-pulse" />
        <div className="h-4 bg-muted rounded animate-pulse w-2/3" />
      </div>
    </CardContent>
    <CardFooter>
      <div className="h-10 w-full bg-muted rounded animate-pulse" />
    </CardFooter>
  </Card>
)

const BlogList = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const SHEET_ID = '1lLRZ6J28xRl2Oztszko1VIbQ01ZNA9FmNgWewOKA6ck'
        const API_KEY = 'AIzaSyCxtw0FYRoykePA-RSHMWLFlMg218bR_gQ'
        const RANGE = 'Blogs!A2:F' // Adjust range based on your sheet structure
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`

        const response = await fetch(url)
        if (!response.ok) throw new Error('Failed to fetch blog posts')
        
        const data = await response.json()
        
        const transformedPosts: BlogPost[] = data.values.map((row: any[], index: number) => ({
          id: index.toString(),
          title: row[1] || '',
          date: row[2] || '',
          description: row[3] || '',
          Link: row[4],
          image: row[5]
        }))

        setPosts(transformedPosts)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch blog posts')
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden h-full bg-card hover:shadow-lg transition-all duration-300 border-muted">
        <div className="aspect-video overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        </div>
        <CardHeader>
          <h3 className="text-2xl font-semibold tracking-tight line-clamp-2">
            {post.title}
          </h3>
          <div className="flex items-center text-muted-foreground mt-2">
            <Calendar className="w-4 h-4 mr-2" />
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground line-clamp-3">
            {post.description}
          </p>
        </CardContent>
        <CardFooter>
          {post.Link && (
            <Button
              asChild
              className="w-full"
            >
              <a
                href={post.Link}
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

      {/* Error State */}
      {error && (
        <div className="text-center py-12">
          <p className="text-destructive">{error}</p>
        </div>
      )}

      {/* Articles Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {loading ? (
          // Loading State
          Array.from({ length: 4 }).map((_, index) => (
            <LoadingCard key={index} />
          ))
        ) : filteredPosts.length > 0 ? (
          filteredPosts.map(post => (
            <BlogCard key={post.id} post={post} />
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