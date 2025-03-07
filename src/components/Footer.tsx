
import React from 'react';
import { Compass, ExternalLink, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-cyber-black pt-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-purple to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Logo and Tagline */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Compass className="h-8 w-8 text-cyber-cyan" />
              <div>
                <div className="font-display font-bold text-lg text-white">
                  Indiana Archaeologist <span className="text-cyber-cyan">GPT</span>
                </div>
                <div className="text-xs text-cyber-cyan/80">
                  Presented by <a href="http://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">AiWebTools.Ai</a>
                </div>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm mb-6">
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
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-display font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-cyber-cyan transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-cyber-cyan inline-block mr-2"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-cyber-cyan transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-cyber-cyan inline-block mr-2"></span>
                  Features
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-cyber-cyan transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-cyber-cyan inline-block mr-2"></span>
                  FAQ
                </a>
              </li>
              <li>
                <a href="#disclaimer" className="text-gray-400 hover:text-cyber-cyan transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-cyber-cyan inline-block mr-2"></span>
                  Disclaimer
                </a>
              </li>
              <li>
                <a 
                  href="http://www.aiwebtools.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyber-cyan transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-cyber-cyan inline-block mr-2"></span>
                  More AI Tools
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Legal */}
          <div>
            <h3 className="text-white font-display font-bold text-lg mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyber-cyan transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-cyber-purple inline-block mr-2"></span>
                  Privacy Policy
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.ai/terms-of-services" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyber-cyan transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-cyber-purple inline-block mr-2"></span>
                  Terms of Service
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <a href="#disclaimer" className="text-gray-400 hover:text-cyber-cyan transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-cyber-purple inline-block mr-2"></span>
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-display font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:+14758008096" 
                  className="text-gray-400 hover:text-cyber-cyan transition-colors flex items-center"
                >
                  <Phone className="h-5 w-5 text-cyber-amber mr-3" />
                  <span>(475) 800-8096</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:Contact@ai-webtools.com" 
                  className="text-gray-400 hover:text-cyber-cyan transition-colors flex items-center"
                >
                  <Mail className="h-5 w-5 text-cyber-amber mr-3" />
                  <span>Contact@ai-webtools.com</span>
                </a>
              </li>
            </ul>
            
            <div className="mt-8">
              <a 
                href="http://www.aiwebtools.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block py-2 px-4 bg-cyber-amber/10 text-cyber-amber border border-cyber-amber rounded-full hover:bg-cyber-amber/20 transition-all duration-300"
              >
                More AI Tools
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 py-6 text-center md:flex md:justify-between md:items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            <a 
              href="http://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-cyber-cyan transition-colors"
            >
              © 2025 AI WEB TOOLS LLC All rights reserved.
            </a>
          </div>
          
          <div className="text-gray-400 text-xs">
            <span>Indiana Archaeologist GPT is not affiliated with Lucasfilm Ltd., Disney, or the Indiana Jones franchise.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
