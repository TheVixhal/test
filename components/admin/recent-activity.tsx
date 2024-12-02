"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const activities = [
  {
    id: 1,
    user: "John Doe",
    action: "created a new event",
    time: "2 hours ago",
    avatar: "JD"
  },
  {
    id: 2,
    user: "Jane Smith",
    action: "updated team members",
    time: "5 hours ago",
    avatar: "JS"
  },
  {
    id: 3,
    user: "Mike Johnson",
    action: "published a new blog post",
    time: "1 day ago",
    avatar: "MJ"
  }
]

export function RecentActivity() {
  return (
    <div className="space-y-8">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={`/avatars/${activity.id}.png`} alt={activity.user} />
            <AvatarFallback>{activity.avatar}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{activity.user}</p>
            <p className="text-sm text-muted-foreground">{activity.action}</p>
          </div>
          <div className="ml-auto text-sm text-muted-foreground">
            {activity.time}
          </div>
        </div>
      ))}
    </div>
  )
}