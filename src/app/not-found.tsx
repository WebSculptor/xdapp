import { Button } from "@/components/ui/button";
import { TbError404 } from "react-icons/tb";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default async function NotFound() {
  return (
    <div className="h-full flex items-center justify-center relative">
      <Link href="/home">
        <Button variant="secondary" className="absolute top-4 left-4">
          <MoveLeft className="w-4 h-4 mr-2" /> Back
        </Button>
      </Link>
      <div className="p-4 flex flex-col">
        <h1 className="text-3xl md:text-4xl font-semibold flex items-center">
          <TbError404 className="w-12 h-12 mr-2 mt-[2px]" /> Error!
        </h1>
        <p className="text-base">
          This page could not be found or is under construction
        </p>
      </div>
    </div>
  );
}
