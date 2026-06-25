import SignOut from "@/components/SignOut";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  const initials = session.user.name
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="border-b px-6 py-3 flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="text-xl font-bold">Cross Type</div>

        {/* User Info */}
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <Avatar>
            <AvatarImage src={session.user.image ?? ""} alt={session.user.name ?? "User"} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>

          {/* Name & Email */}
          <div className="hidden sm:flex flex-col text-sm leading-tight">
            <span className="font-semibold">{session.user.name}</span>
            <span className="text-xs">{session.user.email}</span>
          </div>

          {/* Sign Out */}
          <SignOut />
        </div>
      </nav>

      {/* Page Content */}
      <main className="p-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="mt-1">Welcome back, {session.user.name}!</p>
      </main>
    </div>
  );
}