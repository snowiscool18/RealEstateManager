import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[rgb(var(--background))] p-4">
      <Card className="w-full max-w-sm rounded-2xl">
        <CardHeader className="text-center pb-2">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgb(var(--primary))]">
            <span className="text-3xl text-white">🏠</span>
          </div>
          <CardTitle className="text-3xl tracking-tight">Welcome back</CardTitle>
          <CardDescription className="text-base mt-1.5">
            Sign in to manage your rental properties
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5 pt-2">
          <div className="text-center text-sm text-slate-600">
            Authentication is being set up.<br />
            Magic link login will be available soon.
          </div>

          <Button className="w-full h-11 rounded-xl text-base" disabled>
            Sign in with Email (Coming soon)
          </Button>

          <div className="text-center text-[10px] text-slate-400 pt-1">
            Auth.js v5 foundation is complete
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
