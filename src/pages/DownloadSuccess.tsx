import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Download, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const DownloadSuccess = () => {
  // TODO: Replace with actual APK download URL when provided
  const APK_DOWNLOAD_URL = "#"; // Placeholder for future APK link

  const handleDownloadAPK = () => {
    // TODO: Implement download tracking in backend once Supabase is connected
    // This will increment download counter in database
    
    if (APK_DOWNLOAD_URL !== "#") {
      window.open(APK_DOWNLOAD_URL, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-6">
          <CheckCircle className="h-16 w-16 text-success mx-auto mb-4" />
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Download Ready!
          </h1>
          <p className="text-muted-foreground">
            CA Guru.AI is ready to transform your CA preparation journey.
          </p>
        </div>

        <div className="space-y-4">
          <Button 
            onClick={handleDownloadAPK}
            className="w-full"
            size="lg"
            disabled={APK_DOWNLOAD_URL === "#"}
          >
            <Download className="h-4 w-4 mr-2" />
            {APK_DOWNLOAD_URL === "#" ? "APK Coming Soon" : "Download APK"}
          </Button>

          <div className="text-sm text-muted-foreground space-y-2">
            <p>✅ Free forever with core features</p>
            <p>✅ Works offline for downloaded content</p>
            <p>✅ Regular updates with new features</p>
          </div>

          <div className="pt-4 border-t">
            <Link to="/">
              <Button variant="outline" className="w-full">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>

        <footer className="mt-8 pt-6 border-t text-center text-xs text-muted-foreground">
          <p>Proudly featured by <span className="font-semibold text-accent-foreground">FOCAS Edu</span></p>
        </footer>
      </div>
    </div>
  );
};

export default DownloadSuccess;