import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

export const useDownload = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const incrementCounter = async () => {
    try {
      // Use raw SQL to increment counter
      const { error } = await (supabase as any).rpc('execute_sql', {
        query: `
          INSERT INTO "download-counter" (id, count) VALUES (1, 1)
          ON CONFLICT (id) DO UPDATE SET 
            count = "download-counter".count + 1,
            updated_at = now()
        `
      });
      
      if (error) {
        console.error('Counter increment error:', error);
      }
    } catch (error) {
      console.error('Counter error:', error);
    }
  };

  const downloadApp = async () => {
    if (isDownloading) return;
    
    setIsDownloading(true);
    
    try {
      // Increment download counter
      await incrementCounter();

      toast({
        title: "Download started",
        description: "Opening app download page...",
      });

      // Open the MediaFire APK download link
      // const apkUrl = "https://www.mediafire.com/file/mw6h5g90ve2bptq/application-e5ec5fe8-2df0-45ab-86b3-1aeca2ab0382.apk/file";
      //  const apkUrl = "https://drive.google.com/uc?export=download&id=1oNVG1xWYFEGTDqRxsAyhHSBBdjA60gpY";
    const apkUrl = "https://drive.google.com/file/d/10kL_arM8x6FlfWG3OGqMOv2KY_7CYzoQ/view?usp=drive_link";
      window.open(apkUrl, '_blank');

    } catch (error) {
      console.error('Download error:', error);
      toast({
        title: "Download failed",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsDownloading(false);
    }
  };

  return { downloadApp, isDownloading };
};