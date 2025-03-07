
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Disclaimer from "@/components/Disclaimer";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const tagline = "Uncovering the hidden truths buried beneath the sands of time with AI—questioning history, decoding ancient texts, and revealing lost civilizations. No stone goes unturned, no mystery left unsolved. With deep analysis, cutting-edge research, and a thirst for adventure, we defy the norm and connect the dots of the past. Legends, relics, and ancient wisdom await—let's dive in. Just one rule… No snakes.";

  return (
    <div className="min-h-screen bg-cyber-black flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
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
              <span className="text-cyber-cyan text-sm font-mono">Advanced Archaeology AI</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              <span className="text-white">Indiana</span>{' '}
              <span className="text-cyber-cyan text-glow">Archaeologist</span>{' '}
              <span className="text-cyber-amber text-glow-amber">GPT</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
              {tagline}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a 
                href="https://chatgpt.com/g/g-oQg0mRBWy-indiana-archaeologist-gpt"
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-button-primary font-bold text-lg"
              >
                Start Your Expedition
              </a>
              <a 
                href="#features"
                className="cyber-button-secondary font-bold text-lg"
              >
                Discover Capabilities
              </a>
            </div>
          </div>
          
          <div className={`md:w-1/2 mt-16 md:mt-0 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="relative h-80 md:h-[450px] flex items-center justify-center">
              {/* YouTube Video */}
              <div className="w-full h-full max-w-2xl overflow-hidden rounded-lg border-2 border-cyber-cyan/30 shadow-neon-cyan">
                <iframe
                  ref={videoRef}
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/WYFRMC2Qjw0?si=ElF48N-cn_FPru3A&autoplay=1&mute=0&controls=1&showinfo=0&rel=0&modestbranding=1&hd=1"
                  title="Indiana Archaeologist GPT"
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

      {/* Call To Action Section */}
      <section className="relative py-24 overflow-hidden bg-cyber-black">
        {/* Glow effects */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl max-h-96 bg-cyber-purple/10 rounded-full blur-[120px] z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="cyber-panel border-2 border-cyber-amber/30 overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyber-amber/20 blur-xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyber-cyan/20 blur-xl"></div>
              
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
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
                >
                  <span className="flex items-center">
                    Start Exploring 
                    <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                
                <a 
                  href="http://www.aiwebtools.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-white hover:text-cyber-cyan transition-colors"
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
