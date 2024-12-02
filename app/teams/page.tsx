import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TeamSection } from "@/components/teams/team-section";

const teamTypes = ["webops", "management", "content", "pr", "design"] as const;

export default function TeamsPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Teams</h2>
      </div>

      <Tabs defaultValue="webops" className="space-y-4">
        <TabsList>
          {teamTypes.map((team) => (
            <TabsTrigger key={team} value={team}>
              {capitalize(team)}
            </TabsTrigger>
          ))}
        </TabsList>

        {teamTypes.map((team) => (
          <TabsContent key={team} value={team}>
            <TeamSection teamType={team} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

function capitalize(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
