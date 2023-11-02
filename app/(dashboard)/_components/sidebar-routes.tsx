"use client";
import { usePathname } from "next/navigation";
import { Layout, Compass, BarChart, List, Trophy  } from "lucide-react";
import { SidebarItem } from "./sidebar-item";

// when you click on the exit button, you will be redirected to the home page
const guestRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Compass,
    label: "Browse",
    href: "/search",
  },
  {
    icon: Trophy,
    label: "Leaderboard",
    href: "/leaderboard",
  },
];
// when you click on the teacher mode button, you will be redirected to the teacher mode page
const teacherRoutes = [
  {
    icon: List,
    label: "Courses",
    href: "/teacher/courses",
  },
  {
    icon: BarChart,
    label: "Analytics",
    href: "/teacher/analytics",
  },
];

export const SidebarRoutes = () => {
  const pathname = usePathname();
  const isTeacherPage = pathname?.includes("/teacher");
  const routes = isTeacherPage ? teacherRoutes : guestRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.label}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};
