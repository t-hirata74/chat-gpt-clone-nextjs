import { ArrowUpIcon } from "./icon";

export function ChatInput() {
  return (
    <form className="flex mx-auto px-4 bg-background pb-4 md:pb-6 gap-2 w-full md:max-w-3xl">
      <div className="relative w-full flex flex-col gap-4">
        <textarea
          placeholder="質問してみましょう"
          className="flex w-full border border-input bg-background px-3 py-2 md:text-sm resize-none rounded-2xl bg-muted pb-10 border-zinc-300 dark:border-zinc-700"
          rows={2}
          autoFocus
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
