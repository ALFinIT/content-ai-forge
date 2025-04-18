import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BadgePlus, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { format, addMonths, subMonths, isSameDay, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, addDays } from "date-fns";

const Schedule = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };
  
  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };
  
  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  });
  
  const scheduledContent = [
    {
      id: 1,
      title: "Industry Trends Report",
      platforms: ["LinkedIn", "Twitter"],
      date: addDays(new Date(), 2),
      time: "10:00 AM",
    },
    {
      id: 2,
      title: "Product Feature Highlight",
      platforms: ["Instagram", "Facebook"],
      date: addDays(new Date(), 4),
      time: "2:30 PM",
    },
    {
      id: 3,
      title: "Customer Success Story",
      platforms: ["LinkedIn"],
      date: addDays(new Date(), 7),
      time: "9:15 AM",
    },
    {
      id: 4,
      title: "Team Spotlight",
      platforms: ["Instagram", "Facebook"],
      date: addDays(new Date(), 10),
      time: "3:45 PM",
    },
    {
      id: 5,
      title: "Weekly Tips & Tricks",
      platforms: ["Twitter", "LinkedIn"],
      date: addDays(new Date(), 12),
      time: "11:30 AM",
    },
  ];
  
  const getDayContent = (day: Date) => {
    return scheduledContent.filter(content => 
      isSameDay(content.date, day)
    );
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case "LinkedIn":
        return "bg-blue-100 text-blue-700";
      case "Twitter":
        return "bg-sky-100 text-sky-700";
      case "Instagram":
        return "bg-pink-100 text-pink-700";
      case "Facebook":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Content Schedule</h1>
            <p className="text-muted-foreground">
              Plan and manage your content calendar
            </p>
          </div>
          <Button asChild>
            <Link to="/content/new" className="gap-2">
              <BadgePlus className="h-4 w-4" />
              Create New Content
            </Link>
          </Button>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-6">
              <Button variant="outline" size="icon" onClick={prevMonth}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <h2 className="text-xl font-semibold">
                {format(currentMonth, "MMMM yyyy")}
              </h2>
              <Button variant="outline" size="icon" onClick={nextMonth}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-7 gap-1 mb-2 text-sm font-medium text-center">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="py-2">
                  {day}
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-7 gap-1 relative">
              {Array.from({
                length: startOfMonth(currentMonth).getDay()
              }).map((_, index) => (
                <div key={`empty-${index}`} className="h-24 sm:h-28 md:h-32 bg-muted/30 rounded-md" />
              ))}
              
              {daysInMonth.map((day) => {
                const dayContent = getDayContent(day);
                const isCurrentMonth = isSameMonth(day, currentMonth);
                const isToday = isSameDay(day, new Date());
                
                return (
                  <div 
                    key={day.toString()}
                    className={`border rounded-md h-24 sm:h-28 md:h-32 p-1 overflow-hidden flex flex-col ${
                      isToday 
                        ? "border-primary" 
                        : isCurrentMonth 
                          ? "border-border" 
                          : "border-transparent bg-muted/30"
                    }`}
                  >
                    <div className={`text-right text-sm p-1 ${
                      isToday 
                        ? "font-bold text-primary" 
                        : "font-medium"
                    }`}>
                      {format(day, "d")}
                    </div>
                    
                    <div className="flex-1 overflow-y-auto scrollbar-none">
                      {dayContent.map((content) => (
                        <div 
                          key={content.id}
                          className="mb-1 p-1 bg-secondary/10 rounded text-xs leading-tight cursor-pointer hover:bg-secondary/20"
                        >
                          <div className="font-medium line-clamp-1">{content.title}</div>
                          <div className="text-[10px] text-muted-foreground mt-0.5">
                            {content.time}
                          </div>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {content.platforms.slice(0, 2).map((platform) => (
                              <span 
                                key={platform} 
                                className={`px-1 py-0.5 rounded-sm text-[8px] ${getPlatformColor(platform)}`}
                              >
                                {platform}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Upcoming Content</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {scheduledContent.map((content) => (
              <Card key={content.id}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{content.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {format(content.date, "MMM d, yyyy")} • {content.time}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {content.platforms.map((platform) => (
                          <span 
                            key={platform} 
                            className={`px-2 py-0.5 rounded-full text-xs ${getPlatformColor(platform)}`}
                          >
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Schedule;
