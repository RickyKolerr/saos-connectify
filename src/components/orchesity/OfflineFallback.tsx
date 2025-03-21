
import React from 'react';
import { Button } from '@/components/ui/button';
import { WifiOff } from 'lucide-react';

interface OfflineFallbackProps {
  onRetry: () => void;
}

const OfflineFallback = ({ onRetry }: OfflineFallbackProps) => {
  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-md">
        <WifiOff className="h-16 w-16 text-black/70 mx-auto mb-6" />
        <h2 className="text-2xl font-bold text-black mb-2">[EN] Backend Offline</h2>
        <p className="text-black/70 mb-8">
          [EN] We're having trouble connecting to the Orchesity backend. 
          You're currently viewing cached data which may not be up to date.
        </p>
        <Button 
          variant="outline" 
          onClick={onRetry}
          className="px-6 py-2 focus:outline-black focus:ring-2 focus:ring-black"
        >
          [EN] Retry Connection
        </Button>
      </div>
    </div>
  );
};

export default OfflineFallback;
