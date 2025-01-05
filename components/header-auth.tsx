import { signOutAction } from "@/app/actions";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/server";

export default async function AuthButton() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user ? (
    <div className="flex items-center gap-4">
      <form action={signOutAction}>
        <Button type="submit" variant={"outline"} className="md:h-9 md:px-3 h-11 rounded-md px-8">
          Sign out
        </Button>
      </form>
    </div>
  ) : (
    <div className="flex gap-2">
      <Button asChild variant={"outline"} className="md:h-9 md:px-3 h-11 rounded-md px-8">
        <Link href="/sign-in">Sign in</Link>
      </Button>
      <Button asChild className="h-11 rounded-md px-8 md:h-9 md:px-3 ">
        <Link href="/sign-up">Sign up</Link>
      </Button>
    </div>
  );
}
