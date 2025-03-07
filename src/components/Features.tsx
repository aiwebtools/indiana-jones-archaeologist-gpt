
import React from 'react';
import { Book, BookOpen, BrainCircuit, Code, Compass, FileText, History, Image, MessageSquare, Search, Server, Zap } from 'lucide-react';

const featuresList = [
  {
    icon: <Search className="h-8 w-8 text-cyber-cyan" />,
    title: "Deep Historical Research",
    description: "Conducts extensive web searches across multiple sources to uncover hidden historical connections and ancient knowledge."
  },
  {
    icon: <BookOpen className="h-8 w-8 text-cyber-pink" />,
    title: "Ancient Text Analysis",
    description: "Examines unaltered historical texts like the Nag Hammadi library and Dead Sea Scrolls to reveal untainted historical truths."
  },
  {
    icon: <Code className="h-8 w-8 text-cyber-amber" />,
    title: "Python-Powered Analytics",
    description: "Utilizes Python to create probability scores, patterns analysis, and visualizations through charts and graphs."
  },
  {
    icon: <Image className="h-8 w-8 text-cyber-green" />,
    title: "Image Analysis",
    description: "Examines archaeological artifacts, ancient writings, and historical sites through uploaded images."
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-cyber-purple" />,
    title: "Pattern Recognition",
    description: "Identifies connections between historical events, symbols, and artifacts that challenge conventional historical narratives."
  },
  {
    icon: <History className="h-8 w-8 text-cyber-red" />,
    title: "Alternative Historical Perspectives",
    description: "Questions mainstream historical accounts while providing evidence-based alternative interpretations."
  },
  {
    icon: <Book className="h-8 w-8 text-cyber-cyan" />,
    title: "Document Creation",
    description: "Generates comprehensive documents, transcriptions, and translations of ancient texts and research findings."
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-cyber-amber" />,
    title: "Indiana Jones Persona",
    description: "Communicates with the adventurous spirit and knowledge of an archaeologist explorer in the Indiana Jones tradition."
  },
  {
    icon: <Compass className="h-8 w-8 text-cyber-green" />,
    title: "Guided Investigations",
    description: "Provides clear next steps and actionable tasks to deepen your archaeological investigations and discoveries."
  }
];

const Features = () => {
  return (
    <section id="features" className="relative py-24 bg-cyber-blue overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-cyan to-transparent"></div>
      
      {/* Glow effects */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyber-purple/10 rounded-full blur-[150px] z-0"></div>
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-cyber-cyan/10 rounded-full blur-[150px] z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block py-1 px-3 rounded-full bg-cyber-purple/10 border border-cyber-purple/30 mb-4">
            <span className="text-cyber-purple text-sm font-mono">Advanced Capabilities</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="text-cyber-cyan text-glow">Unearth Secrets</span>{' '}
            <span className="text-white">with Advanced AI</span>
          </h2>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Indiana Archaeologist GPT combines cutting-edge AI with archaeological expertise to help you explore and understand history in ways never before possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <div 
              key={index} 
              className="cyber-panel group hover:border-cyber-cyan/50 transition-all duration-300 hover:translate-y-[-5px]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-2 rounded-full bg-gradient-to-br from-cyber-black to-cyber-blue inline-block mb-4 border border-white/10">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-display font-bold mb-3 text-white group-hover:text-cyber-cyan transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://chatgpt.com/g/g-oQg0mRBWy-indiana-archaeologist-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-button-primary inline-flex items-center space-x-2 text-lg"
          >
            <Zap className="h-5 w-5" />
            <span>Start Your Archaeological Adventure</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
