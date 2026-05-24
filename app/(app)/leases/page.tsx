import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LeasesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Leases</h1>
        <p className="text-zinc-600">Track rental agreements and expirations</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Active Leases</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-zinc-700">
            Lease management and expiration alerts coming in Phase 2.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
