import React, { useState } from 'react';
import { Users, Calendar, ExternalLink } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  registrationLink?: string;
  image: string;
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
];


const BlogList = () => {
  const [activeTab] = useState<'upcoming' | 'ongoing'>('upcoming');

  const EventCard: React.FC<{ event: Event }> = ({ event }) => (
    <div className="bg-transparent rounded-xl shadow-white shadow overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="h-48 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
        <p className="text-gray-600 mb-4">{event.description}</p>
        <div className="flex items-center text-gray-500 mb-4">
          <Calendar className="w-5 h-5 mr-2" />
          <span>{event.date}</span>
        </div>
        {event.registrationLink && (
          <a
            href={event.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Read
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen p-8">
      <div className="flex items-center mb-8">
        
       
      </div>   
        
        {/* Tabs */}
        

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {activeTab === 'upcoming'
            ? upcomingEvents.map(event => <EventCard key={event.id} event={event} />)
            : upcomingEvents.map(event => <EventCard key={event.id} event={event} />)
          }
        </div>
      
    </div>
  );
};

export default BlogList;