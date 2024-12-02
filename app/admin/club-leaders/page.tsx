"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus } from "lucide-react"
import { ClubLeaderDialog } from "@/components/admin/club-leaders/club-leader-dialog"
import { ClubLeadersTable } from "@/components/admin/club-leaders/club-leaders-table"

export default function AdminClubLeadersPage() {
  const [open, setOpen] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Club Leaders Management</h1>
        <Button onClick={() => setOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Club Leader
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Club Leaders</CardTitle>
        </CardHeader>
        <CardContent>
          <ClubLeadersTable />
        </CardContent>
      </Card>

      <ClubLeaderDialog open={open} onOpenChange={setOpen} />
    </div>
  )
}