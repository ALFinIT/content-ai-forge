
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Sparkles, 
  Zap, 
  MessageSquareText, 
  Check,
  Calendar,
  Clock,
  HashtagIcon
} from "lucide-react";
import { useState } from "react";

interface AISuggestionsProps {
  content: string;
  onApplySuggestion: (suggestion: string) => void;
}

const AISuggestions = ({ content, onApplySuggestion }: AISuggestionsProps) => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [optimalTimes, setOptimalTimes] = useState<string[]>([]);
  const [hashtags, setHashtags] = useState<string[]>([]);

  const analyzeTone = () => {
    setIsAnalyzing(true);
    
    // In a real application, this would make an API call to an AI service
    setTimeout(() => {
      // Simulated AI response
      const aiSuggestions = [
        "Consider adding data points to strengthen your argument about industry growth.",
        "Try a more conversational tone for better engagement on LinkedIn.",
        "The introduction could be more impactful with a question that challenges the reader."
      ];
      
      const times = [
        "Tuesday at 10:00 AM",
        "Thursday at 2:30 PM",
        "Wednesday at 9:15 AM"
      ];
      
      const tags = [
        "#ContentStrategy",
        "#DigitalMarketing",
        "#SocialMediaTips",
        "#BrandGrowth",
        "#IndustryInsights"
      ];
      
      setSuggestions(aiSuggestions);
      setOptimalTimes(times);
      setHashtags(tags);
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-secondary" />
          <h3 className="font-semibold">AI Content Assistant</h3>
        </div>
        <Button 
          variant={isAnalyzing ? "outline" : "secondary"} 
          size="sm"
          className="gap-1"
          onClick={analyzeTone}
          disabled={isAnalyzing || !content}
        >
          {isAnalyzing ? (
            <>
              <div className="h-3.5 w-3.5 rounded-full border-2 border-secondary border-r-transparent animate-spin" />
              Analyzing...
            </>
          ) : (
            <>
              <Zap className="h-3.5 w-3.5" />
              Analyze Content
            </>
          )}
        </Button>
      </div>
      
      {suggestions.length > 0 && (
        <div className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-3">
                <MessageSquareText className="h-4 w-4 text-secondary" />
                <h4 className="font-medium">Content Suggestions</h4>
              </div>
              <div className="space-y-3">
                {suggestions.map((suggestion, index) => (
                  <div key={index} className="flex gap-2">
                    <div className="rounded-full bg-muted h-6 w-6 flex items-center justify-center text-xs flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">{suggestion}</p>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-6 text-xs mt-1 px-2 gap-1"
                        onClick={() => onApplySuggestion(suggestion)}
                      >
                        <Check className="h-3 w-3" />
                        Apply
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-4 w-4 text-secondary" />
                  <h4 className="font-medium">Optimal Post Times</h4>
                </div>
                <div className="space-y-2">
                  {optimalTimes.map((time, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-3">
                  <HashtagIcon className="h-4 w-4 text-secondary" />
                  <h4 className="font-medium">Suggested Hashtags</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {hashtags.map((tag, index) => (
                    <div 
                      key={index} 
                      className="text-xs rounded-full bg-secondary/10 text-secondary px-2 py-1"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
      
      {!suggestions.length && !isAnalyzing && content && (
        <div className="p-6 text-center border rounded-lg border-dashed">
          <Sparkles className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
          <h4 className="font-medium">AI Suggestions</h4>
          <p className="text-sm text-muted-foreground mt-1">
            Click "Analyze Content" to get AI-powered suggestions for your content.
          </p>
        </div>
      )}
      
      {!content && !isAnalyzing && (
        <div className="p-6 text-center border rounded-lg border-dashed">
          <MessageSquareText className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
          <p className="text-sm text-muted-foreground">
            Start writing content to unlock AI-powered suggestions.
          </p>
        </div>
      )}
    </div>
  );
};

export default AISuggestions;
