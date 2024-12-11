// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, Linkedin } from 'lucide-react';
import { Cover } from "@/components/ui/cover";

const councilMembers = [
  {
    name: 'Naman Shyamsukha',
    role: 'Secretary',
    image: 'https://i.ibb.co/QQ4j9b4/Screenshot-2024-12-11-141436.png',
    email: 'nallamala-sec@ds.study.iitm.ac.in',
    phone: '+91 79985 55833',
    linkedin: 'https://www.linkedin.com/in/namanshyamsukha/'
  },
  {
    name: 'Abhay',
    role: 'Deputy Secretary',
    image: 'https://i.ibb.co/2ZMNKdy/Whats-App-Image-2024-12-03-at-11-49-10.jpg',
    email: 'nallamala-ds@ds.study.iitm.ac.in',
    phone: '+91 89554 27212',
    linkedin: 'linkedin.com/in/'
  },
  {
    name: 'Keshava Krishnan',
    role: 'Web Admin',
    image: 'https://i.ibb.co/t3WtXVk/Screenshot-2024-12-11-141832.png',
    email: 'nallamala-webad@ds.study.iitm.ac.in ',
    phone: '+91 85559 67584',
    linkedin: 'https://www.linkedin.com/in/kln12/'
  }
 
]

export function CouncilMembers() {
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {councilMembers.map((member, index) => (
            <div
              key={index}
              className="bg-transparent rounded-xl overflow-hidden shadow-white shadow hover:shadow-lg transition-shadow"
            >
              <div className="h-60 overflow-hidden">
                <Cover><img
                  src={member.image}
                  alt={member.name}
                  className="w-fit h-fit object-cover"
                /></Cover>
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
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    
                  </a>
                  <a
                    href={`https://${member.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    <span className="text-sm">LinkedIn Profile</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
