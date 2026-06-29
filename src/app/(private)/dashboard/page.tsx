import SignOut from "@/components/SignOut";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {  SettingsIcon, UserIcon } from "lucide-react";
import Badges from "../components/Badges";


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

        {/* User Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="hidden sm:flex flex-col text-sm leading-tight text-right">
                <span className="font-semibold">{session.user.name}</span>
              </div>
              <Avatar>
                <AvatarImage src={session.user.image ?? ""} alt={session.user.name ?? "User"} />
                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-56">
            {/* User info header */}
            <div className="px-2 py-2">
              <p className="text-sm font-medium">{session.user.name}</p>
              <p className="text-xs text-muted-foreground truncate">{session.user.email}</p>
            </div>
            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <UserIcon className="mr-2 h-4 w-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <SettingsIcon className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem variant="destructive" asChild>
              <SignOut />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>

      {/* Page Content */}
      <main className="p-6">
       <Badges/>
      </main>
    </div>
  );
}