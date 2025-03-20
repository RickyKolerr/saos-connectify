
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";

// Type definitions
type InvoiceStatus = "paid" | "pending" | "failed";

interface Invoice {
  id: string;
  date: string;
  amount: number;
  status: InvoiceStatus;
  invoiceNumber: string;
}

// Mock data for invoices
const mockInvoices: Invoice[] = [
  {
    id: "inv_1",
    date: "2023-04-15",
    amount: 299,
    status: "paid",
    invoiceNumber: "INV-2023-04001",
  },
  {
    id: "inv_2",
    date: "2023-03-15",
    amount: 299,
    status: "paid",
    invoiceNumber: "INV-2023-03001",
  },
  {
    id: "inv_3",
    date: "2023-02-15",
    amount: 299,
    status: "paid",
    invoiceNumber: "INV-2023-02001",
  },
  {
    id: "inv_4",
    date: "2023-01-15",
    amount: 299,
    status: "paid",
    invoiceNumber: "INV-2023-01001",
  },
];

const BillingHistory = () => {
  const [invoices, setInvoices] = useState<Invoice[]>(mockInvoices);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getStatusColor = (status: InvoiceStatus) => {
    switch (status) {
      case "paid":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "pending":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "failed":
        return "bg-red-500/10 text-red-500 border-red-500/20";
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Billing History</CardTitle>
        <CardDescription>
          View and download your past invoices
        </CardDescription>
      </CardHeader>
      <CardContent>
        {invoices.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">
                    Invoice
                  </th>
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">
                    Date
                  </th>
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">
                    Amount
                  </th>
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">
                    Status
                  </th>
                  <th className="text-right py-3 px-2 font-medium text-muted-foreground">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice) => (
                  <tr
                    key={invoice.id}
                    className="border-b border-border hover:bg-secondary/5"
                  >
                    <td className="py-3 px-2">
                      <span className="font-medium">{invoice.invoiceNumber}</span>
                    </td>
                    <td className="py-3 px-2">{formatDate(invoice.date)}</td>
                    <td className="py-3 px-2">${invoice.amount.toFixed(2)}</td>
                    <td className="py-3 px-2">
                      <span
                        className={`inline-block px-2 py-1 rounded text-xs font-medium border ${getStatusColor(
                          invoice.status
                        )}`}
                      >
                        {invoice.status.charAt(0).toUpperCase() +
                          invoice.status.slice(1)}
                      </span>
                    </td>
                    <td className="py-3 px-2 text-right space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8"
                        onClick={() =>
                          console.log(`Download invoice ${invoice.id}`)
                        }
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8"
                        onClick={() =>
                          console.log(`View invoice ${invoice.id}`)
                        }
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-10 border rounded-lg">
            <p className="text-muted-foreground">No invoices found</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BillingHistory;
