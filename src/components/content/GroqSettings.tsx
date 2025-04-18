
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Settings } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const GroqSettings = () => {
  const { toast } = useToast();
  const [apiKey, setApiKey] = useState(localStorage.getItem("groq_api_key") || "");

  const handleSaveApiKey = () => {
    if (apiKey.trim()) {
      localStorage.setItem("groq_api_key", apiKey.trim());
      toast({
        title: "API Key Saved",
        description: "Your Groq API key has been saved securely.",
      });
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Settings className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Groq API Settings</SheetTitle>
        </SheetHeader>
        <div className="space-y-4 mt-4">
          <div>
            <label htmlFor="apiKey" className="text-sm font-medium block mb-2">
              API Key
            </label>
            <Input
              id="apiKey"
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Enter your Groq API key"
              className="mb-2"
            />
            <p className="text-xs text-muted-foreground">
              Your API key is stored securely in your browser's local storage.
            </p>
          </div>
          <Button onClick={handleSaveApiKey} className="w-full">
            Save API Key
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
