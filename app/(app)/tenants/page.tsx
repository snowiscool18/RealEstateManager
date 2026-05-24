import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

export default function TenantsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Tenants</h1>
        <p className="text-slate-600">Manage tenant information and contacts</p>
      </div>

      <Card className="border-dashed">
        <CardContent className="flex flex-col items-center justify-center py-16 text-center">
          <div className="rounded-full bg-slate-100 p-4 mb-4">
            <Users className="h-8 w-8 text-slate-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">No tenants yet</h3>
          <p className="text-slate-600 max-w-sm">
            Tenant profiles and lease history will appear here once you add properties and leases.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
