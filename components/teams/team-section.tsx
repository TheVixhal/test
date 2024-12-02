import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const teamMembers = {
  webops: [
    { name: "Alex Turner", role: "Team Lead", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e" },
    { name: "Emma Watson", role: "Developer", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330" }
  ],
  management: [
    { name: "David Kim", role: "Manager", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" },
    { name: "Lisa Chen", role: "Coordinator", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80" }
  ],
  content: [
    { name: "James Wilson", role: "Content Lead", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" },
    { name: "Sophie Brown", role: "Writer", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2" }
  ],
  pr: [
    { name: "Maria Garcia", role: "PR Head", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9" },
    { name: "Tom Harris", role: "Coordinator", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e" }
  ],
  design: [
    { name: "Nina Patel", role: "Design Lead", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330" },
    { name: "Chris Lee", role: "Designer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" }
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
                <p className="text-lg font-medium text-primary">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}