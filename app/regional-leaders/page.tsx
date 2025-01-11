import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RegionalLeadersList } from "@/components/regional-leaders/regional-leaders-list"

export default function RegionalLeadersPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">

      <Card>
        <CardHeader>
          <CardTitle></CardTitle>
        </CardHeader>
        <CardContent>
          <RegionalLeadersList />
        </CardContent>
      </Card>
    </div>
  )
}