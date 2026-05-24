import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Home, Users, FileText, Wrench, TrendingUp } from "lucide-react";

export default function DashboardPage() {
  // These will be replaced with real data from Prisma in Phase 1
  const stats = {
    totalProperties: 4,
    activeLeases: 3,
    totalTenants: 5,
    openMaintenance: 2,
    monthlyIncome: 4250,
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
        <p className="text-zinc-600 mt-1">
          Overview of your rental portfolio
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Properties</CardTitle>
            <div className="rounded-lg bg-indigo-100 p-2">
              <Home className="h-4 w-4 text-indigo-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold tracking-tight">{stats.totalProperties}</div>
            <p className="text-xs text-slate-500 mt-1">Active properties</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Active Leases</CardTitle>
            <div className="rounded-lg bg-emerald-100 p-2">
              <FileText className="h-4 w-4 text-emerald-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold tracking-tight">{stats.activeLeases}</div>
            <p className="text-xs text-slate-500 mt-1">Currently rented</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Tenants</CardTitle>
            <div className="rounded-lg bg-amber-100 p-2">
              <Users className="h-4 w-4 text-amber-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold tracking-tight">{stats.totalTenants}</div>
            <p className="text-xs text-slate-500 mt-1">Across all properties</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Open Issues</CardTitle>
            <div className="rounded-lg bg-rose-100 p-2">
              <Wrench className="h-4 w-4 text-rose-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold tracking-tight">{stats.openMaintenance}</div>
            <p className="text-xs text-slate-500 mt-1">Maintenance requests</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow bg-gradient-to-br from-emerald-50 to-white border-emerald-100">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-emerald-700">Monthly Income</CardTitle>
            <div className="rounded-lg bg-emerald-100 p-2">
              <TrendingUp className="h-4 w-4 text-emerald-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold tracking-tight text-emerald-700">
              ${stats.monthlyIncome.toLocaleString()}
            </div>
            <p className="text-xs text-emerald-600 mt-1">Expected this month</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions + Recent Activity */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="text-lg">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            <Button className="rounded-xl">+ Add Property</Button>
            <Button variant="outline" className="rounded-xl">Add Tenant</Button>
            <Button variant="outline" className="rounded-xl">Record Payment</Button>
            <Button variant="outline" className="rounded-xl">New Maintenance Request</Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="text-lg">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div className="flex items-center justify-between py-1 border-b border-slate-100 last:border-none">
              <div>
                Rent received from <span className="font-medium">Sarah Johnson</span>
              </div>
              <Badge variant="outline" className="text-emerald-600 border-emerald-200">Today</Badge>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-slate-100 last:border-none">
              <div>
                New maintenance request for <span className="font-medium">124 Oak St</span>
              </div>
              <Badge variant="secondary">2 days ago</Badge>
            </div>
            <div className="flex items-center justify-between py-1">
              <div>
                Lease renewed for <span className="font-medium">Michael Chen</span>
              </div>
              <Badge variant="outline">Last week</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center text-xs text-slate-400 pt-4">
        This is a foundation shell. Real data and full functionality coming in Phase 1.
      </div>
    </div>
  );
}
