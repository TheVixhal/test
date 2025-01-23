"use client";

import dynamic from "next/dynamic";
import { Trophy, History, BarChart3, ChevronDown, ExternalLink, Calendar } from "lucide-react";
import { Cover } from "@/components/ui/cover";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState } from 'react';
import { EventList } from "@/components/events/event-list"

const VideoPlayer = dynamic(() => import("@/components/VideoPlayer"), { ssr: false });

// Types
interface Statistic {
  label: string;
  value: string;
  suffix: string;
  icon: string;
  description: string;
}

interface Community {
  title: string;
  members: number;
  image: string;
}

interface HistoryMilestone {
  year: number;
  title: string;
  description: string;
  icon: string;
}

// Data
const statistics: Statistic[] = [
  {
    label: "Awards Won",
    value: "2",
    suffix: "",
    icon: "🏆",
    description: "Recognition earned",
  },
  {
    label: "Active Members",
    value: "4000",
    suffix: "+",
    icon: "👥",
    description: "And growing strong",
  },
  {
    label: "Distinguished Alumni",
    value: "50",
    suffix: "+",
    icon: "🎓",
    description: "Global leaders",
  },
  {
    label: "Clubs & Societies",
    value: "10",
    suffix: "",
    icon: "🎪",
    description: "Active communities",
  },
  {
    label: "Events Hosted",
    value: "100",
    suffix: "+",
    icon: "🎯",
    description: "Annual activities",
  },
  {
    label: "Team Size",
    value: "10",
    suffix: "+",
    icon: "🏅",
    description: "Our Team",
  }
];

const historyMilestones: HistoryMilestone[] = [
  {
    year: 2020,
    title: "Foundation",
    description: "Nallamala House was established, marking the beginning of a new legacy at IIT Madras.",
    icon: "🏛️"
  },
  {
    year: 2021,
    title: "First Achievements",
    description: "Won multiple inter-house competitions and established core clubs and societies.",
    icon: "🏆"
  },
  {
    year: 2022,
    title: "Growth & Innovation",
    description: "Expanded to over 2000 members and launched innovative student initiatives.",
    icon: "📈"
  },
  {
    year: 2023,
    title: "Global Recognition",
    description: "Our alumni network spread across India, ",
    icon: "🌏"
  }
];

