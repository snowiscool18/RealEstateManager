import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";

export default function LeasesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Leases</h1>
        <p className="text-slate-600">Track rental agreements and expirations</p>
      </div>

      <Card className="border-dashed">
        <CardContent className="flex flex-col items-center justify-center py-16 text-center">
          <div className="rounded-full bg-slate-100 p-4 mb-4">
            <FileText className="h-8 w-8 text-slate-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">No leases yet</h3>
          <p className="text-slate-600 max-w-sm">
            Lease tracking with expiration alerts and payment history will be available in Phase 2.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
