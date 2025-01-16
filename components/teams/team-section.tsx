"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"
import { Loader2 } from "lucide-react"

const SHEET_ID = '1lLRZ6J28xRl2Oztszko1VIbQ01ZNA9FmNgWewOKA6ck'
const API_KEY = 'AIzaSyCxtw0FYRoykePA-RSHMWLFlMg218bR_gQ'
const RANGE = 'Team!A2:F'
const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`

interface TeamMember {
  name: string
  role: string
  image: string
  team: string
}

export function TeamSection({ teamType }: { teamType: string }) {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        setLoading(true)
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Failed to fetch team data')
        }
        const data = await response.json()
        
        // Transform sheet data into TeamMember objects
        const members: TeamMember[] = data.values.map((row: string[]) => ({
          name: row[1] || '',
          role: row[2] || '',
          image: row[3] || '',
          team: row[0]?.toLowerCase() || ''
        }))

        setTeamMembers(members)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchTeamData()
  }, [])

  // Filter members by team type
  const filteredMembers = teamMembers.filter(
    member => member.team.toLowerCase() === teamType.toLowerCase()
  )

  if (loading) {
    return (
      <Card className="min-h-[400px] flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-cyan-600" />
      </Card>
    )
  }

  if (error) {
    return (
      <Card className="min-h-[400px] flex items-center justify-center">
        <div className="text-center space-y-2">
          <p className="text-red-500">Failed to load team members</p>
          <p className="text-sm text-gray-500">{error}</p>
        </div>
      </Card>
    )
  }

  if (filteredMembers.length === 0) {
    return (
      <Card className="min-h-[400px] flex items-center justify-center">
        <p className="text-gray-500">No team members found for {teamType} team</p>
      </Card>
    )
  }

  return (
    <Card className="">
      <CardHeader className="space-y-4">
        <Badge variant="secondary" className="w-fit">
          Our Team
        </Badge>
        <CardTitle className="text-3xl font-bold capitalize">
          {teamType} Team
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredMembers.map((member) => (
            <Card 
              key={member.name} 
              className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <CardHeader className="text-center">
                <Avatar className="h-32 w-32 mx-auto ring-4 ring-white shadow-lg transition-transform duration-300 group-hover:scale-105">
                  <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                  <AvatarFallback className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white text-xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="mt-4 text-xl font-semibold transition-colors duration-300 group-hover:text-cyan-600">
                  {member.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center pb-6">
                <Badge variant="secondary" className="transition-all duration-300 group-hover:bg-cyan-100 group-hover:text-cyan-700">
                  {member.role}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default TeamSection;