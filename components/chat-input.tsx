"use client";

import { ArrowUpIcon } from "./icon";
import { UseChatHelpers } from "@ai-sdk/react";

export function ChatInput({
  input,
  setInput,
  handleSubmit,
  status,
}: {
  input: UseChatHelpers["input"];
  setInput: UseChatHelpers["setInput"];
  handleSubmit: UseChatHelpers["handleSubmit"];
  status: UseChatHelpers["status"];
}) {
  return (
    <form
      className="flex mx-auto px-4 bg-background pb-4 md:pb-6 gap-2 w-full md:max-w-3xl"
      onSubmit={(e) => {
        e.preventDefault();
        if (status === "ready") {
          handleSubmit();
        }
      }}
    >
      <div className="relative w-full flex flex-col gap-4">
        <textarea
          placeholder="質問してみましょう"
          className="flex w-full border border-input bg-background px-3 py-2 md:text-sm resize-none rounded-2xl bg-muted pb-10 border-zinc-300 dark:border-zinc-700"
          rows={2}
          autoFocus
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />

        <div className="absolute bottom-0 right-0 p-2 w-fit flex flex-row justify-end">
          <button className="rounded-full p-1.5 h-fit border dark:border-zinc-600">
            <ArrowUpIcon />
          </button>
        </div>
      </div>
    </form>
  );
}
