import { Card, CardContent } from "@/components/ui/card";
import { Home } from "lucide-react";

export default function PropertiesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Properties</h1>
        <p className="text-slate-600">Manage your rental properties</p>
      </div>

      <Card className="border-dashed">
        <CardContent className="flex flex-col items-center justify-center py-16 text-center">
          <div className="rounded-full bg-slate-100 p-4 mb-4">
            <Home className="h-8 w-8 text-slate-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">No properties yet</h3>
          <p className="text-slate-600 max-w-sm mb-6">
            Add your first rental property to start tracking tenants, leases, and income.
          </p>
          <button className="rounded-xl bg-[rgb(var(--primary))] px-5 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors">
            + Add your first property
          </button>
        </CardContent>
      </Card>
    </div>
  );
}
