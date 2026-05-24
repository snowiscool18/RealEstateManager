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
        <p className="text-muted-foreground mt-1">
          Overview of your rental portfolio
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Properties</CardTitle>
            <Home className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold">{stats.totalProperties}</div>
            <p className="text-xs text-muted-foreground">Active properties</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Leases</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold">{stats.activeLeases}</div>
            <p className="text-xs text-muted-foreground">Currently rented</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Tenants</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold">{stats.totalTenants}</div>
            <p className="text-xs text-muted-foreground">Across all properties</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Open Issues</CardTitle>
            <Wrench className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold">{stats.openMaintenance}</div>
            <p className="text-xs text-muted-foreground">Maintenance requests</p>
          </CardContent>
        </Card>

        <Card className="bg-blue-50 border-blue-200">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-blue-900">
              Monthly Income
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold text-blue-900">
              ${stats.monthlyIncome.toLocaleString()}
            </div>
            <p className="text-xs text-blue-700">Expected this month</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions + Recent Activity */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            <Button>Add Property</Button>
            <Button variant="outline">Add Tenant</Button>
            <Button variant="outline">Record Payment</Button>
            <Button variant="outline">New Maintenance Request</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div className="flex items-center justify-between">
              <div>
                Rent received from <span className="font-medium">Sarah Johnson</span>
              </div>
              <Badge variant="outline">Today</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div>
                New maintenance request for <span className="font-medium">124 Oak St</span>
              </div>
              <Badge variant="secondary">2 days ago</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div>
                Lease renewed for <span className="font-medium">Michael Chen</span>
              </div>
              <Badge variant="outline">Last week</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center text-xs text-zinc-400 pt-8">
        This is a foundation shell. Real data and full functionality coming in Phase 1.
      </div>
    </div>
  );
}
