"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Home,
  Users,
  FileText,
  Wrench,
  BarChart3,
} from "lucide-react";

const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Properties",
    href: "/properties",
    icon: Home,
  },
  {
    title: "Tenants",
    href: "/tenants",
    icon: Users,
  },
  {
    title: "Leases",
    href: "/leases",
    icon: FileText,
  },
  {
    title: "Maintenance",
    href: "/maintenance",
    icon: Wrench,
  },
  {
    title: "Reports",
    href: "/reports",
    icon: BarChart3,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 flex-col border-r bg-[rgb(var(--sidebar-bg))] md:flex" 
           style={{ borderColor: 'rgb(var(--sidebar-border))' }}>
      
      {/* Logo / Branding */}
      <div className="flex h-16 items-center border-b px-6" 
           style={{ borderColor: 'rgb(var(--sidebar-border))' }}>
        <Link href="/dashboard" className="flex items-center gap-3 font-semibold text-xl tracking-tight">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[rgb(var(--primary))] text-white">
            <Home className="h-5 w-5" />
          </div>
          <span>RealEstate</span>
          <span className="font-normal text-[rgb(var(--primary))]">Manager</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all",
                isActive
                  ? "bg-[rgb(var(--sidebar-active))] text-[rgb(var(--sidebar-active-text))]"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              )}
            >
              <Icon className={cn(
                "h-4 w-4 transition-colors",
                isActive ? "text-[rgb(var(--primary))]" : "text-slate-500 group-hover:text-slate-700"
              )} />
              {item.title}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t p-4 text-[10px] text-slate-400" 
           style={{ borderColor: 'rgb(var(--sidebar-border))' }}>
        v0.1 • Early Access
      </div>
    </aside>
  );
}
