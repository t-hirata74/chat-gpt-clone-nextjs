"use client";

import AuthFooter from "@/components/auth-footer";
import { SigninForm } from "@/components/signin-form";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex h-dvh w-screen items-start pt-12 md:pt-0 md:items-center justify-center bg-background">
      <div className="w-full max-w-md overflow-hidden rounded-2xl gap-6 flex flex-col">
        <div className="flex flex-col items-center justify-center gap-2 px-4 text-center sm:px-16">
          <h3 className="text-xl font-semibold dark:text-zinc-50">
            サインイン
          </h3>
        </div>
        <SigninForm />
        <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
          まだアカウントをお持ちでないですか？
          <Link
            className="font-semibold text-zinc-800 hover:underlinedark:text-zinc-200"
            href="/signup"
          >
            アカウント登録
          </Link>
        </p>
        <AuthFooter />
      </div>
    </div>
  );
}
