
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useToast } from "@/hooks/use-toast";
import ApiSidebar from "./ApiSidebar";
import DeveloperPortalContent from "./DeveloperPortalContent";

const DeveloperPortal = () => {
  const isMobile = useIsMobile();
  const { toast } = useToast();

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Copied to clipboard",
      description: "Code snippet has been copied to your clipboard",
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Main Content - Removed the header since we now have a global navbar */}
      <div className="container mx-auto flex-1 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <ApiSidebar isMobile={isMobile} />

          {/* Main Content */}
          <DeveloperPortalContent copyCode={copyCode} />
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 p-6 mt-12">
        <div className="container mx-auto">
          <div className="text-center text-white/60 text-sm">
            © {new Date().getFullYear()} Orchesity. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DeveloperPortal;
