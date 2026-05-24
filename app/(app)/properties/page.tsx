import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PropertiesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Properties</h1>
        <p className="text-zinc-600">Manage your rental properties</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Properties</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-zinc-700">
            Property listing and management UI will be built in Phase 1.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
