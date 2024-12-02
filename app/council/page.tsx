import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CouncilMembers } from "@/components/council/council-members"

export default function CouncilPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Student Council</h2>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Council Members</CardTitle>
        </CardHeader>
        <CardContent>
          <CouncilMembers />
        </CardContent>
      </Card>
    </div>
  )
}