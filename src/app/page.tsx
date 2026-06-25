import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div className="flex flex-col justify-center items-center h-screen">
    <Button asChild className=" ">
    <Link href={"/login"}>Get Started</Link>
   </Button>
   </div>
  );
}
