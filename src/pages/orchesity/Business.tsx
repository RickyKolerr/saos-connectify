
import React from "react";
import OrchesityNavbar from "@/components/orchesity/OrchesityNavbar";
import BusinessPortal from "@/components/orchesity/BusinessPortal";
import { Toaster } from "@/components/ui/toaster";

const Business = () => {
  return (
    <>
      <OrchesityNavbar />
      <BusinessPortal />
      <Toaster />
    </>
  );
};

export default Business;
