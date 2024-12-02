"use client";

import dynamic from "next/dynamic";

import {Trophy, History, BarChart3 } from 'lucide-react';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Users, Calendar, Award, ArrowRight } from "lucide-react";
import Link from "next/link";

// Dynamically import VideoPlayer
const VideoPlayer = dynamic(() => import("@/components/VideoPlayer"), { ssr: false });

const communities = [
  {
    title: 'Coding: Shunya',
    members: 150,
    image: "https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: 'Chess: Grand Master Guild',
    members: 75,
    image: "https://plus.unsplash.com/premium_photo-1670183859029-99a0a2c1912b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: 'AI-ML: AIDW',
    members: 100,
    image: "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

export default function Home() {
  return (
    <div className="flex-1 space-y-8 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">
          वसुधैव कुटुम्बकम् (The World is One Family)
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

      
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* House History */}
          <div className="bg-black rounded-xl p-8 shadow shadow-white hover:shadow-cyan-600 transition-shadow">
            <div className="flex items-center mb-6">
              <History className="w-8 h-8 text-indigo-600 mr-3" />
              <h2 className="text-2xl font-bold">Our History</h2>
            </div>
            <div className="space-y-4 text-gray-400">
              <p>
                Founded in 2020, Nallamala House has been a cornerstone of academic excellence
                and cultural diversity for over 4 years.
              </p>
              <p>
                Named after the ancient Nallamala forest range, our house embodies the strength,
                resilience, and natural harmony that the region represents.
              </p>
              <p>
                Through the years, we've fostered countless leaders, innovators, and changemakers
                who continue to make their mark globally.
              </p>
            </div>
          </div>

          {/* Member Stats */}
          <div className="bg-black shadow shadow-white rounded-xl hover:shadow-indigo-600 p-8 text-white">
            <div className="flex items-center mb-6">
              <BarChart3 className="w-8 h-8 mr-3 text-indigo-600" />
              <h2 className="text-2xl font-bold">House Statistics</h2>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {[
                { label: 'Rank', value: '2' },
                { label: 'Members', value: '4000' },
                { label: 'Alumni', value: '50' },
                { label: 'Clubs & Societies', value: '10' },
                { label: 'Events', value: '100+' },
                { label: 'Awards', value: '20+' }
              ].map((stat, index) => (
                <div key={index}>
                  <p className="text-3xl font-bold mb-1">{stat.value}</p>
                  <p className="text-sm opacity-80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      
      
      
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Trophy className="w-8 h-8 text-indigo-600 mr-3" />
              <h2 className="text-3xl font-bold">Featured Clubs</h2>
            </div>
            
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {communities.map((community, index) => (
              <div
                key={index}
                className="bg-transparent rounded-xl shadow shadow-white overflow-hidden hover:shadow-green-600 transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={community.image}
                    alt={community.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{community.title}</h3>
                  <p className="text-indigo-600">
                    {community.members} Active Members
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    
  );
}


