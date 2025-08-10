import { Chat } from "@/components/chat";
import { auth } from "@/app/(auth)/auth";
import { redirect } from "next/navigation";
import { randomUUID } from "crypto";

export default async function Page() {
  const session = await auth();

  if (!session) {
    redirect("/signin");
  }

  const id = randomUUID();
  return (
    <>
      <Chat id={id} session={session} />
    </>
  );
}
