
import { useState } from "react";
import { usePayment } from "@/context/PaymentContext";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, ChevronRight, CreditCard } from "lucide-react";
import SavedPaymentMethods from "./SavedPaymentMethods";
import BillingHistory from "./BillingHistory";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog";

// Mock data for current subscription
const mockSubscription = {
  id: "sub_1",
  planId: "professional",
  planName: "Professional",
  status: "active",
  currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
  isAnnual: true,
  price: 2990,
};

const BillingSettings = () => {
  const { isAnnual, setIsAnnual } = usePayment();
  
  const [subscription, setSubscription] = useState(mockSubscription);
  const [showCancelDialog, setShowCancelDialog] = useState(false);
  const [isCancelling, setIsCancelling] = useState(false);
  
  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return date.toLocaleDateString(undefined, options);
  };
  
  const handleCancelSubscription = async () => {
    setIsCancelling(true);
    
    // Mock API call to cancel subscription
    setTimeout(() => {
      setSubscription({
        ...subscription,
        status: "canceled"
      });
      setIsCancelling(false);
      setShowCancelDialog(false);
    }, 1000);
  };
  
  const handleResumeSubscription = async () => {
    // Mock API call to resume subscription
    setTimeout(() => {
      setSubscription({
        ...subscription,
        status: "active"
      });
    }, 1000);
  };
  
  const handleChangeBillingCycle = () => {
    // Toggle between annual and monthly billing
    setIsAnnual(!isAnnual);
    
    // This would typically trigger an API call to update the subscription
    setSubscription({
      ...subscription,
      isAnnual: !isAnnual,
      price: !isAnnual ? 2990 : 299, // Annual: 2990, Monthly: 299
    });
  };
  
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Current Subscription</CardTitle>
          <CardDescription>
            Manage your subscription plan and billing cycle
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="space-y-6">
            {subscription.status === "canceled" ? (
              <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-destructive">Subscription Canceled</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Your subscription has been canceled and will end on {formatDate(subscription.currentPeriodEnd)}.
                  </p>
                  <Button 
                    className="mt-3" 
                    size="sm"
                    onClick={handleResumeSubscription}
                  >
                    Resume Subscription
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Plan</p>
                    <p className="text-2xl font-bold">{subscription.planName}</p>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Billing Cycle</p>
                    <p className="text-2xl font-bold">
                      {subscription.isAnnual ? "Annual" : "Monthly"}
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Amount</p>
                    <p className="text-xl font-semibold">
                      ${subscription.price.toFixed(2)}
                      <span className="text-muted-foreground text-sm ml-1">
                        {subscription.isAnnual ? "/year" : "/month"}
                      </span>
                    </p>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Next Billing Date</p>
                    <p className="text-xl font-semibold">
                      {formatDate(subscription.currentPeriodEnd)}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </CardContent>
        
        {subscription.status !== "canceled" && (
          <CardFooter className="flex flex-col sm:flex-row sm:justify-between space-y-3 sm:space-y-0">
            <Button 
              variant="outline" 
              onClick={handleChangeBillingCycle}
            >
              Switch to {subscription.isAnnual ? "Monthly" : "Annual"} Billing
            </Button>
            
            <div className="flex space-x-3">
              <Button variant="outline" asChild>
                <a href="/pricing">
                  Change Plan <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                className="text-destructive hover:text-destructive hover:bg-destructive/10 border-destructive/50" 
                onClick={() => setShowCancelDialog(true)}
              >
                Cancel Subscription
              </Button>
            </div>
          </CardFooter>
        )}
      </Card>
      
      <SavedPaymentMethods />
      
      <BillingHistory />
      
      {/* Cancel Subscription Dialog */}
      <Dialog open={showCancelDialog} onOpenChange={setShowCancelDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cancel Subscription</DialogTitle>
            <DialogDescription>
              Are you sure you want to cancel your subscription?
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            <div className="bg-secondary/40 rounded-lg p-4 mb-4">
              <p className="font-medium">What happens when you cancel:</p>
              <ul className="list-disc ml-5 mt-2 space-y-1 text-sm">
                <li>Your subscription will remain active until {formatDate(subscription.currentPeriodEnd)}</li>
                <li>You will not be charged again</li>
                <li>You can resume your subscription anytime before it expires</li>
                <li>After expiration, your account will be downgraded to the free tier</li>
              </ul>
            </div>
            
            <p className="text-sm text-muted-foreground">
              If you're having issues with the service, please consider contacting our support team before canceling.
            </p>
          </div>
          
          <div className="flex justify-end space-x-3">
            <Button 
              variant="outline" 
              onClick={() => setShowCancelDialog(false)}
            >
              Keep Subscription
            </Button>
            
            <Button 
              variant="destructive"
              onClick={handleCancelSubscription}
              disabled={isCancelling}
            >
              {isCancelling ? "Cancelling..." : "Confirm Cancellation"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BillingSettings;
