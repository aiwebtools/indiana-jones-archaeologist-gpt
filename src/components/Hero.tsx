
import React, { useEffect, useState } from 'react';
import ThreeJSScene from './ThreeJSScene';
import { Book, Compass, MapPin, Search, Skull } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const tagline = "Uncovering the hidden truths buried beneath the sands of time with AI—questioning history, decoding ancient texts, and revealing lost civilizations. No stone goes unturned, no mystery left unsolved. With deep analysis, cutting-edge research, and a thirst for adventure, we defy the norm and connect the dots of the past. Legends, relics, and ancient wisdom await—let's dive in. Just one rule… No snakes.";

  return (
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
            <ThreeJSScene />
            
            {/* Floating icons around the 3D scene */}
            <div className="absolute top-10 left-10 p-3 rounded-full bg-cyber-purple/20 border border-cyber-purple animate-float delay-100">
              <Compass className="h-6 w-6 text-cyber-purple" />
            </div>
            <div className="absolute top-20 right-20 p-3 rounded-full bg-cyber-cyan/20 border border-cyber-cyan animate-float delay-300">
              <Book className="h-6 w-6 text-cyber-cyan" />
            </div>
            <div className="absolute bottom-20 left-20 p-3 rounded-full bg-cyber-amber/20 border border-cyber-amber animate-float delay-200">
              <MapPin className="h-6 w-6 text-cyber-amber" />
            </div>
            <div className="absolute bottom-10 right-10 p-3 rounded-full bg-cyber-pink/20 border border-cyber-pink animate-float delay-0">
              <Search className="h-6 w-6 text-cyber-pink" />
            </div>
            <div className="absolute bottom-1/2 right-1/4 p-3 rounded-full bg-cyber-red/20 border border-cyber-red animate-float delay-150">
              <Skull className="h-6 w-6 text-cyber-red" />
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
  );
};

export default Hero;
