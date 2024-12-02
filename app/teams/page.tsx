import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TeamSection } from "@/components/teams/team-section"

export default function TeamsPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Teams</h2>
      </div>

      <Tabs defaultValue="webops" className="space-y-4">
        <TabsList>
          <TabsTrigger value="webops">WebOps</TabsTrigger>
          <TabsTrigger value="management">Management</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="pr">PR</TabsTrigger>
          <TabsTrigger value="design">Design</TabsTrigger>
        </TabsList>
        {["webops", "management", "content", "pr", "design"].map((team) => (
          <TabsContent key={team} value={team}>
            <TeamSection teamType={team} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}