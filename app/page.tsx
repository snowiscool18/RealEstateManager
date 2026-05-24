import { redirect } from "next/navigation";

export default function RootPage() {
  // During foundation phase, redirect directly to the dashboard shell
  redirect("/dashboard");
}
