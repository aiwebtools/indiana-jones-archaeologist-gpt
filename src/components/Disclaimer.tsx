
import React from 'react';
import { AlertTriangle, Shield } from 'lucide-react';

const Disclaimer = () => {
  return (
    <section id="disclaimer" className="relative py-24 bg-cyber-black overflow-hidden">
      {/* Enhanced divine background elements */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30 z-0 animate-pulse-neon"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-purple via-cyber-cyan to-transparent animate-glow"></div>
      
      {/* Multiple divine glow effects */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyber-red/10 rounded-full blur-[300px] z-0 animate-pulse-neon"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyber-amber/20 rounded-full blur-[200px] z-0 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyber-cyan/20 rounded-full blur-[200px] z-0 animate-float delay-1000"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyber-purple/30 rounded-full blur-[150px] z-0 animate-pulse-neon delay-500"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center py-2 px-4 rounded-full bg-cyber-red/20 border-2 border-cyber-red/50 mb-6 shadow-neon-red">
            <AlertTriangle className="h-5 w-5 text-cyber-red mr-2 animate-pulse" />
            <span className="text-cyber-red text-sm font-mono font-bold">Legal Information</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="text-white text-glow">Legal</span>{' '}
            <span className="text-cyber-red text-glow-amber">Disclaimer</span>
          </h2>
          
          <div className="max-w-md mx-auto mb-8">
            <div className="cyber-panel border-cyber-amber/30 bg-cyber-amber/5">
              <p className="text-cyber-amber font-mono text-sm">
                <strong>For Informational, Educational, and Research Purposes Only</strong>
              </p>
            </div>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Divine glow border */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyber-red/20 via-cyber-amber/20 via-cyber-cyan/20 to-cyber-purple/20 rounded-xl blur-xl animate-pulse-neon"></div>
            
            <div className="cyber-panel border-cyber-red/30 bg-cyber-black/80 backdrop-blur-xl relative">
              <div className="space-y-8">
                <div className="flex items-start mb-8">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-cyber-red/30 rounded-full blur-md animate-pulse"></div>
                    <Shield className="h-10 w-10 text-cyber-red mr-6 flex-shrink-0 mt-1 relative z-10" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-white mb-4 text-glow">Disclaimer of Liability</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      Indiana Archaeologist GPT is provided "as is" without any warranties, expressed or implied. AI Web Tools LLC and its affiliates make no representations or warranties of any kind concerning the accuracy, reliability, or completeness of any information provided by this tool.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      The information, content, and interpretations provided by Indiana Archaeologist GPT are for entertainment and educational purposes only. Users should not rely solely on this tool for critical research, academic work, or professional decisions without independent verification from reputable academic and scientific sources.
                    </p>
                  </div>
                </div>
                
                <div className="w-full h-px bg-gradient-to-r from-transparent via-cyber-cyan to-transparent"></div>
                
                <div className="flex items-start mb-8">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-cyber-amber/30 rounded-full blur-md animate-pulse delay-200"></div>
                    <Shield className="h-10 w-10 text-cyber-amber mr-6 flex-shrink-0 mt-1 relative z-10" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-white mb-4 text-glow-amber">Intellectual Property Notice</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      We do not claim this tool to be affiliated with Indiana Jones or any of the copyrights associated with Indiana Jones, Lucasfilm Ltd., Disney, or any related franchises. All references to "Indiana" and the archeologist persona are used for thematic purposes only and constitute an AI simulation unaffiliated with the official Indiana Jones franchise.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      This is an AI simulation tool only. It is not endorsed by or affiliated with the creators, producers, or rights holders of the Indiana Jones intellectual property.
                    </p>
                  </div>
                </div>
                
                <div className="w-full h-px bg-gradient-to-r from-transparent via-cyber-purple to-transparent"></div>
                
                <div className="flex items-start mb-8">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-cyber-cyan/30 rounded-full blur-md animate-pulse delay-400"></div>
                    <Shield className="h-10 w-10 text-cyber-cyan mr-6 flex-shrink-0 mt-1 relative z-10" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-white mb-4 text-glow">AI Accuracy Warning</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      This tool utilizes artificial intelligence which may produce incorrect, incomplete, or misleading information. Some answers might be wrong, and it is the user's sole responsibility to verify all information provided by this tool through reliable academic and scientific sources.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      AI may produce hallucinations, factual errors, or misinterpretations of historical data. Do not use this tool as the sole source for academic research, professional publications, or educational materials without thorough verification.
                    </p>
                  </div>
                </div>
                
                <div className="w-full h-px bg-gradient-to-r from-transparent via-cyber-pink to-transparent"></div>
                
                <div className="flex items-start mb-8">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-cyber-purple/30 rounded-full blur-md animate-pulse delay-600"></div>
                    <Shield className="h-10 w-10 text-cyber-purple mr-6 flex-shrink-0 mt-1 relative z-10" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-white mb-4 text-glow-pink">Historical Accuracy and Interpretations</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      Indiana Archaeologist GPT may present alternative historical perspectives and interpretations that challenge conventional historical narratives. These interpretations are speculative and should not be taken as established historical fact. The tool encourages open-minded exploration but users should exercise critical thinking and consult academic sources for verified historical information.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      Probability scores, pattern analyses, and speculative connections made by this tool are based on available information and algorithmic processing, not definitive proof of historical facts.
                    </p>
                  </div>
                </div>
                
                <div className="w-full h-px bg-gradient-to-r from-transparent via-cyber-green to-transparent"></div>
                
                <div className="flex items-start mb-8">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-cyber-green/30 rounded-full blur-md animate-pulse delay-800"></div>
                    <Shield className="h-10 w-10 text-cyber-green mr-6 flex-shrink-0 mt-1 relative z-10" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-white mb-4 text-glow">Use Limitations</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Users agree not to use Indiana Archaeologist GPT for any purpose that is unlawful or prohibited by these terms. The tool should not be used to generate content that misrepresents historical facts for harmful purposes, promotes discrimination, or spreads misinformation presented as established fact. AI Web Tools LLC reserves the right to modify or discontinue this service at any time without notice.
                    </p>
                  </div>
                </div>
                
                <div className="w-full h-px bg-gradient-to-r from-transparent via-cyber-amber to-transparent"></div>
                
                <div className="flex items-start">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-cyber-amber/30 rounded-full blur-md animate-pulse delay-1000"></div>
                    <Shield className="h-10 w-10 text-cyber-amber mr-6 flex-shrink-0 mt-1 relative z-10" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-white mb-4 text-glow-amber">Licensing and Terms</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      By using Indiana Archaeologist GPT, you acknowledge that you have read and agree to be bound by all applicable terms and policies, including OpenAI's <a href="https://openai.com/policies/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-cyber-cyan hover:underline hover:text-white transition-colors">Privacy Policy</a> and AI Web Tools' <a href="https://aiwebtools.lovable.app/disclaimers" target="_blank" rel="noopener noreferrer" className="text-cyber-cyan hover:underline hover:text-white transition-colors">Terms of Service</a>.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      Copyright © 2025 AI Web Tools LLC. All rights reserved. Indiana Archaeologist GPT is not affiliated with Lucasfilm Ltd., Disney, or the Indiana Jones franchise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
