
import React, { useState, useEffect } from 'react';
import { Shield, X, AlertTriangle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface DisclaimerPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const DisclaimerPopup = ({ isOpen, onClose }: DisclaimerPopupProps) => {
  if (!isOpen) return null;

  const handleAgree = () => {
    localStorage.setItem('disclaimerAccepted', 'true');
    toast({
      title: "Welcome aboard!",
      description: "You're all set to explore archaeological mysteries.",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Disclaimer Card */}
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-auto rounded-lg border-2 border-cyber-amber/30 shadow-neon-amber animate-scale-in">
        {/* Animated background effects */}
        <div className="absolute inset-0 bg-cyber-black/95 z-[-1]"></div>
        <div className="absolute inset-0 bg-cyber-grid opacity-20 z-[-1]"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-amber/10 blur-xl rounded-full z-[-1]"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyber-cyan/10 blur-xl rounded-full z-[-1]"></div>
        
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>
        
        {/* Content */}
        <div className="p-6 md:p-8">
          <div className="text-center mb-6">
            <div className="inline-flex items-center py-1 px-3 rounded-full bg-cyber-amber/10 border border-cyber-amber/30 mb-3">
              <AlertTriangle className="h-4 w-4 text-cyber-amber mr-2" />
              <span className="text-cyber-amber text-sm font-mono">Important Notice</span>
            </div>
            
            <h2 className="text-3xl font-display font-bold text-glow-amber text-cyber-amber mb-1">
              Disclaimer
            </h2>
            <p className="text-gray-400 text-sm">Please read before continuing</p>
          </div>
          
          <div className="space-y-4 mb-6">
            <div className="flex gap-3">
              <Shield className="h-6 w-6 text-cyber-amber flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-display font-bold text-white mb-1">Not Affiliated with Indiana Jones</h3>
                <p className="text-gray-300 text-sm">
                  This tool is not affiliated with Indiana Jones or any related franchises. All references to "Indiana" are used for thematic purposes only.
                </p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Shield className="h-6 w-6 text-cyber-amber flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-display font-bold text-white mb-1">AI Accuracy Warning</h3>
                <p className="text-gray-300 text-sm">
                  This tool utilizes AI which may produce incorrect or misleading information. It is your responsibility to verify all information through reliable sources.
                </p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Shield className="h-6 w-6 text-cyber-amber flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-display font-bold text-white mb-1">Entertainment Purposes</h3>
                <p className="text-gray-300 text-sm">
                  The information and interpretations provided are for entertainment and educational purposes only. Do not rely solely on this tool for critical research.
                </p>
              </div>
            </div>
          </div>
          
          {/* Agreement button */}
          <div className="flex justify-center">
            <button
              onClick={handleAgree}
              className="group relative bg-cyber-amber/20 border-2 border-cyber-amber text-cyber-amber hover:bg-cyber-amber hover:text-black
                transition-all duration-300 font-display uppercase tracking-wider py-3 px-8 text-lg
                hover:shadow-neon-amber rounded overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-black transition-colors">I Agree</span>
              <span className="absolute bottom-0 left-0 w-0 h-full bg-cyber-amber group-hover:w-full transition-all duration-300 z-0"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
