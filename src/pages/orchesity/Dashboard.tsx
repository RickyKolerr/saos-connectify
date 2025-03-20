
import React from "react";
import SetupWizard from "@/components/orchesity/SetupWizard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">Orchesity</div>
          <Button variant="orchesity" size="sm">Logout</Button>
        </div>
      </header>

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
    </div>
  );
};

export default Dashboard;
