
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type User = {
  id: string;
  email: string;
  name: string | null;
  photoUrl?: string;
  provider?: "email" | "google" | "github" | "openai" | "xai";
  userType?: "business" | "developer";
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  error: string | null;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signInWithGitHub: () => Promise<void>;
  signInWithOpenAI: () => Promise<void>;
  signUp: (email: string, password: string, name?: string) => Promise<void>;
  signOut: () => Promise<void>;
  sendPasswordResetEmail: (email: string) => Promise<void>;
  resetPassword: (token: string, newPassword: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Check for existing session on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          // Try to get user type from localStorage if it exists
          const userType = localStorage.getItem("userType");
          if (userType && (userType === "business" || userType === "developer")) {
            parsedUser.userType = userType;
          }
          setUser(parsedUser);
        }
      } catch (err) {
        console.error("Failed to restore session:", err);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const signInWithEmail = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      // Mock successful auth - replace with real auth logic
      const mockUser: User = {
        id: "user-" + Math.random().toString(36).substr(2, 9),
        email,
        name: email.split("@")[0],
        provider: "email"
      };
      
      localStorage.setItem("user", JSON.stringify(mockUser));
      setUser(mockUser);
    } catch (err) {
      setError("Failed to sign in with email");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    setLoading(true);
    setError(null);
    try {
      // Mock successful Google auth - replace with real auth logic
      const mockUser: User = {
        id: "google-" + Math.random().toString(36).substr(2, 9),
        email: "user@gmail.com",
        name: "Google User",
        photoUrl: "https://lh3.googleusercontent.com/a/default-user",
        provider: "google"
      };
      
      localStorage.setItem("user", JSON.stringify(mockUser));
      setUser(mockUser);
    } catch (err) {
      setError("Failed to sign in with Google");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const signInWithGitHub = async () => {
    setLoading(true);
    setError(null);
    try {
      // Mock successful xAI auth - replace with real auth logic
      const mockUser: User = {
        id: "xai-" + Math.random().toString(36).substr(2, 9),
        email: "user@xai.com",
        name: "xAI User",
        photoUrl: "https://avatars.xai.com/u/default",
        provider: "xai"
      };
      
      localStorage.setItem("user", JSON.stringify(mockUser));
      setUser(mockUser);
    } catch (err) {
      setError("Failed to sign in with xAI");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const signInWithOpenAI = async () => {
    setLoading(true);
    setError(null);
    try {
      // Mock successful OpenAI auth - replace with real auth logic
      const mockUser: User = {
        id: "openai-" + Math.random().toString(36).substr(2, 9),
        email: "user@openai.com",
        name: "OpenAI User",
        photoUrl: "https://openai.com/assets/default-user.png",
        provider: "openai"
      };
      
      localStorage.setItem("user", JSON.stringify(mockUser));
      setUser(mockUser);
    } catch (err) {
      setError("Failed to sign in with OpenAI");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (email: string, password: string, name?: string) => {
    setLoading(true);
    setError(null);
    try {
      // Get the user type from localStorage
      const userType = localStorage.getItem("userType") as "business" | "developer" | null;
      
      // Mock successful signup - replace with real auth logic
      const mockUser: User = {
        id: "user-" + Math.random().toString(36).substr(2, 9),
        email,
        name: name || email.split("@")[0],
        provider: "email",
        userType: userType || undefined
      };
      
      localStorage.setItem("user", JSON.stringify(mockUser));
      setUser(mockUser);
    } catch (err) {
      setError("Failed to sign up");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    setLoading(true);
    try {
      localStorage.removeItem("user");
      setUser(null);
    } catch (err) {
      setError("Failed to sign out");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const sendPasswordResetEmail = async (email: string) => {
    setLoading(true);
    setError(null);
    try {
      // Mock password reset email - replace with real auth logic
      console.log(`Password reset email sent to ${email}`);
      return Promise.resolve();
    } catch (err) {
      setError("Failed to send password reset email");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (token: string, newPassword: string) => {
    setLoading(true);
    setError(null);
    try {
      // Mock password reset - replace with real auth logic
      console.log(`Password reset with token ${token}`);
      return Promise.resolve();
    } catch (err) {
      setError("Failed to reset password");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const value = {
    user,
    loading,
    error,
    signInWithEmail,
    signInWithGoogle,
    signInWithGitHub,
    signInWithOpenAI,
    signUp,
    signOut,
    sendPasswordResetEmail,
    resetPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
