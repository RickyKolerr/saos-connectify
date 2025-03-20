
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { usePayment } from "@/context/PaymentContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "@/components/ui/card";
import { 
  CreditCard, 
  DollarSign,
  Check,
  Info,
  ChevronRight
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

// Component for displaying payment method types
const PaymentMethodSelector = ({ 
  selectedMethod, 
  onChange 
}: { 
  selectedMethod: string; 
  onChange: (method: string) => void;
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div 
        className={`border rounded-lg p-4 flex items-center space-x-3 cursor-pointer transition-all ${
          selectedMethod === "credit_card" 
            ? "bg-primary text-primary-foreground border-primary" 
            : "hover:border-primary/50"
        }`}
        onClick={() => onChange("credit_card")}
      >
        <CreditCard className="h-5 w-5" />
        <div className="flex-1">
          <h3 className="font-medium">Credit Card</h3>
          <p className="text-sm opacity-80">Powered by Stripe</p>
        </div>
        {selectedMethod === "credit_card" && (
          <div className="h-5 w-5 rounded-full bg-white/90 flex items-center justify-center text-primary">
            <Check className="h-3 w-3" />
          </div>
        )}
      </div>
      
      <div 
        className={`border rounded-lg p-4 flex items-center space-x-3 cursor-pointer transition-all ${
          selectedMethod === "paypal" 
            ? "bg-primary text-primary-foreground border-primary" 
            : "hover:border-primary/50"
        }`}
        onClick={() => onChange("paypal")}
      >
        <div className="bg-[#0070ba] h-5 w-5 rounded flex items-center justify-center text-white">
          <span className="text-xs font-bold">P</span>
        </div>
        <div className="flex-1">
          <h3 className="font-medium">PayPal</h3>
          <p className="text-sm opacity-80">Fast & secure</p>
        </div>
        {selectedMethod === "paypal" && (
          <div className="h-5 w-5 rounded-full bg-white/90 flex items-center justify-center text-primary">
            <Check className="h-3 w-3" />
          </div>
        )}
      </div>
    </div>
  );
};

// Credit Card Form
const CreditCardForm = ({
  onSubmit
}: {
  onSubmit: (data: any) => void;
}) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [name, setName] = useState("");
  const [saveCard, setSaveCard] = useState(false);
  
  const formatCardNumber = (value: string) => {
    // Remove non-digits
    const digits = value.replace(/\D/g, "");
    // Add space after every 4 digits
    const formatted = digits.replace(/(\d{4})(?=\d)/g, "$1 ");
    return formatted.slice(0, 19); // Allow for 16 digits + 3 spaces
  };
  
  const formatExpiry = (value: string) => {
    // Remove non-digits
    const digits = value.replace(/\D/g, "");
    
    // Format as MM/YY
    if (digits.length > 2) {
      return `${digits.slice(0, 2)}/${digits.slice(2, 4)}`;
    }
    return digits;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      cardNumber: cardNumber.replace(/\s/g, ""),
      expiry,
      cvc,
      name,
      saveCard
    });
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <div className="space-y-2">
        <label htmlFor="card-name" className="block text-sm">Cardholder Name</label>
        <Input
          id="card-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name on card"
          required
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="card-number" className="block text-sm">Card Number</label>
        <Input
          id="card-number"
          value={cardNumber}
          onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
          placeholder="1234 5678 9012 3456"
          required
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="card-expiry" className="block text-sm">Expiration Date</label>
          <Input
            id="card-expiry"
            value={expiry}
            onChange={(e) => setExpiry(formatExpiry(e.target.value))}
            placeholder="MM/YY"
            required
            maxLength={5}
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="card-cvc" className="block text-sm">CVC</label>
          <Input
            id="card-cvc"
            value={cvc}
            onChange={(e) => setCvc(e.target.value.replace(/\D/g, "").slice(0, 3))}
            placeholder="123"
            required
            maxLength={3}
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="save-card"
          checked={saveCard}
          onChange={(e) => setSaveCard(e.target.checked)}
          className="h-4 w-4 rounded border-gray-300 focus:ring-primary"
        />
        <label htmlFor="save-card" className="text-sm">Save this card for future payments</label>
      </div>
      
      <Button type="submit" className="w-full">Pay Now</Button>
    </form>
  );
};

