
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { BadgePlus, Calendar, Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContentCard from "@/components/content/ContentCard";

const ContentList = () => {
  const draftContent = [
    {
      id: 1,
      title: "7 Ways to Improve Your Social Media Strategy",
      description: "Learn the top strategies that can boost your social media presence in 2024.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
      platform: "LinkedIn",
      status: "draft" as const,
      date: "Apr 19, 2025",
    },
    {
      id: 2,
      title: "Announcing Our New Product Line",
      description: "We're excited to introduce our latest innovation. Here's what you need to know.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2070&auto=format&fit=crop",
      platform: "Instagram, Twitter",
      status: "draft" as const,
      date: "Apr 20, 2025",
    },
  ];

  const scheduledContent = [
    {
      id: 3,
      title: "The Future of Remote Work",
      description: "How companies are adapting to the new normal and embracing remote work policies.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
      platform: "LinkedIn, Facebook",
      status: "scheduled" as const,
      date: "Apr 22, 2025",
    },
    {
      id: 4,
      title: "Customer Success Story: XYZ Corp",
      description: "How our platform helped XYZ Corp increase their engagement by 200%.",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=2071&auto=format&fit=crop",
      platform: "Twitter",
      status: "scheduled" as const,
      date: "Apr 25, 2025",
    },
  ];

  const publishedContent = [
    {
      id: 5,
      title: "5 Tips for Creating Engaging Content",
      description: "Learn how to create content that resonates with your audience and drives engagement.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=2070&auto=format&fit=crop",
      platform: "All platforms",
      status: "published" as const,
      date: "Apr 15, 2025",
    },
    {
      id: 6,
      title: "Industry Trends to Watch in 2025",
      description: "Stay ahead of the curve with these emerging trends in the industry.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop",
      platform: "LinkedIn, Twitter",
      status: "published" as const,
      date: "Apr 10, 2025",
    },
  ];

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Content Library</h1>
            <p className="text-muted-foreground">
              Manage all your content in one place
            </p>
          </div>
          <Button asChild>
            <Link to="/content/new" className="gap-2">
              <BadgePlus className="h-4 w-4" />
              Create New Content
            </Link>
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-[1fr_200px] lg:grid-cols-[1fr_200px_200px]">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search content..." 
              className="pl-9"
            />
          </div>
          <Select>
            <SelectTrigger>
              <Filter className="h-4 w-4" />
              <SelectValue placeholder="Filter by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Content</SelectItem>
              <SelectItem value="linkedin">LinkedIn</SelectItem>
              <SelectItem value="twitter">Twitter</SelectItem>
              <SelectItem value="instagram">Instagram</SelectItem>
              <SelectItem value="facebook">Facebook</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <Calendar className="h-4 w-4" />
              <SelectValue placeholder="Sort by date" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest first</SelectItem>
              <SelectItem value="oldest">Oldest first</SelectItem>
              <SelectItem value="this-week">This week</SelectItem>
              <SelectItem value="this-month">This month</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full max-w-md mb-4">
            <TabsTrigger value="all" className="flex-1">All</TabsTrigger>
            <TabsTrigger value="draft" className="flex-1">Drafts</TabsTrigger>
            <TabsTrigger value="scheduled" className="flex-1">Scheduled</TabsTrigger>
            <TabsTrigger value="published" className="flex-1">Published</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[...draftContent, ...scheduledContent, ...publishedContent].map((content) => (
                <ContentCard key={content.id} content={content} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="draft" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {draftContent.map((content) => (
                <ContentCard key={content.id} content={content} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="scheduled" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {scheduledContent.map((content) => (
                <ContentCard key={content.id} content={content} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="published" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {publishedContent.map((content) => (
                <ContentCard key={content.id} content={content} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default ContentList;
