
import { useState } from "react";
import { usePayment } from "@/context/PaymentContext";
import { Button } from "@/components/ui/button";
import { 
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from "@/components/ui/card";
import { CreditCard, Trash2, Plus, AlertCircle } from "lucide-react";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const PaymentMethodCard = ({ 
  method, 
  onDelete, 
  onSetDefault 
}: { 
  method: { 
    id: string; 
    brand: string; 
    last4: string; 
    expMonth: number; 
    expYear: number; 
    isDefault: boolean;
  }; 
  onDelete: () => void; 
  onSetDefault: () => void; 
}) => {
  const [showDelete, setShowDelete] = useState(false);
  
  const formatCardBrand = (brand: string) => {
    if (brand === "visa") return "Visa";
    if (brand === "mastercard") return "Mastercard";
    if (brand === "amex") return "American Express";
    if (brand === "discover") return "Discover";
    if (brand === "paypal") return "PayPal";
    return brand.charAt(0).toUpperCase() + brand.slice(1);
  };
  
  return (
    <div 
      className={`border rounded-lg p-4 ${method.isDefault ? 'bg-secondary/20 border-primary/30' : ''}`}
      onMouseEnter={() => setShowDelete(true)}
      onMouseLeave={() => setShowDelete(false)}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center">
            {method.brand === "paypal" ? (
              <span className="text-xs font-bold text-[#0070ba]">P</span>
            ) : (
              <CreditCard className="h-4 w-4 text-gray-700" />
            )}
          </div>
          <div>
            <p className="font-medium">
              {formatCardBrand(method.brand)}
              {method.last4 && ` •••• ${method.last4}`}
            </p>
            {method.expMonth > 0 && (
              <p className="text-sm text-muted-foreground">
                Expires {method.expMonth.toString().padStart(2, '0')}/{method.expYear.toString().slice(-2)}
              </p>
            )}
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          {method.isDefault ? (
            <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
              Default
            </span>
          ) : (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={onSetDefault}
              className="text-xs h-8"
            >
              Make Default
            </Button>
          )}
          
          {showDelete && (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-destructive border-destructive/50 h-8"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Remove Payment Method</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to remove this payment method? This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={onDelete} className="bg-destructive text-destructive-foreground">
                    Remove
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
        </div>
      </div>
    </div>
  );
};

const SavedPaymentMethods = () => {
  const { 
    savedPaymentMethods, 
    deletePaymentMethod, 
    setDefaultPaymentMethod,
    isLoading,
    error
  } = usePayment();
  
  const handleDelete = async (id: string) => {
    try {
      await deletePaymentMethod(id);
    } catch (err) {
      console.error("Failed to delete payment method:", err);
    }
  };
  
  const handleSetDefault = async (id: string) => {
    try {
      await setDefaultPaymentMethod(id);
    } catch (err) {
      console.error("Failed to set default payment method:", err);
    }
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Methods</CardTitle>
        <CardDescription>
          Manage your saved payment methods
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        {error && (
          <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-3 mb-4 flex items-start space-x-3">
            <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
            <p className="text-sm text-destructive">{error}</p>
          </div>
        )}
        
        <div className="space-y-3">
          {savedPaymentMethods.length === 0 ? (
            <div className="text-center py-8 border rounded-lg">
              <CreditCard className="h-10 w-10 mx-auto text-muted-foreground mb-2" />
              <h3 className="font-medium text-lg">No payment methods saved</h3>
              <p className="text-muted-foreground text-sm mt-1">
                Add a payment method to speed up checkout
              </p>
            </div>
          ) : (
            savedPaymentMethods.map((method) => (
              <PaymentMethodCard
                key={method.id}
                method={method}
                onDelete={() => handleDelete(method.id)}
                onSetDefault={() => handleSetDefault(method.id)}
              />
            ))
          )}
          
          <Button 
            variant="outline" 
            className="w-full mt-4"
            onClick={() => {
              // This would open a dialog to add a new payment method
              // In a real implementation
              console.log("Add payment method clicked");
            }}
          >
            <Plus className="h-4 w-4 mr-2" /> Add Payment Method
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SavedPaymentMethods;
