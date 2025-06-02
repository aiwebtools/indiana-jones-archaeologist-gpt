
import React from 'react';
import { Compass, ExternalLink, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-cyber-black pt-16 overflow-hidden">
      {/* Enhanced background elements with divine effects */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 z-0 animate-pulse-neon"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-purple via-cyber-cyan to-transparent animate-glow"></div>
      
      {/* Multiple divine glow layers */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyber-cyan/20 rounded-full blur-[200px] z-0 animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyber-purple/20 rounded-full blur-[200px] z-0 animate-pulse-neon"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyber-amber/5 rounded-full blur-[300px] z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Logo and Tagline */}
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyber-cyan/20 via-cyber-purple/20 to-cyber-amber/20 rounded-lg blur-sm"></div>
            <div className="relative bg-cyber-black/50 backdrop-blur-md rounded-lg p-4 border border-white/10">
              <div className="flex items-center space-x-2 mb-4">
                <Compass className="h-8 w-8 text-cyber-cyan animate-pulse-neon" />
                <div>
                  <div className="font-display font-bold text-lg text-white text-glow">
                    Indiana Archaeologist <span className="text-cyber-cyan">GPT</span>
                  </div>
                  <div className="text-xs text-cyber-cyan/80">
                    Presented by <a href="http://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">AiWebTools.Ai</a>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm mb-6">
                Uncovering the hidden truths buried beneath the sands of time with AI—questioning history, decoding ancient texts, and revealing lost civilizations.
              </p>
              
              <a 
                href="https://chatgpt.com/g/g-oQg0mRBWy-indiana-archaeologist-gpt"
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-button text-sm"
              >
                Use Indiana Archaeologist GPT Now
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyber-purple/20 via-cyber-pink/20 to-cyber-cyan/20 rounded-lg blur-sm"></div>
            <div className="relative bg-cyber-black/50 backdrop-blur-md rounded-lg p-4 border border-white/10">
              <h3 className="text-white font-display font-bold text-lg mb-6 text-glow">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-cyber-cyan transition-all duration-300 flex items-center group">
                    <span className="w-1.5 h-1.5 bg-cyber-cyan inline-block mr-2 group-hover:animate-pulse"></span>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-gray-300 hover:text-cyber-cyan transition-all duration-300 flex items-center group">
                    <span className="w-1.5 h-1.5 bg-cyber-cyan inline-block mr-2 group-hover:animate-pulse"></span>
                    Features
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-gray-300 hover:text-cyber-cyan transition-all duration-300 flex items-center group">
                    <span className="w-1.5 h-1.5 bg-cyber-cyan inline-block mr-2 group-hover:animate-pulse"></span>
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#disclaimer" className="text-gray-300 hover:text-cyber-cyan transition-all duration-300 flex items-center group">
                    <span className="w-1.5 h-1.5 bg-cyber-cyan inline-block mr-2 group-hover:animate-pulse"></span>
                    Disclaimer
                  </a>
                </li>
                <li>
                  <a 
                    href="http://www.aiwebtools.ai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-cyber-cyan transition-all duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-cyber-cyan inline-block mr-2 group-hover:animate-pulse"></span>
                    More AI Tools
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Column 3: Legal */}
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyber-amber/20 via-cyber-red/20 to-cyber-purple/20 rounded-lg blur-sm"></div>
            <div className="relative bg-cyber-black/50 backdrop-blur-md rounded-lg p-4 border border-white/10">
              <h3 className="text-white font-display font-bold text-lg mb-6 text-glow">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://openai.com/policies/privacy-policy/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-cyber-cyan transition-all duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-cyber-purple inline-block mr-2 group-hover:animate-pulse"></span>
                    Privacy Policy
                    <ExternalLink className="h-3 w-3 ml-1 group-hover:text-cyber-cyan" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://aiwebtools.lovable.app/disclaimers" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-cyber-cyan transition-all duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-cyber-purple inline-block mr-2 group-hover:animate-pulse"></span>
                    Terms of Service
                    <ExternalLink className="h-3 w-3 ml-1 group-hover:text-cyber-cyan" />
                  </a>
                </li>
                <li>
                  <a href="#disclaimer" className="text-gray-300 hover:text-cyber-cyan transition-all duration-300 flex items-center group">
                    <span className="w-1.5 h-1.5 bg-cyber-purple inline-block mr-2 group-hover:animate-pulse"></span>
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Column 4: Contact */}
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyber-cyan/20 via-cyber-green/20 to-cyber-amber/20 rounded-lg blur-sm"></div>
            <div className="relative bg-cyber-black/50 backdrop-blur-md rounded-lg p-4 border border-white/10">
              <h3 className="text-white font-display font-bold text-lg mb-6 text-glow">Contact</h3>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="tel:+14758008096" 
                    className="text-gray-300 hover:text-cyber-cyan transition-all duration-300 flex items-center group"
                  >
                    <Phone className="h-5 w-5 text-cyber-amber mr-3 group-hover:animate-pulse" />
                    <span>(475) 800-8096</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:Contact@ai-webtools.com" 
                    className="text-gray-300 hover:text-cyber-cyan transition-all duration-300 flex items-center group"
                  >
                    <Mail className="h-5 w-5 text-cyber-amber mr-3 group-hover:animate-pulse" />
                    <span>Contact@ai-webtools.com</span>
                  </a>
                </li>
              </ul>
              
              <div className="mt-8">
                <a 
                  href="http://www.aiwebtools.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block py-2 px-4 bg-cyber-amber/10 text-cyber-amber border border-cyber-amber rounded-full hover:bg-cyber-amber/20 transition-all duration-300 hover:shadow-neon-amber"
                >
                  More AI Tools
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 py-6 text-center md:flex md:justify-between md:items-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-cyan/10 to-transparent animate-pulse-neon"></div>
          <div className="text-gray-400 text-sm mb-4 md:mb-0 relative z-10">
            <a 
              href="http://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-cyber-cyan transition-colors"
            >
              © 2025 AI WEB TOOLS LLC All rights reserved.
            </a>
          </div>
          
          <div className="text-gray-400 text-xs relative z-10">
            <span>Indiana Archaeologist GPT is not affiliated with Lucasfilm Ltd., Disney, or the Indiana Jones franchise.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
