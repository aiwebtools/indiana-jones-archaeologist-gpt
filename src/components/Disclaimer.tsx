
import React from 'react';
import { AlertTriangle, Shield } from 'lucide-react';

const Disclaimer = () => {
  return (
    <section id="disclaimer" className="relative py-24 bg-cyber-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-purple to-transparent"></div>
      
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyber-red/5 rounded-full blur-[150px] z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center py-1 px-3 rounded-full bg-cyber-red/10 border border-cyber-red/30 mb-4">
            <AlertTriangle className="h-4 w-4 text-cyber-red mr-2" />
            <span className="text-cyber-red text-sm font-mono">Legal Information</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="text-white">Legal</span>{' '}
            <span className="text-cyber-red">Disclaimer</span>
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="cyber-panel border-cyber-red/20">
            <div className="flex items-start mb-6">
              <Shield className="h-8 w-8 text-cyber-red mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-display font-bold text-white mb-3">Disclaimer of Liability</h3>
                <p className="text-gray-300 mb-4">
                  Indiana Archaeologist GPT is provided "as is" without any warranties, expressed or implied. AI Web Tools LLC and its affiliates make no representations or warranties of any kind concerning the accuracy, reliability, or completeness of any information provided by this tool.
                </p>
                <p className="text-gray-300">
                  The information, content, and interpretations provided by Indiana Archaeologist GPT are for entertainment and educational purposes only. Users should not rely solely on this tool for critical research, academic work, or professional decisions without independent verification from reputable academic and scientific sources.
                </p>
              </div>
            </div>
            
            <div className="flex items-start mb-6">
              <Shield className="h-8 w-8 text-cyber-red mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-display font-bold text-white mb-3">Historical Accuracy and Interpretations</h3>
                <p className="text-gray-300 mb-4">
                  Indiana Archaeologist GPT may present alternative historical perspectives and interpretations that challenge conventional historical narratives. These interpretations are speculative and should not be taken as established historical fact. The tool encourages open-minded exploration but users should exercise critical thinking and consult academic sources for verified historical information.
                </p>
                <p className="text-gray-300">
                  Probability scores, pattern analyses, and speculative connections made by this tool are based on available information and algorithmic processing, not definitive proof of historical facts.
                </p>
              </div>
            </div>
            
            <div className="flex items-start mb-6">
              <Shield className="h-8 w-8 text-cyber-red mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-display font-bold text-white mb-3">Use Limitations</h3>
                <p className="text-gray-300">
                  Users agree not to use Indiana Archaeologist GPT for any purpose that is unlawful or prohibited by these terms. The tool should not be used to generate content that misrepresents historical facts for harmful purposes, promotes discrimination, or spreads misinformation presented as established fact. AI Web Tools LLC reserves the right to modify or discontinue this service at any time without notice.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Shield className="h-8 w-8 text-cyber-red mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-display font-bold text-white mb-3">Licensing and Terms</h3>
                <p className="text-gray-300 mb-4">
                  By using Indiana Archaeologist GPT, you acknowledge that you have read and agree to be bound by all applicable terms and policies, including OpenAI's <a href="https://openai.com/policies/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-cyber-cyan hover:underline">Privacy Policy</a> and AI Web Tools' <a href="https://aiwebtools.ai/terms-of-services" target="_blank" rel="noopener noreferrer" className="text-cyber-cyan hover:underline">Terms of Service</a>.
                </p>
                <p className="text-gray-300">
                  Copyright © 2025 AI Web Tools LLC. All rights reserved. Indiana Archaeologist GPT is not affiliated with Lucasfilm Ltd., Disney, or the Indiana Jones franchise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
