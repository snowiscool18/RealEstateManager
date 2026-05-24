import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MaintenancePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Maintenance</h1>
        <p className="text-muted-foreground">Track and manage maintenance requests</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Open Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-muted-foreground">
            Maintenance request workflow will be implemented in Phase 4.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
