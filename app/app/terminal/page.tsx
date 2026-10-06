import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { TerminalShell } from "@/components/terminal/terminal-shell";

export default async function TerminalPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return <TerminalShell />;
}
