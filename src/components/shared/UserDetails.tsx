import { shortenAddress } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { CalendarIcon } from "lucide-react";

export default function UserDetails({
  avatar,
  address,
}: {
  avatar?: string;
  address?: string;
}) {
  return (
    <HoverCard>
      <HoverCardTrigger
        asChild
        onClick={(e) => {
          e.stopPropagation();
        }}>
        <Avatar>
          <AvatarImage src={avatar} />
          <AvatarFallback>VC</AvatarFallback>
        </Avatar>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 z-10">
        <div className="flex justify-between space-x-4 z-10">
          <Avatar className="border">
            <AvatarImage src={avatar} />
            <AvatarFallback>VS</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">
              @{shortenAddress(`${address}`)}
            </h4>
            <p className="text-sm">
              The React Framework – created and maintained by @vercel.
            </p>
            <div className="flex items-center pt-2">
              <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
