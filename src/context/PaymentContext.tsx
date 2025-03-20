
import { createContext, useContext, useState, ReactNode } from "react";

type PaymentMethod = "stripe" | "paypal" | "bank_transfer";

type PaymentIntentStatus = 
  | "requires_payment_method" 
  | "requires_confirmation" 
  | "requires_action" 
  | "processing" 
  | "succeeded" 
  | "canceled" 
  | "failed";

type PaymentIntent = {
  id: string;
  amount: number;
  currency: string;
  status: PaymentIntentStatus;
  created: number; // timestamp
  paymentMethod?: PaymentMethod;
};

type PaymentCard = {
  id: string;
  brand: string;
  last4: string;
  expMonth: number;
  expYear: number;
  isDefault: boolean;
};

type PaymentContextType = {
  isLoading: boolean;
  error: string | null;
  paymentIntent: PaymentIntent | null;
  savedPaymentMethods: PaymentCard[];
  
  // Payment operations
  createPaymentIntent: (amount: number, currency: string) => Promise<PaymentIntent>;
  confirmPayment: (paymentMethodId: string) => Promise<PaymentIntent>;
  cancelPayment: (paymentIntentId: string) => Promise<void>;
  
  // Payment method operations
  addPaymentMethod: (paymentDetails: any, type: PaymentMethod) => Promise<PaymentCard>;
  deletePaymentMethod: (paymentMethodId: string) => Promise<void>;
  setDefaultPaymentMethod: (paymentMethodId: string) => Promise<void>;
  
  // Checkout state
  selectedPlan: string | null;
  setSelectedPlan: (planId: string | null) => void;
  isAnnual: boolean;
  setIsAnnual: (isAnnual: boolean) => void;
};

const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

export const usePayment = () => {
  const context = useContext(PaymentContext);
  if (context === undefined) {
    throw new Error("usePayment must be used within a PaymentProvider");
  }
  return context;
};

type PaymentProviderProps = {
  children: ReactNode;
};

export const PaymentProvider = ({ children }: PaymentProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [paymentIntent, setPaymentIntent] = useState<PaymentIntent | null>(null);
  const [savedPaymentMethods, setSavedPaymentMethods] = useState<PaymentCard[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isAnnual, setIsAnnual] = useState<boolean>(false);

  const createPaymentIntent = async (amount: number, currency: string = "usd"): Promise<PaymentIntent> => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Mock implementation - will be replaced with actual API call
      const mockPaymentIntent: PaymentIntent = {
        id: `pi_${Math.random().toString(36).substr(2, 9)}`,
        amount,
        currency,
        status: "requires_payment_method",
        created: Date.now(),
      };
      
      setPaymentIntent(mockPaymentIntent);
      return mockPaymentIntent;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to create payment intent";
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const confirmPayment = async (paymentMethodId: string): Promise<PaymentIntent> => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Mock implementation - will be replaced with actual API call
      if (!paymentIntent) {
        throw new Error("No payment intent found");
      }
      
      const updatedIntent: PaymentIntent = {
        ...paymentIntent,
        status: "succeeded",
      };
      
      setPaymentIntent(updatedIntent);
      return updatedIntent;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to confirm payment";
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const cancelPayment = async (paymentIntentId: string): Promise<void> => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Mock implementation - will be replaced with actual API call
      if (paymentIntent?.id !== paymentIntentId) {
        throw new Error("Payment intent not found");
      }
      
      const updatedIntent: PaymentIntent = {
        ...paymentIntent,
        status: "canceled",
      };
      
      setPaymentIntent(updatedIntent);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to cancel payment";
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const addPaymentMethod = async (paymentDetails: any, type: PaymentMethod): Promise<PaymentCard> => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Mock implementation - will be replaced with actual API call
      const newPaymentMethod: PaymentCard = {
        id: `pm_${Math.random().toString(36).substr(2, 9)}`,
        brand: type === "stripe" ? "visa" : "paypal",
        last4: type === "stripe" ? "4242" : "",
        expMonth: type === "stripe" ? 12 : 0,
        expYear: type === "stripe" ? 2025 : 0,
        isDefault: savedPaymentMethods.length === 0,
      };
      
      setSavedPaymentMethods((prev) => [...prev, newPaymentMethod]);
      return newPaymentMethod;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to add payment method";
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const deletePaymentMethod = async (paymentMethodId: string): Promise<void> => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Mock implementation - will be replaced with actual API call
      const methodToDelete = savedPaymentMethods.find(pm => pm.id === paymentMethodId);
      if (!methodToDelete) {
        throw new Error("Payment method not found");
      }
      
      setSavedPaymentMethods((prev) => prev.filter(pm => pm.id !== paymentMethodId));
      
      // If default payment method was deleted, set a new default
      if (methodToDelete.isDefault && savedPaymentMethods.length > 1) {
        const remaining = savedPaymentMethods.filter(pm => pm.id !== paymentMethodId);
        setSavedPaymentMethods(
          remaining.map((pm, index) => ({
            ...pm,
            isDefault: index === 0
          }))
        );
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to delete payment method";
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const setDefaultPaymentMethod = async (paymentMethodId: string): Promise<void> => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Mock implementation - will be replaced with actual API call
      if (!savedPaymentMethods.some(pm => pm.id === paymentMethodId)) {
        throw new Error("Payment method not found");
      }
      
      setSavedPaymentMethods(savedPaymentMethods.map(pm => ({
        ...pm,
        isDefault: pm.id === paymentMethodId
      })));
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to set default payment method";
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    isLoading,
    error,
    paymentIntent,
    savedPaymentMethods,
    createPaymentIntent,
    confirmPayment,
    cancelPayment,
    addPaymentMethod,
    deletePaymentMethod,
    setDefaultPaymentMethod,
    selectedPlan,
    setSelectedPlan,
    isAnnual,
    setIsAnnual,
  };

  return <PaymentContext.Provider value={value}>{children}</PaymentContext.Provider>;
};
