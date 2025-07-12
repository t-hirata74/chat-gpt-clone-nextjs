"use client";

import React from "react";

export function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="not-prose flex flex-col">
      <div
        className={`text-sm w-full overflow-x-auto dark:bg-zinc-900 p-4 border border-zinc-200 dark:border-zinc-700 rounded-xl dark:text-zinc-50 text-zinc-900 whitespace-pre font-mono`}
      >
        {children}
      </div>
    </div>
  );
}
