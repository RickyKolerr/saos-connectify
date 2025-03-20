
import React from "react";
import OrchesityNavbar from "@/components/orchesity/OrchesityNavbar";
import DeveloperPortal from "@/components/orchesity/DeveloperPortal";
import { Toaster } from "@/components/ui/toaster";

const Developer = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <OrchesityNavbar />
      <main className="container mx-auto py-8 px-4">
        <DeveloperPortal />
      </main>
      <Toaster />
    </div>
  );
};

export default Developer;
