import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 p-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
            <span className="text-2xl">🏠</span>
          </div>
          <CardTitle className="text-2xl">Welcome back</CardTitle>
          <CardDescription>
            Sign in to manage your rental properties
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center text-sm text-muted-foreground">
            Authentication is being set up.<br />
            Magic link login will be available soon.
          </div>

          <Button className="w-full" disabled>
            Sign in with Email (Coming soon)
          </Button>

          <div className="text-center text-xs text-muted-foreground pt-2">
            Auth.js v5 foundation is complete
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
