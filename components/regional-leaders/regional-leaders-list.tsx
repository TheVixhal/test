// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cover } from "@/components/ui/cover";
import { Mail, Link } from 'lucide-react';

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
]

export function RegionalLeadersList() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto">
        

       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regions.map((region, index) => (
           <div
              key={index}
              className="bg-black rounded-xl overflow-hidden shadow shadow-white hover:scale-[1.02] transition-transform"
            >
              {/* Region Header */}
              <div className="bg-cyan-600 p-4">
                <h3 className="text-xl font-semibold text-white">{region.name}</h3>
              </div>

              {/* Leader Information */}
              <div className="p-6">
                <div className="flex items-center mb-6">
                 <Cover> <img
                    src={region.leader.image}
                    alt={region.leader.name}
                    className="w-20 h-20 rounded-full object-cover"
                  /></Cover>
                 
                  <div className="ml-4">
                    <h4 className="font-semibold">{region.leader.name}</h4>
                    <p className="text-sm text-gray-600">Regional Coordinator</p>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-3 mb-6">
                  <a
                    href={`mailto:${region.leader.email}`}
                    className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    <span className="text-sm">{region.leader.email}</span>
                  </a>
                  
                  
                
                </div>

                {/* Region Stats */}
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