const communities: Community[] = [
  {
    title: "Coding: Shunya",
    members: 150,
    image: "https://mathspp.com/blog/the-most-obscure-hello-world-program/thumbnail.webp",
  },
  {
    title: "Chess: Grand Master Guild",
    members: 75,
    image: "https://plus.unsplash.com/premium_photo-1670183859029-99a0a2c1912b?q=80&w=2071&auto=format&fit=crop",
  },
  {
    title: "AI-ML: AIDW",
    members: 100,
    image: "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1932&auto=format&fit=crop",
  },
  {
    title: "Chapter & Verses",
    members: 100,
    image: "https://images.unsplash.com/photo-1634276933388-e4bca1f31bec?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// Components
interface StatCardProps {
  stat: Statistic;
  index: number;
}

interface SocialButtonProps {
  href: string;
  icon: string;
  label: string;
  hoverColor: string;
}

const StatCard: React.FC<StatCardProps> = ({ stat, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="relative group"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
    <Card className="bg-black/40 backdrop-blur-sm border-white/10 group-hover:border-indigo-500/50 transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center space-x-4">
          <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
          <div className="flex-1">
            <p className="text-sm text-gray-400 group-hover:text-indigo-400 transition-colors">
              {stat.label}
            </p>
            <div className="flex items-baseline space-x-1">
              <h3 className="text-3xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                {stat.value}
              </h3>
              <span className="text-indigo-500 font-medium">{stat.suffix}</span>
            </div>
            <p className="text-xs text-gray-500 mt-2 group-hover:text-gray-400">
              {stat.description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const HouseStatistics = () => {
  return (
    <section className="space-y-8">
      <div className="flex items-center">
        <BarChart3 className="w-8 h-8 text-indigo-600 mr-3" />
        <div>
          <h2 className="text-3xl font-bold text-white">House Statistics</h2>
          <p className="text-gray-400 text-sm mt-1">Our achievements in numbers</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {statistics.map((stat, index) => (
          <StatCard key={index} stat={stat} index={index} />
        ))}
      </div>
    </section>
  );
};

const HouseHistory: React.FC = () => {
  const [expandedMilestone, setExpandedMilestone] = useState<number | null>(null);

  return (
    <section className="space-y-8">
      <div className="flex items-center">
        <History className="w-8 h-8 text-indigo-600 mr-3" />
        <div>
          <h2 className="text-3xl font-bold text-white">Our Legacy</h2>
          <p className="text-gray-400 text-sm mt-1">A journey of excellence since 2020</p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-600 to-purple-600" />

        <div className="space-y-8">
          {historyMilestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-10"
            >
              <div className="absolute left-[13px] -translate-x-1/2 w-3 h-3 rounded-full bg-indigo-600 
                            shadow-lg shadow-indigo-500/50" />
              
              <Card 
                className="bg-black/40 backdrop-blur-sm border-white/5 hover:border-indigo-500/30 
                          transition-all cursor-pointer"
                onClick={() => setExpandedMilestone(expandedMilestone === index ? null : index)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{milestone.icon}</span>
                      <span className="text-indigo-400 font-mono">{milestone.year}</span>
                    </div>
                    <ChevronDown 
                      className={`w-5 h-5 transition-transform duration-300 
                                ${expandedMilestone === index ? 'rotate-180' : ''}`}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white mt-2 group-hover:text-indigo-300 
                               transition-colors">
                    {milestone.title}
                  </h3>
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: expandedMilestone === index ? 'auto' : 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-400 mt-4 leading-relaxed">
                      {milestone.description}
                    </p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 p-6 rounded-lg bg-gradient-to-r from-indigo-600/10 to-purple-600/10 
                     border border-indigo-500/20"
        >
          <p className="text-white text-lg leading-relaxed">
          The Nallamala (also called the Nallamala Range) are a section of the Eastern Ghats which forms the eastern boundary of Rayalaseema region of the state of Andhra. The Nallamala Forests are the largest stretch of undisturbed forest in South India.

The cool breeze, lush greenery and the entrancing picturesque forests make it one of the best eco-tourist spots in South India where nature’s ethereal symphony can be heard. Away from the maddening crowds, concrete jungles and noises of engines, it is home to the Chenchu Tribe as well as to a diverse range of flora and fauna.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const FeaturedClubs = () => {
  return (
    <section className="space-y-8">
      <header className="flex items-center">
        <Trophy className="w-8 h-8 text-indigo-600 mr-2" />
        <h2 className="text-3xl font-bold">Featured Clubs</h2>
      </header>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {communities.map((community, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10" />
            
            <Image
              src={community.image}
              alt={community.title}
              className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
              width={600}
              height={400}
              quality={90}
              priority
            />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <h3 className="text-2xl font-bold text-white mb-2">{community.title}</h3>
              <p className="text-indigo-400 mb-4">{community.members} Active Members</p>
              <Button 
                variant="outline" 
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
              >
                Learn More
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const HeroSection = () => {
  return (
    <div className="relative rounded-xl w-full h-screen max-h-[90vh] overflow-hidden">
      <VideoPlayer />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <div className="max-w-4xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
                          from-orange-500 to-pink-500 mb-6 p-6">
              <Cover>Nallamala House</Cover>
            </h1>
            <p className="text-2xl text-indigo-100 mb-10">
              In this house, we don't just belong. We create, we inspire, and we lead.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center items-center gap-6"
          >
            <SocialButton
              href="https://www.instagram.com/housenallamala/"
              icon="instagram.svg"
              label="Follow us"
              hoverColor="purple"
            />
            <SocialButton
              href="https://www.linkedin.com/company/nallamala-house-iit-madras"
              icon="linkin.svg"
              label="Connect"
              hoverColor="cyan"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const SocialButton: React.FC<SocialButtonProps> = ({ href, icon, label, hoverColor }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="group"
  >
    <Button 
      variant="outline"
      className={`bg-white/10 backdrop-blur-sm border-2 px-8 py-6 text-lg font-semibold
                 hover:bg-${hoverColor}-700/20 hover:border-${hoverColor}-500 transition-all duration-300`}
    >
      <img
        src={icon}
        alt={`${label} Logo`}
        className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform"
      />
      {label}
    </Button>
  </a>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="py-6">
          <h2 className="font-bold text-2xl text-center">
            <Cover>वसुधैव कुटुम्बकम् (The World is One Family)</Cover>
          </h2>
        </header>

        <HeroSection />

        <div className="space-y-24 py-24">
          <HouseHistory />
          <HouseStatistics />
          <section className="space-y-8">
          <header className="flex items-center">
              <Calendar className="w-8 h-8 text-indigo-600 mr-3" />
              <h2 className="text-3xl font-bold">Events</h2>
              
          </header>
          <EventList status={"ongoing"} />
          </section>
          
          <FeaturedClubs />
          
        </div>
      </div>
    </main>
  );
}