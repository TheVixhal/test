"use client"

import { Mail, Users, Calendar, Building2, ExternalLink } from 'lucide-react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useEffect, useState } from "react"

interface RegionalLeader {
  name: string
  leader: {
    name: string
    image: string
    email: string
    group: string
    location: string
  }
  stats: {
    level: string
    events: number
    
  }
}

const LoadingCard = () => (
  <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
    <CardHeader className="border-b border-gray-700 bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-t-lg">
      <div className="animate-pulse flex items-center justify-between">
        <div className="h-6 w-32 bg-gray-600 rounded" />
        <div className="h-6 w-24 bg-gray-600 rounded" />
      </div>
    </CardHeader>
    <CardContent className="pt-6">
      <div className="animate-pulse">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-20 h-20 rounded-full bg-gray-600" />
          <div>
            <div className="h-5 w-32 bg-gray-600 rounded mb-2" />
            <div className="h-4 w-24 bg-gray-600 rounded" />
          </div>
        </div>
        <div className="space-y-4">
          <div className="h-4 w-full bg-gray-600 rounded" />
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="h-16 bg-gray-600 rounded" />
            <div className="h-16 bg-gray-600 rounded" />
          </div>
          <div className="h-10 w-full bg-gray-600 rounded" />
        </div>
      </div>
    </CardContent>
  </Card>
)

export function RegionalLeadersList() {
  const [regions, setRegions] = useState<RegionalLeader[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const SHEET_ID = '1lLRZ6J28xRl2Oztszko1VIbQ01ZNA9FmNgWewOKA6ck'
        const API_KEY = 'AIzaSyCxtw0FYRoykePA-RSHMWLFlMg218bR_gQ'
        const RANGE = 'RC!A2:K' // Adjust range based on your sheet structure
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`

        const response = await fetch(url)
        if (!response.ok) throw new Error('Failed to fetch regional leaders')
        
        const data = await response.json()
        
        const transformedRegions: RegionalLeader[] = data.values.map((row: any[]) => ({
          name: row[0] || '',
          leader: {
            name: row[1] || '',
            image: row[4] || '',
            email: row[2] || '',
            group: row[3] || '',
            location: row[5] || ''
          },
          stats: {
            level: (row[6]) || '',
            events: parseInt(row[7]) || '',
            
          }
        }))

        setRegions(transformedRegions)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch regional leaders')
      } finally {
        setLoading(false)
      }
    }

    fetchRegions()
  }, [])

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black-900 to-gray-800 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="bg-red-500/10 text-red-500 p-4 rounded-xl inline-block">
            <h3 className="font-semibold">Error Loading Regional Leaders</h3>
            <p>{error}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black-900 to-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-4">Regional Leaders</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Meet our dedicated regional coordinators who help build and nurture our community across different locations
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
          {loading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <LoadingCard key={index} />
            ))
          ) : (
            regions.map((region, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-cyan-500 transition-all duration-300 backdrop-blur-sm">
                <CardHeader className="border-b border-gray-700 bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-t-lg">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-white">{region.name}</h3>
                    
                  </div>
                </CardHeader>
                
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <Avatar className="w-20 h-20 border-2 border-cyan-500">
                      <AvatarImage src={region.leader.image} alt={region.leader.name} />
                      <AvatarFallback>{region.leader.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-white text-lg">{region.leader.name}</h4>
                      <p className="text-gray-400 text-sm">Regional Coordinator</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors">
                      <Mail className="w-4 h-4 mr-3" />
                      <a href={`mailto:${region.leader.email}`} className="text-sm truncate">
                        {region.leader.email}
                      </a>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="flex items-center space-x-2 bg-gray-700/30 rounded-lg p-3">
                        <Users className="w-4 h-4 text-cyan-400" />
                        <div>
                          <p className="text-xs text-gray-400">Level</p>
                          <p className="text-white font-medium">{region.stats.level}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 bg-gray-700/30 rounded-lg p-3">
                        <Calendar className="w-4 h-4 text-cyan-400" />
                        <div>
                          <p className="text-xs text-gray-400">Events</p>
                          <p className="text-white font-medium">{region.stats.events}</p>
                        </div>
                      </div>
                    </div>

                    <a 
                      href={region.leader.group}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      LinkedIn
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  )
}