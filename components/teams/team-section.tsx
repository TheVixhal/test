import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const teamMembers = {
  webops: [
    { name: "Vishal Singh Baraiya", role: "WebDev", image: "https://media.licdn.com/dms/image/v2/D4D03AQH2eBdxOJOj9g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1707373300404?e=1738195200&v=beta&t=ADB22M6O4jeGQanvjMdPvcmranUFSHb_bUyGTyd6jdE" },
    //{ name: "Emma Watson", role: "Developer", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330" }
  ],
  management: [
    { name: "Aishwanee Basu ", role: "Management Member", image: "https://i.ibb.co/SrZpYNg/Screenshot-2024-12-11-145255.png" },
    { name: "Satyam Saurabh ", role: "Management Member", image: "https://i.ibb.co/V91jvDX/Screenshot-2024-12-11-145439.png" },
    { name: "Raiyan Ahmed ", role: "Management Member", image: "https://i.ibb.co/FWmn1xj/Screenshot-2024-12-11-145610.png" },
    { name: "Nikhil Kumar ", role: "Management Member", image: "https://i.ibb.co/8sRfWLG/Screenshot-2024-12-11-145842.png" }
    
  ],
  content: [
    { name: "Ashutosh Solanke", role: "Content", image: "https://i.ibb.co/jGfMpnR/Screenshot-2024-12-11-144012.png" },
    { name: "Priyanka Dalal", role: "Content", image: "https://i.ibb.co/92JF775/Screenshot-2024-12-11-144409.png" },
    { name: "Vanshika Tiwari", role: "Content", image: "https://i.ibb.co/zr8PSdd/Screenshot-2024-12-11-144750.png" }
    
  ],
  pr: [
    { name: "Maria Garcia", role: "PR Head", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9" },
    { name: "Tom Harris", role: "Coordinator", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e" }
  ],
  design: [
    { name: "Kundan Kumar ", role: "Design Team Member", image: "https://i.ibb.co/0p7PFsq/Screenshot-2024-12-11-150445.png" },
    { name: "Anindya Mukhopadhyay ", role: "Designe Team Member", image: "https://i.ibb.co/sPNXPdt/Screenshot-2024-12-11-150555.png" }
  ]
}

export function TeamSection({ teamType }: { teamType: keyof typeof teamMembers }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="capitalize">{teamType} Team</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers[teamType].map((member) => (
            <Card key={member.name}>
              <CardHeader className="text-center">
                <Avatar className="h-24 w-24 mx-auto">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                </Avatar>
                <CardTitle className="mt-4">{member.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-cyan-600 text-primary">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}