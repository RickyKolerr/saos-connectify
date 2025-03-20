
import React from "react";
import OrchesityNavbar from "@/components/orchesity/OrchesityNavbar";
import BusinessPortal from "@/components/orchesity/BusinessPortal";
import { Toaster } from "@/components/ui/toaster";

const Business = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <OrchesityNavbar />
      <main className="container mx-auto py-8 px-4">
        <BusinessPortal />
      </main>
      <Toaster />
    </div>
  );
};

export default Business;
