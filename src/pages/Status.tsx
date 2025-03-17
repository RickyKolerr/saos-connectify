
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, AlertCircle, Clock } from "lucide-react";

const StatusIndicator = ({ status }: { status: 'operational' | 'degraded' | 'outage' }) => {
  const statusConfig = {
    operational: {
      icon: CheckCircle,
      text: "Operational",
      color: "text-white bg-white/10"
    },
    degraded: {
      icon: Clock,
      text: "Degraded",
      color: "text-white bg-white/10"
    },
    outage: {
      icon: AlertCircle,
      text: "Outage",
      color: "text-white bg-white/10"
    }
  };
  
  const { icon: Icon, text, color } = statusConfig[status];
  
  return (
    <div className={`flex items-center px-3 py-1 rounded-full ${color}`}>
      <Icon className="h-4 w-4 mr-1" />
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
};

const Status = () => {
  const services = [
    { name: "API", status: "operational" as const, uptime: "99.99%" },
    { name: "Dashboard", status: "operational" as const, uptime: "99.98%" },
    { name: "Authentication", status: "operational" as const, uptime: "99.99%" },
    { name: "Model Orchestration", status: "operational" as const, uptime: "99.97%" },
    { name: "Provider Integrations", status: "operational" as const, uptime: "99.95%" },
    { name: "Analytics", status: "operational" as const, uptime: "99.96%" }
  ];
  
  const incidents = [
    {
      title: "Scheduled Maintenance",
      date: "April 20, 2024",
      time: "2:00 AM - 4:00 AM UTC",
      type: "scheduled",
      description: "We will be performing scheduled maintenance on our infrastructure. During this time, some services may experience brief interruptions."
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">System Status</h1>
              <div className="inline-flex items-center justify-center bg-white/10 px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5 mr-2 text-white" />
                <span className="text-lg font-medium">All Systems Operational</span>
              </div>
              <p className="text-white/70 mt-4">
                Current time: {new Date().toLocaleString()} UTC
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-2xl font-semibold mb-6">Services</h2>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-white/10 rounded-lg bg-white/5">
                    <div className="flex items-center">
                      <span className="font-medium mr-3">{service.name}</span>
                      <StatusIndicator status={service.status} />
                    </div>
                    <div className="text-white/70">
                      <span>30-day uptime: {service.uptime}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-2xl font-semibold mb-6">Upcoming Maintenance</h2>
              {incidents.length > 0 ? (
                <div className="space-y-6">
                  {incidents.map((incident, index) => (
                    <div key={index} className="p-6 border border-white/10 rounded-lg bg-white/5">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-medium">{incident.title}</h3>
                          <p className="text-white/70">
                            {incident.date} • {incident.time}
                          </p>
                        </div>
                        <div className="bg-white/10 px-3 py-1 rounded-full text-sm">
                          {incident.type === "scheduled" ? "Scheduled" : "Unscheduled"}
                        </div>
                      </div>
                      <p className="text-white/80">{incident.description}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 border border-white/10 rounded-lg bg-white/5 text-center">
                  <p className="text-white/70">No scheduled maintenance at this time.</p>
                </div>
              )}
            </div>
            
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-semibold mb-6">Historical Uptime</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 border border-white/10 rounded-lg bg-white/5">
                  <div className="text-4xl font-bold mb-2">99.98%</div>
                  <p className="text-white/70">Past 30 Days</p>
                </div>
                <div className="p-6 border border-white/10 rounded-lg bg-white/5">
                  <div className="text-4xl font-bold mb-2">99.97%</div>
                  <p className="text-white/70">Past 90 Days</p>
                </div>
                <div className="p-6 border border-white/10 rounded-lg bg-white/5">
                  <div className="text-4xl font-bold mb-2">99.99%</div>
                  <p className="text-white/70">Past 7 Days</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Status;
