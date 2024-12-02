import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Mail, Phone, Linkedin } from 'lucide-react';

const councilMembers = [
  {
    name: 'Naman Shyamsukha',
    role: 'Secretary',
    image: 'https://media.licdn.com/dms/image/v2/C4D03AQHK6plqORqoGQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1656958027262?e=1738195200&v=beta&t=fVVutmRRm2lLtMdpKRPpnStzgFVaVnXtiUUeEK2DaRA',
    email: 'nallamala-sec@ds.study.iitm.ac.in',
    phone: '+91 (555) 123-4567',
    linkedin: 'linkedin.com/in/'
  },
  {
    name: 'Abhay',
    role: 'Deputy Secretary',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQGfHgTUab-3dg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1708969125364?e=1738195200&v=beta&t=GDGXKWaAhc0-byWDLwweSD_3gwCiNkkI4ab8goFSuKI',
    email: 'nallamala-ds@ds.study.iitm.ac.in',
    phone: '+91 (555) 234-5678',
    linkedin: 'linkedin.com/in/'
  },
  {
    name: 'Keshava Krishnan',
    role: 'Web Admin',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQFl53VXSSXUKQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726765355016?e=1738195200&v=beta&t=ulsNTpH1jRq9oO6jUEBIP1IsN9NjoKoEuGPCmnhP1Z4',
    email: 'nallamala-webad@ds.study.iitm.ac.in ',
    phone: '+91 (555) 345-6789',
    linkedin: 'linkedin.com/in/'
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
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-fit h-fit object-cover"
                />
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
                    <Phone className="w-4 h-4 mr-2" />
                    <span className="text-sm">{member.phone}</span>
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