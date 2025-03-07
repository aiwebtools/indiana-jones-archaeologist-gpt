
import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Dr. Emily Chen",
    title: "Historical Researcher",
    quote: "Indiana Archaeologist GPT has transformed my research process. Its ability to find connections across different historical periods and analyze ancient texts saved me countless hours of manual investigation.",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    name: "Marcus Johnson",
    title: "Archaeology Student",
    quote: "As a student, having access to this AI has been like having a personal mentor. It challenges my thinking and helps me explore alternative historical perspectives I would have never considered.",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    name: "Sophia Rodriguez",
    title: "Ancient History Enthusiast",
    quote: "I've always been fascinated by ancient mysteries. This AI doesn't just answer questions - it guides me through a journey of discovery, helping me connect dots and see patterns in historical events.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    name: "James Wilson",
    title: "Documentary Filmmaker",
    quote: "The depth of analysis and historical connections this tool provides has been invaluable for my documentary research. It's helped me craft more compelling and well-researched narratives about ancient civilizations.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="relative py-24 bg-cyber-blue overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-amber to-transparent"></div>
      
      {/* Glow effects */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyber-amber/10 rounded-full blur-[120px] z-0"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyber-purple/10 rounded-full blur-[120px] z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block py-1 px-3 rounded-full bg-cyber-amber/10 border border-cyber-amber/30 mb-4">
            <span className="text-cyber-amber text-sm font-mono">User Experiences</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="text-white">What Explorers Are</span>{' '}
            <span className="text-cyber-amber text-glow-amber">Saying</span>
          </h2>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover how Indiana Archaeologist GPT is helping researchers, students, and history enthusiasts uncover new perspectives on the past.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="cyber-panel hover:border-cyber-amber/30 transition-all duration-300 glow-line-bottom glow-line-left"
            >
              <div className="flex items-start mb-6">
                <div className="mr-4 flex-shrink-0">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-cyber-amber">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 p-1 rounded-full bg-cyber-black border border-cyber-amber">
                      <Quote className="h-4 w-4 text-cyber-amber" />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-display font-bold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-cyber-cyan text-sm mb-3">
                    {testimonial.title}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-300 italic">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
