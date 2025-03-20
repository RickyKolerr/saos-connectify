
import React from "react";
import OrchesityNavbar from "@/components/orchesity/OrchesityNavbar";
import DeveloperPortal from "@/components/orchesity/DeveloperPortal";
import { Toaster } from "@/components/ui/toaster";

const Developer = () => {
  return (
    <>
      <OrchesityNavbar />
      <DeveloperPortal />
      <Toaster />
    </>
  );
};

export default Developer;
