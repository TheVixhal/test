import { Mail, Users, Calendar, Building2, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const regions = [
  {
    name: 'Chandigarh Region',
    leader: {
      name: 'Vishal Singh Baraiya',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQH2eBdxOJOj9g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1707373300404?e=1738195200&v=beta&t=ADB22M6O4jeGQanvjMdPvcmranUFSHb_bUyGTyd6jdE',
      email: '23f2005593@ds.study.iitm.ac.in',
      group: 'https://chat.whatsapp.com/DSX1z0KMIlADMXP2Rl7rW',
      location: ''
    },
    stats: {
      members: 101,
      events: 0,
      chapters: 1
    }
  },
  {
    name: 'Kolkata Region',
    leader: {
      name: 'Priti Ghosh',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQGkAyUlXdMt5w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726959613957?e=1738195200&v=beta&t=GZmKIcH2caGHMDtbxK80p0o1nnM4Xqz3nkehRLVOWls',
      email: '24f2001576@ds.study.iitm.ac.in',
      group: 'https://chat.whatsapp.com/BvyPcbrCv96A59SyVTnKo',
      location: 'Miami, FL'
    },
    stats: {
      members: 95,
      events: 0,
      chapters: 2
    }
  },
  {
    name: 'Bengaluru Region',
    leader: {
      name: 'Harikrishnan D',
      image: 'https://drive.google.com/thumbnail?id=1T-VT3lUpJDbRujG6cCTt3nSqqNpXyy1U&sz=w1000',
      email: '23f3000295@ds.study.iitm.ac.in',
      group: 'https://tinyurl.com/4t2eder',
      location: 'Los Angeles, CA'
    },
    stats: {
      members: 150,
      events: 0,
      chapters: 3
    }
  },
  {
    name: 'Mumbai Region',
    leader: {
      name: 'Shashwat Upadhyay',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQEjvUsotiEztQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718320495219?e=1738195200&v=beta&t=OmMVZAX6ZJbyNtmbOMk-04lQFxdP1h1Rvi9THE_Tcdg',
      email: '23f3002413@ds.study.iitm.ac.in ',
      group: 'https://chat.whatsapp.com/DpU44UY9HtGAoPREhcoAS',
      location: 'New York City, NY'
    },
    stats: {
      members: 120,
      events: 0,
      chapters: 4
    }
  },
  {
    name: 'Chennai Region',
    leader: {
      name: 'Jitesh Kumar',
      image: 'https://drive.google.com/thumbnail?id=1z4AhXHFZIUiUkH0YJiWGg3lJAtr-JHSC',
      email: '23f3000519@es.study.iitm.ac.in',
      group: 'https://chat.whatsapp.com/IeVWA7Cwy79JDoJGtU2DL',
      location: 'New York City, NY'
    },
    stats: {
      members: 120,
      events: 0,
      chapters: 5
    }
  },
  {
    name: 'Delhi Region',
    leader: {
      name: 'Lakshya Patel',
      image: 'https://drive.google.com/thumbnail?id=1FnFKhG0oQjUTj86tLvdaBtV42p30VKYT',
      email: '23f3001274@ds.study.iitm.ac.in ',
      group: 'https://chat.whatsapp.com/BSXwalxEP7kApvqgP4WEU',
      location: 'New York City, NY'
    },
    stats: {
      members: 120,
      events: 0,
      chapters: 6
    }
  },
  {
    name: 'Hyderabad Region',
    leader: {
      name: 'Ankala Lakshmi Prabhasini',
      image: 'https://drive.google.com/thumbnail?id=1cRlrA4WNn7MRNf6gUFmpw5AyvK_nex2i',
      email: '24f2002884@ds.study.iitm.ac.in',
      group: 'https://chat.whatsapp.com/ITMDDPXFu2yArFKBzDOyr',
      location: 'New York City, NY'
    },
    stats: {
      members: 120,
      events: 0,
      chapters: 7
    }
  },
  {
    name: 'Patna Region',
    leader: {
      name: 'Pushpanjali',
      image: 'https://drive.google.com/thumbnail?id=1ZmnrDa8vcr2KJaT9fm8R-ud05sYfWJBr',
      email: '22f3002427@ds.study.iitm.ac.in',
      group: 'https://chat.whatsapp.com/HsfsQyNh23C2RAyh7NhUV',
      location: 'New York City, NY'
    },
    stats: {
      members: 120,
      events: 0,
      chapters: 8
    }
  },
];

export function RegionalLeadersList() {
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
          {regions.map((region, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-cyan-500 transition-all duration-300 backdrop-blur-sm">
              <CardHeader className="border-b border-gray-700 bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-t-lg">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">{region.name}</h3>
                  <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-200">
                    {region.stats.chapters} Chapters
                  </Badge>
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
                        <p className="text-xs text-gray-400">Members</p>
                        <p className="text-white font-medium">{region.stats.members}</p>
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
          ))}
        </div>
      </div>
    </div>
  );
}