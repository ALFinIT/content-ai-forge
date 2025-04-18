
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, LineChart, PieChart } from "@/components/ui/charts";
import { BarChart2, LineChart as LineIcon, PieChart as PieIcon, ArrowDown, ArrowUp, Filter, Download } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Analytics = () => {
  // Sample data for charts
  const engagementData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Views",
        data: [2100, 1800, 2200, 2800, 1900, 1500, 2000],
        backgroundColor: "rgba(59, 130, 246, 0.5)",
        borderColor: "rgb(59, 130, 246)",
      },
      {
        label: "Interactions",
        data: [450, 380, 500, 590, 420, 380, 430],
        backgroundColor: "rgba(139, 92, 246, 0.5)",
        borderColor: "rgb(139, 92, 246)",
      },
    ],
  };

  const growthData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Followers",
        data: [500, 620, 750, 890, 960, 1100, 1300, 1450, 1600, 1750, 1900, 2100],
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const platformData = {
    labels: ["LinkedIn", "Twitter", "Instagram", "Facebook", "YouTube"],
    datasets: [
      {
        label: "Engagement by Platform",
        data: [35, 25, 22, 15, 3],
        backgroundColor: [
          "rgba(59, 130, 246, 0.7)",  // LinkedIn - Blue
          "rgba(14, 165, 233, 0.7)",  // Twitter - Sky Blue
          "rgba(217, 70, 239, 0.7)",  // Instagram - Pink
          "rgba(79, 70, 229, 0.7)",   // Facebook - Indigo
          "rgba(239, 68, 68, 0.7)",   // YouTube - Red
        ],
        borderWidth: 1,
      },
    ],
  };

  const contentPerformance = [
    {
      title: "7 Ways to Improve Your Social Media Strategy",
      engagement: 2340,
      change: +15,
      platforms: ["LinkedIn", "Twitter"],
    },
    {
      title: "Announcing Our New Product Line",
      engagement: 1890,
      change: +8,
      platforms: ["Instagram", "Facebook"],
    },
    {
      title: "The Future of Remote Work",
      engagement: 1650,
      change: -3,
      platforms: ["LinkedIn"],
    },
    {
      title: "Industry Trends to Watch in 2025",
      engagement: 1340,
      change: +5,
      platforms: ["LinkedIn", "Twitter"],
    },
    {
      title: "Customer Success Story: XYZ Corp",
      engagement: 1120,
      change: +12,
      platforms: ["Twitter", "Facebook"],
    },
  ];

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
            <p className="text-muted-foreground">
              Track and analyze your content performance
            </p>
          </div>
          <div className="flex gap-2">
            <Select defaultValue="7days">
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">Last 7 days</SelectItem>
                <SelectItem value="30days">Last 30 days</SelectItem>
                <SelectItem value="3months">Last 3 months</SelectItem>
                <SelectItem value="6months">Last 6 months</SelectItem>
                <SelectItem value="12months">Last 12 months</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Engagement</p>
                  <h3 className="text-2xl font-bold mt-1">23,145</h3>
                </div>
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700">
                  <BarChart2 className="h-6 w-6" />
                </div>
              </div>
              <div className="text-sm text-green-600 mt-2 flex items-center gap-1">
                <ArrowUp className="h-4 w-4" />
                12% from last period
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Follower Growth</p>
                  <h3 className="text-2xl font-bold mt-1">+584</h3>
                </div>
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-700">
                  <LineIcon className="h-6 w-6" />
                </div>
              </div>
              <div className="text-sm text-green-600 mt-2 flex items-center gap-1">
                <ArrowUp className="h-4 w-4" />
                8% from last period
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg. Engagement Rate</p>
                  <h3 className="text-2xl font-bold mt-1">4.3%</h3>
                </div>
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-700">
                  <PieIcon className="h-6 w-6" />
                </div>
              </div>
              <div className="text-sm text-red-600 mt-2 flex items-center gap-1">
                <ArrowDown className="h-4 w-4" />
                2% from last period
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Engagement Overview</CardTitle>
              <CardDescription>
                Views and interactions across platforms
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <BarChart data={engagementData} />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Follower Growth</CardTitle>
              <CardDescription>
                Total followers across all platforms
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <LineChart data={growthData} />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Platform Breakdown</CardTitle>
              <CardDescription>
                Engagement distribution by platform
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <PieChart data={platformData} />
              </div>
              <div className="grid grid-cols-2 gap-2 mt-6">
                {platformData.labels.map((platform, index) => (
                  <div key={platform} className="flex items-center gap-2">
                    <div 
                      className="h-3 w-3 rounded-full" 
                      style={{ backgroundColor: platformData.datasets[0].backgroundColor[index] }}
                    />
                    <span className="text-sm">{platform}: {platformData.datasets[0].data[index]}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Content Performance</CardTitle>
                  <CardDescription>
                    Engagement metrics by content
                  </CardDescription>
                </div>
                <Select defaultValue="engagement">
                  <SelectTrigger className="w-[160px]">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="engagement">Highest Engagement</SelectItem>
                    <SelectItem value="recent">Most Recent</SelectItem>
                    <SelectItem value="growth">Highest Growth</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {contentPerformance.map((content, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-3 rounded-md border"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 font-medium text-lg text-muted-foreground w-6 text-center">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-medium">{content.title}</p>
                        <div className="flex items-center gap-3 mt-1">
                          <div className="flex gap-1">
                            {content.platforms.map((platform) => (
                              <span 
                                key={platform} 
                                className="text-xs bg-muted px-2 py-0.5 rounded-full"
                              >
                                {platform}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{content.engagement.toLocaleString()}</div>
                      <div className={`text-xs flex items-center justify-end mt-1 ${
                        content.change > 0 
                          ? "text-green-600" 
                          : "text-red-600"
                      }`}>
                        {content.change > 0 
                          ? <ArrowUp className="h-3 w-3 mr-1" /> 
                          : <ArrowDown className="h-3 w-3 mr-1" />
                        }
                        {Math.abs(content.change)}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Platform-Specific Analytics</CardTitle>
            <CardDescription>
              Detailed metrics for each platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="linkedin">
              <TabsList className="mb-4">
                <TabsTrigger value="linkedin">LinkedIn</TabsTrigger>
                <TabsTrigger value="twitter">Twitter</TabsTrigger>
                <TabsTrigger value="instagram">Instagram</TabsTrigger>
                <TabsTrigger value="facebook">Facebook</TabsTrigger>
              </TabsList>
              
              <TabsContent value="linkedin" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-4">
                  <Card>
                    <CardContent className="pt-6">
                      <p className="text-sm font-medium text-muted-foreground">Followers</p>
                      <h3 className="text-2xl font-bold mt-1">8,492</h3>
                      <div className="text-xs text-green-600 mt-1 flex items-center gap-1">
                        <ArrowUp className="h-3 w-3" />
                        5% growth
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <p className="text-sm font-medium text-muted-foreground">Post Impressions</p>
                      <h3 className="text-2xl font-bold mt-1">32,145</h3>
                      <div className="text-xs text-green-600 mt-1 flex items-center gap-1">
                        <ArrowUp className="h-3 w-3" />
                        12% growth
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <p className="text-sm font-medium text-muted-foreground">Engagement Rate</p>
                      <h3 className="text-2xl font-bold mt-1">5.2%</h3>
                      <div className="text-xs text-green-600 mt-1 flex items-center gap-1">
                        <ArrowUp className="h-3 w-3" />
                        0.8% growth
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <p className="text-sm font-medium text-muted-foreground">Click-through Rate</p>
                      <h3 className="text-2xl font-bold mt-1">3.8%</h3>
                      <div className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <ArrowDown className="h-3 w-3" />
                        0.5% decrease
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-medium mb-4">Audience Demographics</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div>
                        <h5 className="text-sm font-medium text-muted-foreground mb-3">Industries</h5>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center text-sm">
                            <span>Technology</span>
                            <span className="font-medium">34%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: "34%" }} />
                          </div>
                        </div>
                        <div className="space-y-2 mt-3">
                          <div className="flex justify-between items-center text-sm">
                            <span>Marketing</span>
                            <span className="font-medium">28%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: "28%" }} />
                          </div>
                        </div>
                        <div className="space-y-2 mt-3">
                          <div className="flex justify-between items-center text-sm">
                            <span>Finance</span>
                            <span className="font-medium">20%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: "20%" }} />
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-medium text-muted-foreground mb-3">Job Roles</h5>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center text-sm">
                            <span>Manager</span>
                            <span className="font-medium">42%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-purple-600 h-2 rounded-full" style={{ width: "42%" }} />
                          </div>
                        </div>
                        <div className="space-y-2 mt-3">
                          <div className="flex justify-between items-center text-sm">
                            <span>Director</span>
                            <span className="font-medium">25%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-purple-600 h-2 rounded-full" style={{ width: "25%" }} />
                          </div>
                        </div>
                        <div className="space-y-2 mt-3">
                          <div className="flex justify-between items-center text-sm">
                            <span>Executive</span>
                            <span className="font-medium">18%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-purple-600 h-2 rounded-full" style={{ width: "18%" }} />
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-medium text-muted-foreground mb-3">Age Range</h5>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center text-sm">
                            <span>25-34</span>
                            <span className="font-medium">38%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-green-600 h-2 rounded-full" style={{ width: "38%" }} />
                          </div>
                        </div>
                        <div className="space-y-2 mt-3">
                          <div className="flex justify-between items-center text-sm">
                            <span>35-44</span>
                            <span className="font-medium">32%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-green-600 h-2 rounded-full" style={{ width: "32%" }} />
                          </div>
                        </div>
                        <div className="space-y-2 mt-3">
                          <div className="flex justify-between items-center text-sm">
                            <span>45-54</span>
                            <span className="font-medium">18%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-green-600 h-2 rounded-full" style={{ width: "18%" }} />
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-medium text-muted-foreground mb-3">Location</h5>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center text-sm">
                            <span>United States</span>
                            <span className="font-medium">45%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-orange-600 h-2 rounded-full" style={{ width: "45%" }} />
                          </div>
                        </div>
                        <div className="space-y-2 mt-3">
                          <div className="flex justify-between items-center text-sm">
                            <span>Europe</span>
                            <span className="font-medium">30%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-orange-600 h-2 rounded-full" style={{ width: "30%" }} />
                          </div>
                        </div>
                        <div className="space-y-2 mt-3">
                          <div className="flex justify-between items-center text-sm">
                            <span>Asia</span>
                            <span className="font-medium">15%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-orange-600 h-2 rounded-full" style={{ width: "15%" }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="twitter" className="p-4 border rounded-md flex items-center justify-center h-40">
                <div className="text-center">
                  <h3 className="font-medium">Twitter Analytics</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Connect your Twitter account to view detailed analytics.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="instagram" className="p-4 border rounded-md flex items-center justify-center h-40">
                <div className="text-center">
                  <h3 className="font-medium">Instagram Analytics</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Connect your Instagram account to view detailed analytics.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="facebook" className="p-4 border rounded-md flex items-center justify-center h-40">
                <div className="text-center">
                  <h3 className="font-medium">Facebook Analytics</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Connect your Facebook account to view detailed analytics.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Analytics;
