import Link from "next/link";
import { Button } from "./ui/button";

export default function GetAppButton() {
  return (
    <>
      <Link href="/getbethere">
        <Button className="flex items-center gap-2" size={"sm"}>
          <span>Get the App</span>
        </Button>
      </Link>
    </>
  );
}
