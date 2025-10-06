import { cn } from "@/lib/utils";
import { RootState } from "@/store";
import { Role } from "@/types";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

interface SidebarProps {
  isSidebarOpen: boolean;
}

// Define the menu items dynamically
const menuItems = (role: Role) => [
  {
    name: "Dashboard",
    path: `/${role}/dashboard`,
    icon: "🏠",
    roles: ["user", "admin"],
  },
  { name: "Users", path: "/admin/users", icon: "👥", roles: ["admin"] },

  {
    name: "Tasks",
    path: `/${role}/tasks`,
    icon: "📋",
    roles: ["user", "admin"],
  },
  {
    name: "Management",
    path: `/${role}/management`,
    icon: "📋",
    roles: ["user", "admin"],
  },
];

export const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen }) => {
  const { user } = useSelector((state: RootState) => state.auth);
  const roleName = user && user.role === "admin" ? "Admin" : "User";

  return (
    <aside
      className={cn(
        "w-64 flex flex-col h-screen transition-transform duration-300 ease-in-out border-r bg-card/80 supports-[backdrop-filter]:bg-card/60 text-card-foreground backdrop-blur",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )}
    >
      <ScrollArea className="flex-1">
        {/* Sidebar Header */}
        <div className="p-4">
          <h2 className="text-lg font-semibold tracking-tight text-foreground font-serif">
            {roleName} Panel
          </h2>
        </div>
        <Separator />

        {/* Navigation Items */}
        <nav className="p-4 space-y-1.5">
          {menuItems(user?.role || "user")
            .filter((item) => item.roles.includes(user?.role || "user"))
            .map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center px-3 py-2 text-sm font-medium rounded-lg hover:bg-accent/50 transition-colors"
              >
                <span className="text-xl mr-3">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            ))}
        </nav>
      </ScrollArea>
    </aside>
  );
};
