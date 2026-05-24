import { Card, CardContent } from "@/components/ui/card";
import { Wrench } from "lucide-react";

export default function MaintenancePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Maintenance</h1>
        <p className="text-slate-600">Track and manage maintenance requests</p>
      </div>

      <Card className="border-dashed">
        <CardContent className="flex flex-col items-center justify-center py-16 text-center">
          <div className="rounded-full bg-slate-100 p-4 mb-4">
            <Wrench className="h-8 w-8 text-slate-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">No maintenance requests</h3>
          <p className="text-slate-600 max-w-sm">
            Work orders and maintenance tracking will be added in Phase 4.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
