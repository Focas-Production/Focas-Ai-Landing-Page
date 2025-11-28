import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useDownload } from "@/hooks/useDownload";
import { NotificationBar } from "@/components/NotificationBar";
import { Menu, X } from "lucide-react";

const Index = () => {
  const {
    downloadApp,
    isDownloading
  } = useDownload();

  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const isDismissed = localStorage.getItem('ca-guru-notification-dismissed');
    setIsNotificationVisible(!isDismissed);
  }, []);

  // Download functionality integrated
  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "Is CA Guru.AI free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. You can download and start learning for free."
      }
    }, {
      "@type": "Question",
      "name": "How fast are doubts solved?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most doubts are solved in seconds with step-by-step explanations."
      }
    }, {
      "@type": "Question",
      "name": "Does it work for all CA levels?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes—Foundation, Intermediate, and Final. Personalised plans adapt to your level."
      }
    }]
  };
  return <>
      <NotificationBar onDismiss={() => setIsNotificationVisible(false)} />
      
      <header className={`w-full ${isNotificationVisible ? 'pt-4' : 'pt-2'}`}>
        <nav className="container mx-auto px-2 py-1 md:py-2">
          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col space-y-4 pt-7 py-2 px-2">
  <div className="flex items-center justify-between">
    <div className="flex items-center">
      <a href="https://focasedu.com" target="_blank" rel="noopener noreferrer">
        <img 
          src="/lovable-uploads/1112dcea-ed23-4d49-965b-c22ad04d034e.png" 
          alt="CA Guru.ai powered by FOCAS" 
          className="h-16 sm:h-18" 
        />
      </a>
    </div>
    <div className="flex items-center gap-2">
     
      <Button 
        variant="cta" 
        size="sm" 
        onClick={downloadApp} 
        disabled={isDownloading}
      >
        {isDownloading ? "..." : "Get App"}
      </Button>
       {/* <Button variant="cta"><a href="https://forms.gle/By87K28PCtx4CZqr9" target="_blank">Join Waitlist</a></Button> */}
    </div>
  </div>


  
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between pt-4">
            <div className="flex items-center">
              <a href="https://focasedu.com" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/lovable-uploads/1112dcea-ed23-4d49-965b-c22ad04d034e.png" 
                  alt="CA Guru.ai powered by FOCAS" 
                  className="max-h-20 w-auto"  
                />
              </a>
            </div>


            <div className="flex items-center gap-6">
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
              <a href="#download" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Download</a>
            </div>
            <Button variant="cta" onClick={downloadApp} disabled={isDownloading}>
              {isDownloading ? "Downloading..." : "Get the app — Free"}
            </Button>
            {/* <Button variant="cta"><a href="https://forms.gle/By87K28PCtx4CZqr9" target="_blank">Join Waitlist</a></Button> */}
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-primary opacity-90" />
          <div className="container mx-auto px-4 pt-6 pb-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
            <div className="my-[10px]">
              <h1 className="md:text-5xl font-extrabold leading-tight text-primary-foreground text-4xl">Don't use 
                Telegram!
                Study Smarter with CA Guru.AI</h1>
              <p className="mt-4 text-base md:text-lg text-primary-foreground/90">
                Your personal AI mentor for Foundation, Inter & Final — built to solve the most difficult CA Problems
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="cta" className="px-6" onClick={downloadApp} disabled={isDownloading}>
                  {isDownloading ? "Downloading..." : "Get the app — Free"}
                </Button>
                {/* <Button variant="cta"><a href="https://forms.gle/By87K28PCtx4CZqr9" target="_blank">Join Waitlist</a></Button> */}
                <Button variant="secondary" asChild>
                  <a href="#features">See how it works</a>
                </Button>
              </div>

              <div className="mt-4 flex flex-wrap gap-4 text-sm text-primary-foreground/90">
                <span>💡 Instant doubt solver</span>
                <span>⏱ Tests Evaluated in Seconds</span>
                <span>🌙 24/7 mentor support</span>
                <span>🧠 AI-personalised learning</span>
              </div>
            </div>

            <div className="relative">
              <img src="/lovable-uploads/b305bc70-565d-49e3-bd63-335d17a1a406.png" alt="CA Guru.AI mobile app showing step-by-step doubt solving process" className="w-full max-w-2xl mx-auto rounded-2xl shadow-elevated animate-floaty" loading="lazy" />
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="container mx-auto px-4 py-14 md:py-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center">It's OK to not know yet</h2>
          <p className="mt-2 text-center text-muted-foreground">Ask anything, understand everything, instantly.</p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <article className="rounded-lg border bg-card p-5 shadow-sm">
              <h3 className="font-semibold">⚡ Instant AI-Powered Doubt Solving</h3>
              <p className="mt-2 text-sm text-muted-foreground">Scan your notebook, see exactly what went wrong, and get step-by-step fixes.</p>
            </article>
            <article className="rounded-lg border bg-card p-5 shadow-sm">
              <h3 className="font-semibold">⏳ Don't Wait Around</h3>
              <p className="mt-2 text-sm text-muted-foreground">No more chasing your faculty, friends, or seniors for answers — get them instantly.</p>
            </article>
            <article className="rounded-lg border bg-card p-5 shadow-sm">
              <h3 className="font-semibold">🎯 Built for CA Students</h3>
              <p className="mt-2 text-sm text-muted-foreground">AI trained exclusively on real CA student data, notes, and exam patterns.</p>
            </article>
            <article className="rounded-lg border bg-card p-5 shadow-sm">
              <h3 className="font-semibold">🌙 24/7 Mentor Support</h3>
              <p className="mt-2 text-sm text-muted-foreground">Your AI mentor is always on, ready whenever you study.</p>
            </article>
          </div>
        </section>

        {/* Social Proof */}
        <section className="container mx-auto px-4 py-8">
          <div className="rounded-xl border p-6 md:p-8 bg-secondary">
            <p className="text-base md:text-lg text-foreground">
              "CA Guru.AI transformed my entire approach. I went from avoiding difficult topics to tackling them head-on with confidence."
            </p>
            <p className="mt-3 text-sm text-muted-foreground">— Pooja, CA Intermediate</p>
          </div>
        </section>

        {/* Download CTA */}
        <section id="download" className="container mx-auto px-4 py-14">
          <div className="rounded-2xl border p-6 md:p-10 text-center bg-gradient-primary text-primary-foreground shadow-elevated">
            <h2 className="text-2xl md:text-3xl font-bold">Ready to learn smarter with CA Guru.AI?</h2>
            <p className="mt-2 opacity-90">Free to start, Start Asking Doubts</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="cta" className="px-6" onClick={downloadApp} disabled={isDownloading}>
                  {isDownloading ? "Downloading..." : "Download Free"}
                </Button>
                {/* <Button variant="cta"><a href="https://forms.gle/By87K28PCtx4CZqr9" target="_blank">Join Waitlist</a></Button> */}
                <Button variant="secondary" asChild>
                  <a href="#features">See how it works</a>
                </Button>
              </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="container mx-auto px-4 pb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center">FAQs</h2>
          <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-3">
            <details className="rounded-lg border p-5 bg-card">
              <summary className="font-semibold cursor-pointer">Is AI CA Mentor free?</summary>
              <p className="mt-2 text-sm text-muted-foreground">Yes. Download and start learning for free with core features included.</p>
            </details>
            <details className="rounded-lg border p-5 bg-card">
              <summary className="font-semibold cursor-pointer">How fast are doubts solved?</summary>
              <p className="mt-2 text-sm text-muted-foreground">Most doubts are solved in seconds with clear, step-by-step explanations.</p>
            </details>
            <details className="rounded-lg border p-5 bg-card">
              <summary className="font-semibold cursor-pointer">Does it work for my level?</summary>
              <p className="mt-2 text-sm text-muted-foreground">Absolutely—Foundation, Inter, and Final. Plans adapt to your pace and syllabus.</p>
            </details>
          </div>
        </section>
      </main>

     <footer className="border-t py-6 text-center text-sm text-muted-foreground">
      <a href="https://docs.google.com/document/d/19RqBpgPFEgMfrLzjdS1OjB-bm6s3Dl9BCF1uAksmfHA/edit?tab=t.0#heading=h.bhyey8op6t8r" target="_blank">  © {new Date().getFullYear()} CA Guru.AI — By FOCAS Edu.</a>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{
      __html: JSON.stringify(faqJson)
    }} />
    </>;
};
export default Index;
