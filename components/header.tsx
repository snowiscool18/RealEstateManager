"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { LogOut, Settings, User } from "lucide-react";

interface HeaderProps {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  } | null;
}

export function Header({ user }: HeaderProps) {
  const initials = user?.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : "U";

  return (
    <header className="flex h-16 items-center justify-between border-b bg-white/80 backdrop-blur-md px-6">
      <div className="flex items-center gap-4">
        <div className="text-sm text-slate-600 hidden md:block">
          Good morning, {user?.name?.split(" ")[0] || "there"} 👋
        </div>
      </div>

      <div className="flex items-center gap-3">
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2.5 px-2 h-9 rounded-xl hover:bg-slate-100">
                <Avatar className="h-8 w-8 ring-1 ring-slate-200">
                  <AvatarImage src={user.image || undefined} alt={user.name || ""} />
                  <AvatarFallback className="text-xs bg-slate-100 text-slate-600">
                    {initials}
                  </AvatarFallback>
                </Avatar>
                <div className="hidden text-left md:block">
                  <div className="font-medium text-sm leading-none">{user.name}</div>
                  <div className="text-[10px] text-slate-500 mt-1">{user.email}</div>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 rounded-xl">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => signOut()}
                className="text-red-600 focus:text-red-600"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button variant="outline" size="sm" asChild className="rounded-xl">
            <a href="/login">Sign in</a>
          </Button>
        )}
      </div>
    </header>
  );
}
