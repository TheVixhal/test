import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ClubLeadersList } from "@/components/club-leaders/club-leaders-list"

export default function ClubLeadersPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Club Leaders</h2>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Club Representatives</CardTitle>
        </CardHeader>
        <CardContent>
          <ClubLeadersList />
        </CardContent>
      </Card>
    </div>
  )
}