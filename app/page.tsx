"use client";

import dynamic from "next/dynamic";

import { Trophy, History, BarChart3 } from "lucide-react";
import { Cover } from "@/components/ui/cover";

const VideoPlayer = dynamic(() => import("@/components/VideoPlayer"), { ssr: false });

const communities = [
  {
    title: "Coding: Shunya",
    members: 150,
    image: "https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?q=80&w=1932&auto=format&fit=crop",
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
];

export default function Home() {
  return (
    <div className="min-h-screen">
    <div className="flex-1 space-y-2 px-4 py-6 sm:px-8 sm:py-3">
      <header className="flex items-center justify-between space-y-2">
        <h2 className="font-bold md:text-2xl dark:text-white text-black tracking-tight text-center">
          <Cover>वसुधैव कुटुम्बकम् (The World is One Family)</Cover>
        </h2>
      </header>

      {/* Hero Section */}
      <div
        className="relative rounded-xl w-full h-screen overflow-hidden">
        <VideoPlayer />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            
            <h1 className="text-6xl font-bold text-orange-600 mb-6 p-6 border-2 rounded-lg border-indigo-100"><Cover>Nallamala House</Cover></h1>
            <p className="text-xl text-indigo-100 mb-10">
            In this house, we don’t just belong. We create, we inspire, and we lead.
            </p>
            <div className="flex justify-center items-center gap-4 mx-auto mt-8">
  <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
    <button className="bg-indigo-600 bg-opacity-20 text-white px-8 py-3 border-2 rounded-lg border-white rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center gap-2">
      <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a6ca814282eca7172c6_icon_clyde_white_RGB.svg" alt="Discord Logo" className="w-12 h-8" />
      Discord
    </button>
  </a>

  <a href="https://chat.whatsapp.com/KU7peOtGciE4NriFJNXs7W" target="_blank" rel="noopener noreferrer">
    <button className="bg-indigo-600 bg-opacity-20 text-white px-8 py-3 border-2 border-white rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors flex items-center gap-2">
      <img src="whatsapp-svgrepo-com (2).svg" alt="WhatsApp Logo" className="w-12 h-8" />
      WhatsApp
    </button>
  </a>
</div>

          </div>
        </div>
      </div>


      {/* History and Stats */}
      <section className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 px-4">
        {/* House History */}
        <div className="bg-black rounded-xl p-6 sm:p-8 shadow-white shadow hover:shadow-cyan-600 transition-shadow mt-5">
          <div className="flex items-center mb-4">
            <History className="w-8 h-8 text-indigo-600 mr-3" />
            <h2 className="text-xl sm:text-2xl font-bold">Our History</h2>
          </div>
          <div className="text-sm sm:text-base text-gray-400 space-y-4">
            <p>
              Founded in 2020, Nallamala House has been a cornerstone of academic excellence and cultural diversity for over 4 years.
            </p>
            <p>
              Named after the ancient Nallamala forest range, our house embodies the strength, resilience, and natural harmony that the region represents.
            </p>
            <p>
              Through the years, we've fostered countless leaders, innovators, and changemakers who continue to make their mark globally.
            </p>
          </div>
        </div>

        {/* Member Stats */}
        <div className="bg-black rounded-xl p-6 sm:p-8 shadow-white shadow hover:shadow-indigo-600 transition-shadow mt-5">
          <div className="flex items-center mb-4">
            <BarChart3 className="w-8 h-8 text-indigo-600 mr-3" />
            <h2 className="text-xl sm:text-2xl font-bold">House Statistics</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-8 text-white">
            {[
              { label: "Rank", value: "2" },
              { label: "Members", value: "4000" },
              { label: "Alumni", value: "50" },
              { label: "Clubs & Societies", value: "10" },
              { label: "Events", value: "100+" },
              { label: "Awards", value: "20+" },
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-xl sm:text-3xl font-bold">{stat.value}</p>
                <p className="text-sm opacity-80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Clubs */}
      <section className="max-w-6xl mx-auto px-4">
        <header className="flex items-center mb-6 mt-7">
          <Trophy className="w-8 h-8 text-indigo-600 mr-3" />
          <h2 className="text-xl sm:text-2xl font-bold">Featured Clubs</h2>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {communities.map((community, index) => (
            <div
              key={index}
              className="bg-transparent rounded-lg shadow shadow-white hover:shadow-green-600 transition-shadow overflow-hidden"
            >
              <img
                src={community.image}
                alt={community.title}
                className="w-full h-48 sm:h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{community.title}</h3>
                <p className="text-sm text-indigo-600">{community.members} Active Members</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div> </div>
  );
}
