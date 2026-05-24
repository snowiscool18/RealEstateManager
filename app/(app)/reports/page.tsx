import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3 } from "lucide-react";

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Reports</h1>
        <p className="text-slate-600">Income, occupancy, and performance reports</p>
      </div>

      <Card className="border-dashed">
        <CardContent className="flex flex-col items-center justify-center py-16 text-center">
          <div className="rounded-full bg-slate-100 p-4 mb-4">
            <BarChart3 className="h-8 w-8 text-slate-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Reports &amp; Analytics coming soon</h3>
          <p className="text-slate-600 max-w-sm">
            Beautiful charts and exportable reports for your portfolio performance will be available in Phase 4.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
