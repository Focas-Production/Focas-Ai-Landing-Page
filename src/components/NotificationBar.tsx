import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NOTIFICATION_KEY = 'ca-guru-notification-dismissed';

export const NotificationBar: React.FC<{ onDismiss?: () => void }> = ({ onDismiss }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isDismissed = localStorage.getItem(NOTIFICATION_KEY);
    setIsVisible(!isDismissed);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem(NOTIFICATION_KEY, 'true');
    onDismiss?.();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-primary text-primary-foreground px-4 py-2 shadow-elevated">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm md:text-base font-medium">
          <span className="text-lg">⚡</span>
          <span>Stop wasting time confused - Get instant clarity FREE</span>
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={handleDismiss}
          className="h-6 w-6 p-0 text-primary-foreground hover:bg-primary-foreground/20 shrink-0"
          aria-label="Dismiss notification"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};