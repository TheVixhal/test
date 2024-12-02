import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const councilMembers = [
  {
    name: "Sarah Johnson",
    role: "President",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    contact: "president@council.edu"
  },
  {
    name: "Michael Chen",
    role: "Vice President",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    contact: "vp@council.edu"
  },
  {
    name: "Emily Rodriguez",
    role: "Secretary",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    contact: "secretary@council.edu"
  }
]

export function CouncilMembers() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {councilMembers.map((member) => (
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
            <p className="text-sm text-muted-foreground mt-2">{member.contact}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}