import { Button } from "@/components/ui/button"
import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Calendar, Award, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex-1 space-y-8 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">वसुधैव कुटुम्बकम् (The World Is One Family)</h2>
      </div>
      
      {/* Hero Section */}
      <div className="relative rounded-lg overflow-hidden h-[400px] flex items-center justify-center bg-gradient-to-r from-primary/20 to-secondary/20">
        
        <video src="11056560-hd_1920_1080_60fps.mp4"
          className="absolute top-0 left-0 w-fit h-fit object-cover z-0"
          autoPlay
          loop
          muted
          playsInline></video>
        <div className="text-center space-y-4 p-8 relative z-10">
          
          <h1 className="text-6xl font-bold">The Nallamala House</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Your house is where you seek, share, support and study together and do what you love through clubs and activities.
          </p>
          <Button size="lg" asChild>
            <Link href="/events">
              Explore Events <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Members</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4000+</div>
            <p className="text-xs text-muted-foreground">Across all teams</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Achievements</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">25+</div>
            <p className="text-xs text-muted-foreground">Awards & Recognition</p>
          </CardContent>
        </Card>
      </div>

      {/* House History */}
      <Card>
        <CardHeader>
          <CardTitle>House History</CardTitle>
          <CardDescription>Our journey through the years</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>
            Founded in 2020, Nallamala House has been a cornerstone of academic excellence and cultural diversity for over 4 years.

Named after the ancient Nallamala forest range, our house embodies the strength, resilience, and natural harmony that the region represents.

Through the years, we've fostered countless leaders, innovators, and changemakers who continue to make their mark globally.
            </p>
            <p>
              Our council has grown from a small group of passionate students to a diverse organization with multiple specialized teams,
              each contributing to the vibrant campus life we see today.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}