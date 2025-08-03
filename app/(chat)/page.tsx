import { Chat } from "@/components/chat";
import { auth } from "@/app/(auth)/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();

  if (!session) {
    redirect("/signup");
  }
  return <Chat />;
}
