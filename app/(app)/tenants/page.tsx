import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TenantsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Tenants</h1>
        <p className="text-zinc-600">Manage tenant information and contacts</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Tenants</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-zinc-700">
            Tenant management UI coming in Phase 1.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
