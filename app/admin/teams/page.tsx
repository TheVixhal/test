"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus } from "lucide-react"
import { TeamDialog } from "@/components/admin/teams/team-dialog"
import { TeamsTable } from "@/components/admin/teams/teams-table"

export default function AdminTeamsPage() {
  const [open, setOpen] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Teams Management</h1>
        <Button onClick={() => setOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Team
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Teams</CardTitle>
        </CardHeader>
        <CardContent>
          <TeamsTable />
        </CardContent>
      </Card>

      <TeamDialog open={open} onOpenChange={setOpen} />
    </div>
  )
}