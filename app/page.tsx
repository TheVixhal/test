"use client";

import dynamic from "next/dynamic";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Users, Calendar, Award, ArrowRight } from "lucide-react";
import Link from "next/link";

// Dynamically import VideoPlayer
const VideoPlayer = dynamic(() => import("@/components/VideoPlayer"), { ssr: false });

export default function Home() {
  return (
    <div className="flex-1 space-y-8 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">
          वसुधैव कुटुम्बकम् (The World Is One Family)
        </h2>
      </div>

      {/* Hero Section */}
      <div className="relative rounded-lg overflow-hidden h-[400px] flex items-center justify-center bg-gradient-to-r from-primary/20 to-secondary/20">
        <VideoPlayer />
        <div className="text-center space-y-4 p-8 relative z-10 rounded-lg">
          <h1 className="text-6xl font-bold">The Nallamala House</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your house is where you seek, share, support, and study together, pursuing passions through clubs and activities.
          </p>
          <Button size="lg" asChild>
            <Link href="/events">
              Explore Events <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Stats Section */}
     
      <div className="grid gap-4 md:grid-cols-3">
        
          
            <StatCard title="Active Members" value="4000+" icon={<Users />} description="Across all teams" />
          
           
              
            <StatCard title="Upcoming Events" value="12" icon={<Calendar />} description="This month" />
            <StatCard title="Achievements" value="25+" icon={<Award />} description="Awards & Recognition" />
      </div>    
      

      {/* House History */}
      <Card>
        <CardHeader>
          <CardTitle>House History</CardTitle>
          <CardDescription>Our journey through the years</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Founded in 2020, Nallamala House has been a cornerstone of academic excellence and cultural diversity for over 4 years.
          </p>
          <p>
            Named after the ancient Nallamala forest range, our house embodies the strength, resilience, and natural harmony that the region represents.
          </p>
          <p>
            Through the years, we've fostered countless leaders, innovators, and changemakers who continue to make their mark globally.
          </p>
        </CardContent>
      </Card>


      {/* Nallamala */}
      <Card>
        <CardHeader>
          <CardTitle>House Council</CardTitle>
          <CardDescription>Details About House Council</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
          The Student House Council consists of the Secretary, Deputy Secretary (Dep Sec), and Web Administrator (WebAdmin). The Secretary organizes meetings and manages communication, while the Deputy Secretary supports the Secretary and steps in when needed. The WebAdmin handles the house’s online presence and keeps residents informed through digital channels. Together, they ensure effective communication, organization, and a connected community.
          </p>
          
        </CardContent>
      </Card>
    </div>
  );
}

function StatCard({ title, value, icon, description }: { title: string; value: string; icon: React.ReactNode; description: string }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="h-4 w-4 text-muted-foreground">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
