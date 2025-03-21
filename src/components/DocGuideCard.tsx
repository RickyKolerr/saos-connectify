
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface DocGuideCardProps {
  title: string;
  icon: React.ReactNode;
  href?: string;
  description?: string;
}

const DocGuideCard = ({ title, icon, href = "#", description }: DocGuideCardProps) => {
  return (
    <Card 
      className="border border-white/10 bg-black/40 hover:bg-black/60 hover:border-white/20 transition-all duration-300 group shadow-none"
    >
      <CardContent className="p-6">
        <div className="flex items-start space-x-3 mb-3">
          <div className="text-white/70 group-hover:text-white transition-colors">
            {icon}
          </div>
          <div>
            <h3 className="text-lg font-medium text-white group-hover:text-gradient transition-all duration-300">
              {title}
            </h3>
            {description && (
              <p className="text-sm text-white/60 mt-1">{description}</p>
            )}
          </div>
        </div>
        <div className="ml-8">
          <Button 
            variant="link" 
            className="p-0 h-auto text-white/50 hover:text-white/70 group-hover:text-white/70 transition-all duration-300 flex items-center"
            asChild
          >
            <Link to={href}>
              Read guide
              <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DocGuideCard;
