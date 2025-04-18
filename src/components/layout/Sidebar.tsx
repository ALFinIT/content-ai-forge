
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  FileText, 
  BarChart2, 
  Calendar, 
  Settings, 
  Home,
  Sparkles
} from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  
  const links = [
    { name: "Dashboard", href: "/", icon: Home },
    { name: "Content", href: "/content", icon: FileText },
    { name: "Schedule", href: "/schedule", icon: Calendar },
    { name: "Analytics", href: "/analytics", icon: BarChart2 },
    { name: "AI Assistant", href: "/ai-assistant", icon: Sparkles },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  return (
    <div className="hidden md:flex flex-col w-64 border-r bg-card">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-primary">Content AI Forge</h1>
      </div>
      <nav className="mt-6 flex-1">
        <ul className="space-y-1 px-3">
          {links.map((link) => {
            const isActive = location.pathname === link.href;
            const Icon = link.icon;
            
            return (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                    isActive 
                      ? "bg-primary text-primary-foreground" 
                      : "hover:bg-muted text-foreground"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="p-6 border-t">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
            U
          </div>
          <div>
            <p className="text-sm font-medium">User</p>
            <p className="text-xs text-muted-foreground">user@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
