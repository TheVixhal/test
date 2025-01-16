"use client"

import { Mail, Phone, Linkedin } from 'lucide-react'
import { Cover } from "@/components/ui/cover"
import { useEffect, useState } from "react"

type CouncilMember = {
  name: string
  role: string
  image: string
  email: string
  phone: string
  linkedin: string
}

const LoadingState = () => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[1, 2, 3].map((i) => (
      <div key={i} className="bg-transparent rounded-xl overflow-hidden shadow-white shadow animate-pulse">
        <div className="h-60 bg-gray-700" />
        <div className="p-6 space-y-4">
          <div className="h-6 bg-gray-700 rounded w-3/4" />
          <div className="h-4 bg-gray-700 rounded w-1/2" />
          <div className="space-y-3">
            <div className="h-4 bg-gray-700 rounded w-full" />
            <div className="h-4 bg-gray-700 rounded w-full" />
            <div className="h-4 bg-gray-700 rounded w-full" />
          </div>
        </div>
      </div>
    ))}
  </div>
)

export function CouncilMembers() {
  const [members, setMembers] = useState<CouncilMember[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const SHEET_ID = '1lLRZ6J28xRl2Oztszko1VIbQ01ZNA9FmNgWewOKA6ck'
        const API_KEY = 'AIzaSyCxtw0FYRoykePA-RSHMWLFlMg218bR_gQ'
        const RANGE = 'Council!A2:F' // Adjust range based on your sheet structure
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`

        const response = await fetch(url)
        if (!response.ok) throw new Error('Failed to fetch council members')
        
        const data = await response.json()
        
        const transformedMembers: CouncilMember[] = data.values.map((row: any[]) => ({
          name: row[0] || '',
          role: row[1] || '',
          image: row[2] || '',
          email: row[3] || '',
          
          linkedin: row[5] || ''
        }))

        setMembers(transformedMembers)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch council members')
      } finally {
        setLoading(false)
      }
    }

    fetchMembers()
  }, [])

  if (error) {
    return (
      <div className="min-h-screen p-8 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="bg-red-500/10 text-red-500 p-4 rounded-xl">
            <h3 className="font-semibold">Error Loading Council Members</h3>
            <p>{error}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Council Description */}
        <div className="bg-transparent rounded-xl p-8 shadow shadow-cyan-600 mb-12">
          <p className="text-white leading-relaxed">
            The Nallamala House Council serves as the governing body of our community,
            working tirelessly to enhance student life, organize events, and maintain
            our traditions. Our council members are dedicated to fostering an inclusive
            and vibrant environment for all residents.
          </p>
        </div>

        {/* Council Members Grid */}
        {loading ? (
          <LoadingState />
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member, index) => (
              <div
                key={index}
                className="bg-transparent rounded-xl overflow-hidden shadow-white shadow hover:shadow-lg transition-shadow"
              >
                <div className="h-60 overflow-hidden">
                  <Cover>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-fit h-fit object-cover"
                    />
                  </Cover>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-indigo-600 font-medium mb-4">{member.role}</p>
                  
                  {/* Contact Information */}
                  <div className="space-y-3">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      <span className="text-sm">{member.email}</span>
                    </a>
                    
                    {member.linkedin && (
                      <a
                        href={member.linkedin.startsWith('http') ? member.linkedin : `https://${member.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
                      >
                        <Linkedin className="w-4 h-4 mr-2" />
                        <span className="text-sm">LinkedIn Profile</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}