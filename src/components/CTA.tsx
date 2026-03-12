
import React from 'react';
import { ArrowRight, Globe } from 'lucide-react';

const CTA = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-cyber-black">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/1000006191.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true')] opacity-20 bg-cover bg-center z-0"></div>
      
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
                href="https://aiwebtools.lovable.app/?via=aiwebtools"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white hover:text-cyber-cyan transition-colors"
              >
                <Globe className="h-5 w-5" />
                <span>Discover More AI Tools</span>
              </a>
            </div>
            
            <div className="mt-12 flex justify-center">
              <a 
                href="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/1000006191.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block overflow-hidden rounded-lg border border-white/20 hover:border-cyber-cyan/50 transition-colors"
              >
                <img 
                  src="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/1000006191.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true" 
                  alt="Archaeological Discovery" 
                  className="w-full max-w-md object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-black/70 to-transparent flex items-end p-4">
                  <span className="text-sm text-gray-300">Ancient artifact revealing historical connections</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
