
import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Mail } from "lucide-react";

import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const resetSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type ResetValues = z.infer<typeof resetSchema>;

const ForgotPassword = () => {
  const { sendPasswordResetEmail, error } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const form = useForm<ResetValues>({
    resolver: zodResolver(resetSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: ResetValues) => {
    setIsLoading(true);
    try {
      await sendPasswordResetEmail(values.email);
      setIsEmailSent(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendAgain = () => {
    form.reset();
    setIsEmailSent(false);
  };

  return (
    <>
      <Helmet>
        <title>Forgot Password | Your Platform</title>
        <meta name="description" content="Reset your password" />
      </Helmet>
      <div className="flex justify-center items-center min-h-screen bg-background p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <div className="flex items-center">
              <Link to="/auth/signin" className="inline-flex items-center text-sm font-medium transition-colors hover:text-primary">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to sign in
              </Link>
            </div>
            <CardTitle className="text-2xl font-bold text-center mt-4">
              {isEmailSent ? "Check your email" : "Forgot password?"}
            </CardTitle>
            <CardDescription className="text-center">
              {isEmailSent 
                ? "We have sent you a password reset link to your email."
                : "Enter your email address and we'll send you a link to reset your password."}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            
            {isEmailSent ? (
              <div className="flex flex-col items-center justify-center py-4 space-y-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-10 w-10 text-primary" />
                </div>
                <p className="text-center text-sm text-muted-foreground max-w-xs">
                  If an account exists with the email you provided, you will receive a password reset link shortly.
                </p>
                <Button 
                  type="button" 
                  variant="outline" 
                  className="w-full mt-4"
                  onClick={handleSendAgain}
                >
                  Send again
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="name@example.com" 
                            {...field} 
                            disabled={isLoading} 
                            type="email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending email...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Mail className="mr-2 h-4 w-4" />
                        Send reset link
                      </div>
                    )}
                  </Button>
                </form>
              </Form>
            )}
          </CardContent>
          <CardFooter>
            <div className="text-center w-full">
              <p className="text-sm text-muted-foreground">
                Remember your password?{" "}
                <Link to="/auth/signin" className="text-primary hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default ForgotPassword;
