import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Reports</h1>
        <p className="text-muted-foreground">Income, occupancy, and performance reports</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Reports &amp; Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-muted-foreground">
            Dashboard reports and exports will be added in Phase 4.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
