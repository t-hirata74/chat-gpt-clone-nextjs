import { Chat } from "@/components/chat";
import { auth } from "@/app/(auth)/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();

  if (!session) {
    redirect("/signin");
  }
  return <Chat session={session} />;
}
