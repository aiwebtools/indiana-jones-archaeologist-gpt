
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqItems = [
  {
    question: "What is Indiana Archaeologist GPT?",
    answer: "Indiana Archaeologist GPT is an advanced AI assistant that acts as an archaeologist in the spirit of Indiana Jones. It helps users conduct deep research into history, ancient civilizations, artifacts, and hidden knowledge, using multiple sources and analytical capabilities to explore alternative historical perspectives."
  },
  {
    question: "How does Indiana Archaeologist GPT work?",
    answer: "The AI utilizes web search capabilities, image analysis, code generation, and document creation to conduct comprehensive investigations into historical topics. It analyzes multiple sources, identifies patterns, examines ancient texts, and provides detailed insights, all while maintaining the adventurous persona of an archaeological explorer."
  },
  {
    question: "What kinds of topics can I explore with this tool?",
    answer: "You can explore a wide range of archaeological and historical topics including ancient civilizations, historical artifacts, ancient texts like the Dead Sea Scrolls and Nag Hammadi library, historical mysteries, alternative historical theories, archaeological discoveries, historical connections, and much more."
  },
  {
    question: "Can it analyze images of artifacts or historical sites?",
    answer: "Yes, Indiana Archaeologist GPT can analyze images of artifacts, ancient texts, historical sites, and archaeological discoveries. It can help identify origins, potential meanings, historical context, and connections to other historical elements."
  },
  {
    question: "Does it use Python for data analysis?",
    answer: "Yes, the AI can use Python to create probability scores, analyze patterns, generate visualizations through charts and graphs, and provide data-driven insights into historical investigations and theories."
  },
  {
    question: "How accurate is the historical information provided?",
    answer: "Indiana Archaeologist GPT combines factual archaeological knowledge with speculative thinking about realistic probabilities. While it aims to be truthful and evidence-based, it also explores alternative perspectives that may challenge conventional historical narratives. Always verify critical historical information with multiple sources."
  },
  {
    question: "What makes this different from regular AI assistants?",
    answer: "Indiana Archaeologist GPT distinguishes itself through its specialized focus on archaeology and historical investigation, its ability to analyze ancient texts and artifacts, its open-minded approach to alternative historical theories, and its adventurous Indiana Jones-inspired persona that guides users through investigations."
  },
  {
    question: "Is there a cost to use Indiana Archaeologist GPT?",
    answer: "Indiana Archaeologist GPT is available through ChatGPT, which offers both free and premium subscription options. Premium subscribers have access to more advanced features and capabilities."
  }
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter(item => item !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  return (
    <section id="faq" className="relative py-24 bg-cyber-dark-blue overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-cyan to-transparent"></div>
      
      {/* Glow effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyber-purple/10 rounded-full blur-[120px] z-0"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyber-cyan/10 rounded-full blur-[120px] z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block py-1 px-3 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 mb-4">
            <span className="text-cyber-cyan text-sm font-mono">Common Questions</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="text-white">Frequently Asked</span>{' '}
            <span className="text-cyber-cyan text-glow">Questions</span>
          </h2>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover more about Indiana Archaeologist GPT and how it can help you uncover the mysteries of the ancient world.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="cyber-panel hover:border-cyber-cyan/30 transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex justify-between items-center text-left"
                aria-expanded={openItems.includes(index)}
              >
                <div className="flex items-center">
                  <HelpCircle className="h-5 w-5 text-cyber-purple mr-3 flex-shrink-0" />
                  <h3 className="text-xl font-display font-semibold text-white">
                    {item.question}
                  </h3>
                </div>
                
                {openItems.includes(index) ? (
                  <ChevronUp className="h-5 w-5 text-cyber-cyan flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-cyber-cyan flex-shrink-0" />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="mt-4 pt-4 border-t border-white/10 text-gray-300 animate-accordion-down">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