// PayPal Form (simplified for this example)
const PayPalForm = ({
  onSubmit
}: {
  onSubmit: (data: any) => void;
}) => {
  return (
    <div className="mt-4 space-y-4">
      <p className="text-sm">
        Click the button below to complete your purchase using PayPal. You'll be redirected to PayPal to finalize your payment.
      </p>
      
      <Button 
        onClick={() => onSubmit({})} 
        className="w-full bg-[#0070ba] hover:bg-[#003087] text-white"
      >
        Pay with PayPal
      </Button>
    </div>
  );
};

// Main Payment Form component
const PaymentForm = ({
  amount,
  currency = "USD",
  planName,
  onSuccess,
}: {
  amount: number;
  currency?: string;
  planName: string;
  onSuccess?: () => void;
}) => {
  const { user } = useAuth();
  const { createPaymentIntent, confirmPayment, isLoading, error } = usePayment();
  const [paymentMethod, setPaymentMethod] = useState("credit_card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isErrorDialogOpen, setIsErrorDialogOpen] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  
  const handlePayment = async (data: any) => {
    setIsProcessing(true);
    setPaymentError(null);
    
    try {
      // In a real implementation, we would:
      // 1. Create a payment intent on the server
      // 2. Collect payment details securely
      // 3. Confirm the payment with Stripe/PayPal
      
      // Mock implementation
      const intent = await createPaymentIntent(amount, currency.toLowerCase());
      
      // Mock successful payment after 1.5 seconds
      setTimeout(async () => {
        try {
          await confirmPayment("pm_mock");
          setIsSuccess(true);
          if (onSuccess) {
            onSuccess();
          }
        } catch (err) {
          setPaymentError(err instanceof Error ? err.message : "Payment failed");
          setIsErrorDialogOpen(true);
        } finally {
          setIsProcessing(false);
        }
      }, 1500);
      
    } catch (err) {
      setPaymentError(err instanceof Error ? err.message : "Payment failed");
      setIsErrorDialogOpen(true);
      setIsProcessing(false);
    }
  };
  
  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Complete your purchase</CardTitle>
        <CardDescription>
          {isSuccess ? "Payment successful!" : `You're paying ${currency} ${amount.toFixed(2)} for ${planName}`}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        {isSuccess ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-medium">Payment Complete!</h3>
            <p className="text-muted-foreground mt-2">
              We've sent a receipt to {user?.email}
            </p>
          </div>
        ) : (
          <>
            <PaymentMethodSelector 
              selectedMethod={paymentMethod} 
              onChange={setPaymentMethod} 
            />
            
            {paymentMethod === "credit_card" ? (
              <CreditCardForm onSubmit={handlePayment} />
            ) : (
              <PayPalForm onSubmit={handlePayment} />
            )}
          </>
        )}
      </CardContent>
      
      {isSuccess && (
        <CardFooter>
          <Button 
            onClick={onSuccess} 
            className="w-full"
          >
            Continue <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </CardFooter>
      )}
      
      {/* Error Dialog */}
      <Dialog open={isErrorDialogOpen} onOpenChange={setIsErrorDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Payment Failed</DialogTitle>
            <DialogDescription>
              There was an error processing your payment.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="flex items-start gap-3">
              <div className="text-red-500">
                <Info className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-red-500">
                  {paymentError || "Payment could not be processed. Please try again."}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Your card was not charged. Please try again or use a different payment method.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Button onClick={() => setIsErrorDialogOpen(false)}>
              Try Again
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default PaymentForm;
