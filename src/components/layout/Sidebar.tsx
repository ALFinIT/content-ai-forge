
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  FileText, 
  BarChart2, 
  Calendar, 
  Settings, 
  Home,
  Sparkles,
  Bell,
  LogOut
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const { user, logout } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const links = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "Content", href: "/content", icon: FileText },
    { name: "Schedule", href: "/schedule", icon: Calendar },
    { name: "Analytics", href: "/analytics", icon: BarChart2 },
    { name: "AI Assistant", href: "/ai-assistant", icon: Sparkles },
    { name: "Notifications", href: "/notifications", icon: Bell },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate("/");
  };

  return (
    <div className="hidden md:flex flex-col w-64 border-r bg-gradient-to-b from-[#1A1F2C] to-[#121420]">
      <div className="p-6">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-[#9b87f5] to-[#6E59A5] bg-clip-text text-transparent">ROHUM AI Forge</h1>
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
                      ? "bg-[#7E69AB]/30 text-white" 
                      : "hover:bg-[#7E69AB]/20 text-gray-200"
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
      <div className="p-6 border-t border-[#7E69AB]/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-9 w-9 rounded-full bg-[#9b87f5] flex items-center justify-center text-[#1A1F2C]">
            {user?.name?.charAt(0) || "U"}
          </div>
          <div>
            <p className="text-sm font-medium text-white">{user?.name || "User"}</p>
            <p className="text-xs text-gray-400">{user?.email || "user@example.com"}</p>
          </div>
        </div>
        <button 
          onClick={handleLogout}
          className="flex items-center gap-2 text-sm text-gray-300 hover:text-white w-full rounded-md py-2 px-3 hover:bg-[#7E69AB]/20"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
