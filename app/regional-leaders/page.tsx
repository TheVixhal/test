import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RegionalLeadersList } from "@/components/regional-leaders/regional-leaders-list"

export default function RegionalLeadersPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Regional Leaders</h2>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Regional Representatives</CardTitle>
        </CardHeader>
        <CardContent>
          <RegionalLeadersList />
        </CardContent>
      </Card>
    </div>
  )
}