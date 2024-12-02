"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus } from "lucide-react"
import { RegionalLeaderDialog } from "@/components/admin/regional-leaders/regional-leader-dialog"
import { RegionalLeadersTable } from "@/components/admin/regional-leaders/regional-leaders-table"

export default function AdminRegionalLeadersPage() {
  const [open, setOpen] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Regional Leaders Management</h1>
        <Button onClick={() => setOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Regional Leader
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Regional Leaders</CardTitle>
        </CardHeader>
        <CardContent>
          <RegionalLeadersTable />
        </CardContent>
      </Card>

      <RegionalLeaderDialog open={open} onOpenChange={setOpen} />
    </div>
  )
}