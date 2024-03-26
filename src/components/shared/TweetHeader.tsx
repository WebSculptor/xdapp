import { BsTwitterX } from "react-icons/bs";
import { Button } from "../ui/button";
import { ModeToggle } from "./ModeToggle";
import MobileSidebar from "./MobileSidebar";
import Link from "next/link";

export default function TweetHeader() {
  return (
    <div className="flex flex-col sticky top-0 z-10 backdrop-blur-xl bg-background/50">
      <div className="flex sm:hidden items-start justify-between gap-6 px-3 pt-3">
        <MobileSidebar />

        <Link
          target="_blank"
          href="https://twitter.com/web_sculptor?ref_src=twsrc%5Etfw"
          data-show-count="false">
          <BsTwitterX className="w-7 h-7" />
        </Link>

        <div className="h-full flex items-center justify-center">
          <ModeToggle />
        </div>
      </div>
      <div className="border-b h-12 sm:h-14 flex items-center">
        <Button
          variant="ghost"
          className="w-full text-base h-full rounded-none">
          For you
        </Button>
        <Button
          variant="ghost"
          className="w-full text-base h-full rounded-none">
          Following
        </Button>
        <div className="h-full px-4 hidden sm:flex items-center justify-center">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
