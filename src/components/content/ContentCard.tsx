
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil, Share2, Clock, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

interface ContentProps {
  id: number;
  title: string;
  description: string;
  image: string;
  platform: string;
  status: "draft" | "scheduled" | "published";
  date: string;
}

interface ContentCardProps {
  content: ContentProps;
}

const ContentCard = ({ content }: ContentCardProps) => {
  const statusConfig = {
    draft: {
      icon: Pencil,
      label: "Draft",
      color: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
    },
    scheduled: {
      icon: Clock,
      label: "Scheduled",
      color: "bg-blue-100 text-blue-800 hover:bg-blue-200",
    },
    published: {
      icon: CheckCircle2,
      label: "Published",
      color: "bg-green-100 text-green-800 hover:bg-green-200",
    },
  };

  const StatusIcon = statusConfig[content.status].icon;

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div 
        className="h-48 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${content.image})` }}
      >
        <Badge
          className={`absolute top-3 right-3 flex items-center gap-1 font-medium ${statusConfig[content.status].color}`}
        >
          <StatusIcon className="h-3 w-3" />
          {statusConfig[content.status].label}
        </Badge>
      </div>
      
      <CardContent className="pt-4">
        <Link to={`/content/${content.id}`}>
          <h3 className="font-semibold text-lg hover:text-primary cursor-pointer">
            {content.title}
          </h3>
        </Link>
        <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
          {content.description}
        </p>
        <div className="flex items-center gap-2 mt-3">
          <div className="text-xs bg-muted px-2 py-1 rounded-full">
            {content.platform}
          </div>
          <div className="text-xs text-muted-foreground">
            {content.date}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-end gap-2 pt-0">
        <Button 
          variant="outline" 
          size="sm"
          asComponent={<Link to={`/content/${content.id}`} />}
        >
          {content.status === "draft" ? "Edit" : "View"}
        </Button>
        {content.status === "scheduled" && (
          <Button variant="secondary" size="sm" className="gap-1">
            <Share2 className="h-3.5 w-3.5" />
            Publish Now
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ContentCard;
