
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Bell, 
  Search, 
  Menu,
  ChevronDown,
  User,
  Settings,
  LogOut
} from "lucide-react";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";
import Sidebar from "./Sidebar";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const TopBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [notificationCount, setNotificationCount] = useState(3);

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate("/");
  };

  const handleNotificationClick = () => {
    navigate("/notifications");
    setNotificationCount(0);
  };

  return (
    <header className="h-16 border-b border-[#7E69AB]/20 px-4 flex items-center justify-between bg-gradient-to-r from-[#1A1F2C] to-[#121420] text-white">
      <div className="flex items-center gap-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-[#7E69AB]/20">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 bg-gradient-to-b from-[#1A1F2C] to-[#121420] border-r border-[#7E69AB]/20">
            <Sidebar />
          </SheetContent>
        </Sheet>
        
        <div className="relative hidden md:flex items-center">
          <Search className="absolute left-3 h-4 w-4 text-gray-400" />
          <Input 
            placeholder="Search..." 
            className="pl-9 w-64 bg-[#7E69AB]/10 border-[#7E69AB]/20 text-white placeholder:text-gray-400 focus:border-[#9b87f5]"
          />
        </div>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden text-white hover:bg-[#7E69AB]/20"
          onClick={() => setIsSearchOpen(!isSearchOpen)}
        >
          <Search className="h-5 w-5" />
        </Button>
      </div>
      
      {isSearchOpen && (
        <div className="absolute top-16 left-0 right-0 p-4 bg-[#1A1F2C] border-b border-[#7E69AB]/20 z-50 md:hidden">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Search..." 
              className="pl-9 w-full bg-[#7E69AB]/10 border-[#7E69AB]/20 text-white"
              autoFocus
              onBlur={() => setIsSearchOpen(false)}
            />
          </div>
        </div>
      )}
      
      <div className="flex items-center gap-2">
        <Button 
          variant="ghost" 
          size="icon" 
          className="relative text-white hover:bg-[#7E69AB]/20"
          onClick={handleNotificationClick}
        >
          <Bell className="h-5 w-5" />
          {notificationCount > 0 && (
            <Badge 
              className="absolute top-1.5 right-1.5 h-4 w-4 p-0 flex items-center justify-center bg-[#9b87f5] text-[10px]"
              variant="default"
            >
              {notificationCount}
            </Badge>
          )}
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="gap-1 text-white hover:bg-[#7E69AB]/20">
              <div className="h-7 w-7 rounded-full bg-[#9b87f5] flex items-center justify-center text-[#1A1F2C]">
                {user?.name?.charAt(0) || "U"}
              </div>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-[#1A1F2C] border-[#7E69AB]/20 text-white">
            <DropdownMenuItem onClick={() => navigate("/settings")} className="cursor-pointer hover:bg-[#7E69AB]/20">
              <User className="mr-2 h-4 w-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate("/settings")} className="cursor-pointer hover:bg-[#7E69AB]/20">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-[#7E69AB]/20" />
            <DropdownMenuItem onClick={handleLogout} className="cursor-pointer hover:bg-[#7E69AB]/20">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default TopBar;
