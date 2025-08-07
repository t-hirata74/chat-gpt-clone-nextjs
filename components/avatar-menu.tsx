import { signOut } from "next-auth/react";
import { AvatarIcon } from "./icon";

export function AvatarMenu() {
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm"
          id="menu-button"
        >
          <AvatarIcon />
        </button>
      </div>
      <div className="absolute right-0 z-100 mt-2 w-56 origin-top-right rounded-md shadow-lg dark:bg-zinc-800 ring-black/5">
        <div className="py-1" role="none">
          <button
            className="block px-4 py-2 text-sm"
            onClick={() => {
              signOut({ redirectTo: "/" });
            }}
          >
            ログアウト
          </button>
        </div>
      </div>
    </div>
  );
}
