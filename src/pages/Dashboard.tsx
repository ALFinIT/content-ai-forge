
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BadgePlus, ArrowRight, TrendingUp, Bell, Clock, Share2, BarChart } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const stats = [
    { 
      title: "Total Content", 
      value: "15", 
      change: "+3", 
      icon: FileIcon, 
      color: "bg-blue-100 text-blue-700" 
    },
    { 
      title: "Scheduled", 
      value: "8", 
      change: "+2", 
      icon: Clock, 
      color: "bg-purple-100 text-purple-700" 
    },
    { 
      title: "Published", 
      value: "7", 
      change: "+1", 
      icon: Share2, 
      color: "bg-green-100 text-green-700" 
    },
    { 
      title: "Engagement", 
      value: "21%", 
      change: "+5%", 
      icon: BarChart, 
      color: "bg-orange-100 text-orange-700" 
    },
  ];

  const upcomingContent = [
    { title: "2024 Industry Trends", platform: "LinkedIn", date: "Today, 3:30 PM" },
    { title: "Product Launch Preview", platform: "Instagram", date: "Tomorrow, 10:00 AM" },
    { title: "Customer Story: ABC Corp", platform: "Twitter", date: "Apr 20, 2:15 PM" },
  ];

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Overview of your content performance and upcoming schedule
            </p>
          </div>
          <Button className="gap-2" asComponent={<Link to="/content/new" />}>
            <BadgePlus className="h-4 w-4" />
            Create New Content
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title} className="dashboard-stat">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                  </div>
                  <div className={`p-2.5 rounded-full ${stat.color}`}>
                    <stat.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="text-xs text-green-600 mt-2 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  {stat.change} from last week
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Content Performance</CardTitle>
              <CardDescription>
                Engagement metrics across platforms
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">LinkedIn</div>
                    <div className="text-sm text-muted-foreground">24% engagement</div>
                  </div>
                  <Progress value={24} />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Twitter</div>
                    <div className="text-sm text-muted-foreground">18% engagement</div>
                  </div>
                  <Progress value={18} />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Instagram</div>
                    <div className="text-sm text-muted-foreground">32% engagement</div>
                  </div>
                  <Progress value={32} />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Facebook</div>
                    <div className="text-sm text-muted-foreground">15% engagement</div>
                  </div>
                  <Progress value={15} />
                </div>
              </div>
              <Button variant="link" className="mt-6 p-0 h-auto flex items-center gap-1">
                View detailed analytics
                <ArrowRight className="h-3 w-3" />
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Content</CardTitle>
              <CardDescription>
                Scheduled posts for the next few days
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingContent.map((content, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-3 rounded-md border"
                  >
                    <div>
                      <p className="font-medium">{content.title}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs bg-muted px-2 py-0.5 rounded-full">{content.platform}</span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {content.date}
                        </span>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
              <Button 
                variant="outline" 
                className="w-full mt-6"
                asComponent={<Link to="/schedule" />}
              >
                View Full Schedule
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>AI Suggestions</CardTitle>
            <CardDescription>
              Automated insights to optimize your content strategy
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="ai-suggestion">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-secondary rounded-full text-secondary-foreground">
                    <Bell className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">Optimal Posting Time</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Based on your audience engagement patterns, consider posting content between 9-10am and 7-8pm on weekdays for maximum reach.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="ai-suggestion">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-secondary rounded-full text-secondary-foreground">
                    <BarChart className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">Content Performance Insight</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Visual content with short, actionable captions is generating 38% more engagement than text-only posts. Consider incorporating more infographics and image-based content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Button 
              variant="outline" 
              className="mt-6"
              asComponent={<Link to="/ai-assistant" />}
            >
              Get More AI Insights
            </Button>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

const FileIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);

export default Dashboard;
