
import React from "react";
import { ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ApiSidebarProps {
  isMobile: boolean;
}

const ApiSidebar = ({ isMobile }: ApiSidebarProps) => {
  return (
    <aside className={`md:w-64 ${isMobile ? "mb-8" : "md:sticky md:top-20 md:self-start"}`}>
      <div className="border border-white/10 rounded-lg p-4">
        <div className="mb-4">
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
            className="block p-2 rounded hover:bg-white/5 text-white/90 hover:text-white"
          >
            REST API
          </a>
          <div className="pl-4 space-y-1 text-sm">
            <a 
              href="#post-api" 
              className="block p-1.5 rounded hover:bg-white/5 text-white/80 hover:text-white"
            >
              POST /api/v1/ai
            </a>
          </div>
          <a 
            href="#graphql-api" 
            className="block p-2 rounded hover:bg-white/5 text-white/90 hover:text-white"
          >
            GraphQL API
          </a>
          <div className="pl-4 space-y-1 text-sm">
            <a 
              href="#query-ai-response" 
              className="block p-1.5 rounded hover:bg-white/5 text-white/80 hover:text-white"
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
