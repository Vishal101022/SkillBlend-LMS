"use client";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogOut, Search } from "lucide-react";
import Link from "next/link";
import { SearchInput } from "./search-input";

const NavbarRoutes = () => {
  const pathname = usePathname();

  // dynamic constant
  const isTeacherPage = pathname?.startsWith("/teacher");
  // for individual course page
  const isPlayerPage = pathname?.includes("/chapter");
  const isSearchPage = pathname?.startsWith("/search");

  return (
   <>
   {isSearchPage && (
    <div className="hidden md:block">
      <SearchInput />
    </div>
   )}
    <div className="flex gap-x-2 ml-auto">
      {isTeacherPage || isPlayerPage ? (
        <Link href="/">
          <Button size="sm" variant="outline">
            <LogOut className="h-4 w-4 mr-2" />
            Exit
          </Button>
        </Link>
      ) : (
        <Link href="/teacher/courses">
          <Button size="sm" variant="outline">
            Teacher mode
          </Button>
        </Link>
      )}
      <UserButton afterSignOutUrl="/" />
    </div>
   </>
  );
};

export default NavbarRoutes;
