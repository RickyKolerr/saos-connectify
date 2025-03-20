
import React, { useState } from "react";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

interface ApiSidebarProps {
  isMobile: boolean;
}

const ApiSidebar = ({ isMobile }: ApiSidebarProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  
  // Filter logic for highlighting or filtering items
  const isMatch = (text: string) => {
    if (!searchQuery) return false;
    return text.toLowerCase().includes(searchQuery.toLowerCase());
  };

  return (
    <aside className={`md:w-64 ${isMobile ? "mb-8" : "md:sticky md:top-20 md:self-start"}`}>
      <div className="border border-white/10 rounded-lg p-4">
        <div className="mb-4 relative">
          <div className="relative mb-4">
            <Input
              className="pl-9 bg-black border-white/20 text-white"
              placeholder="Search APIs..."
              value={searchQuery}
              onChange={handleSearch}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-white/50" />
          </div>
          
          <Select defaultValue="v1">
            <SelectTrigger className="w-full bg-black border-white/20 text-white">
              <SelectValue placeholder="API Version" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="v1">API v1 (Current)</SelectItem>
              <SelectItem value="v2">API v2 (Beta)</SelectItem>
              <SelectItem value="v3">API v3 (Alpha)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <h2 className="text-lg font-medium mb-4">API Reference</h2>
        <nav className="space-y-2">
          <a 
            href="#rest-api" 
            className={`block p-2 rounded hover:bg-white/5 text-white/90 hover:text-white ${isMatch("REST API") ? "bg-white/10 text-white" : ""}`}
          >
            REST API
          </a>
          <div className="pl-4 space-y-1 text-sm">
            <a 
              href="#post-api" 
              className={`block p-1.5 rounded hover:bg-white/5 text-white/80 hover:text-white ${isMatch("POST /api/v1/ai") ? "bg-white/10 text-white" : ""}`}
            >
              POST /api/v1/ai
            </a>
          </div>
          <a 
            href="#graphql-api" 
            className={`block p-2 rounded hover:bg-white/5 text-white/90 hover:text-white ${isMatch("GraphQL API") ? "bg-white/10 text-white" : ""}`}
          >
            GraphQL API
          </a>
          <div className="pl-4 space-y-1 text-sm">
            <a 
              href="#query-ai-response" 
              className={`block p-1.5 rounded hover:bg-white/5 text-white/80 hover:text-white ${isMatch("aiResponse") ? "bg-white/10 text-white" : ""}`}
            >
              query aiResponse
            </a>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default ApiSidebar;
