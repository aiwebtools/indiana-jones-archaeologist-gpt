
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Disclaimer from "@/components/Disclaimer";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import DisclaimerPopup from "@/components/DisclaimerPopup";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const videoRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Check if the user has already accepted the disclaimer
    const hasAcceptedDisclaimer = localStorage.getItem('disclaimerAccepted') === 'true';
    if (!hasAcceptedDisclaimer) {
      setShowDisclaimer(true);
    }

    return () => clearTimeout(timer);
  }, []);

  const tagline = "Unveiling ancient mysteries with AI—questioning history, decoding texts, and discovering lost civilizations. Through cutting-edge research and adventure, we connect the dots of our past. Ready to explore? Just one rule… No snakes.";

  return (
    <div className="min-h-screen bg-cyber-black flex flex-col">
      {/* SEO-optimized hidden content for search engines */}
      <div className="sr-only">
        <h1>AI Web Tools - AIWEBTOOLS.AI - Advanced Artificial Intelligence Tools</h1>
        <p>Discover the best AI tools for research, analysis, and discovery. AIWEBTOOLS.AI offers cutting-edge artificial intelligence web tools including Indiana Archaeologist GPT for archaeological research, historical analysis, and ancient text decoding.</p>
        <p>Keywords: AI web tools, AI tools, artificial intelligence tools, research AI, archaeological AI, historical analysis AI, AIWEBTOOLS.AI</p>
      </div>
      
      <Navbar />
      
      {/* Disclaimer Popup */}
      <DisclaimerPopup 
        isOpen={showDisclaimer} 
        onClose={() => setShowDisclaimer(false)} 
      />
      
      {/* Hero Section - SEO Optimized */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
        {/* Background elements */}
        <div className="absolute inset-0 bg-cyber-black z-[-2]"></div>
        <div className="absolute inset-0 bg-cyber-grid opacity-20 z-[-1]"></div>
        
        {/* Glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-cyan/20 rounded-full blur-[120px] z-[-1] animate-pulse-neon"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-purple/20 rounded-full blur-[120px] z-[-1] animate-pulse-neon"></div>
        
        <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
          <div className={`md:w-1/2 text-center md:text-left space-y-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="inline-block py-1 px-3 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 mb-4">
              <span className="text-cyber-cyan text-sm font-mono">Advanced AI Web Tools by AIWEBTOOLS.AI</span>
            </div>
            
            <header>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                <span className="text-white">Indiana</span>{' '}
                <span className="text-cyber-cyan text-glow">Archaeologist</span>{' '}
                <span className="text-cyber-amber text-glow-amber">GPT</span>
              </h1>
            </header>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
              {tagline}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a 
                href="https://chatgpt.com/g/g-oQg0mRBWy-indiana-archaeologist-gpt"
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-button-primary font-bold text-lg"
                aria-label="Start your AI research expedition with Indiana Archaeologist GPT"
              >
                Start Your Expedition
              </a>
              <a 
                href="#features"
                className="cyber-button-secondary font-bold text-lg"
                aria-label="Discover AI tool capabilities and features"
              >
                Discover Capabilities
              </a>
            </div>
          </div>
          
          <div className={`md:w-1/2 mt-16 md:mt-0 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="relative h-80 md:h-[450px] flex items-center justify-center">
              {/* YouTube Video - Updated with new URL */}
              <div className="w-full h-full max-w-2xl overflow-hidden rounded-lg border-2 border-cyber-cyan/30 shadow-neon-cyan">
                <iframe
                  ref={videoRef}
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/uf2i_DdaJ7M?si=ElF48N-cn_FPru3A&autoplay=1&mute=0&controls=1&showinfo=0&rel=0&modestbranding=1&hd=1"
                  title="Indiana Archaeologist GPT - AI Web Tools Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-float">
          <span className="text-white/70 text-sm mb-2">Scroll to explore</span>
          <div className="w-5 h-10 rounded-full border-2 border-white/20 flex justify-center p-1">
            <div className="w-1 h-2 bg-cyber-cyan rounded-full animate-[bounce_1.5s_infinite]"></div>
          </div>
        </div>
      </section>

      {/* Call To Action Section - SEO Enhanced */}
      <section className="relative py-24 overflow-hidden bg-cyber-black" aria-labelledby="cta-heading">
        {/* Glow effects */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl max-h-96 bg-cyber-purple/10 rounded-full blur-[120px] z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="cyber-panel border-2 border-cyber-amber/30 overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyber-amber/20 blur-xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyber-cyan/20 blur-xl"></div>
              
              <div className="text-center mb-8">
                <h2 id="cta-heading" className="text-3xl md:text-4xl font-display font-bold mb-6">
                  <span className="text-cyber-amber text-glow-amber">Begin Your</span>{' '}
                  <span className="text-white">Expedition Today</span>
                </h2>
                
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Unlock the secrets of the past and challenge conventional historical narratives with the power of AI-assisted archaeological research.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
                <a 
                  href="https://chatgpt.com/g/g-oQg0mRBWy-indiana-archaeologist-gpt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-button-primary text-lg group"
                  aria-label="Start exploring with AI web tools"
                >
                  <span className="flex items-center">
                    Start Exploring 
                    <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                
                <a 
                  href="https://aiwebtools.lovable.app/?via=aiwebtools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-white hover:text-cyber-cyan transition-colors"
                  aria-label="Discover more AI web tools at AIWEBTOOLS.AI"
                >
                  <Globe className="h-5 w-5" />
                  <span>Discover More AI Tools</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <Features />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* FAQ Section */}
      <FAQ />
      
      {/* Disclaimer Section */}
      <Disclaimer />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
