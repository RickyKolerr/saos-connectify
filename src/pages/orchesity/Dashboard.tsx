
import React from "react";
import OrchesityNavbar from "@/components/orchesity/OrchesityNavbar";
import SetupWizard from "@/components/orchesity/SetupWizard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Toaster } from "@/components/ui/toaster";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <OrchesityNavbar />

      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Welcome to Orchesity!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80">
              Orchestrate AI providers with a single API. Follow the quick setup wizard to get started.
            </p>
          </CardContent>
        </Card>
        
        <SetupWizard />
      </main>
      
      <footer className="border-t border-white/10 p-6 mt-12">
        <div className="container mx-auto">
          <div className="text-center text-white/60 text-sm">
            © {new Date().getFullYear()} Orchesity. All rights reserved.
          </div>
        </div>
      </footer>
      
      <Toaster />
    </div>
  );
};

export default Dashboard;
