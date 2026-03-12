
import React, { useState, useEffect } from 'react';
import { Compass, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-cyber-black/80 backdrop-blur-lg'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-2xl font-display font-bold text-cyber-cyan hover:opacity-80 transition-opacity"
          >
            <Compass className="h-8 w-8 text-cyber-cyan animate-pulse-neon" strokeWidth={1.5} />
            <div>
              <span className="block text-white text-glow">Indiana Archaeologist <span className="text-cyber-cyan">GPT</span></span>
              <span className="text-xs font-sans tracking-wide text-cyber-cyan/80">Presented by <a href="https://aiwebtools.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">AiWebTools.Ai</a></span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="https://chatgpt.com/g/g-oQg0mRBWy-indiana-archaeologist-gpt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cyber-button"
          >
            Use Indiana Archaeologist GPT Now
          </a>
          <a href="#faq" className="text-white hover:text-cyber-cyan transition-colors">FAQ</a>
          <a href="#disclaimer" className="text-white hover:text-cyber-cyan transition-colors">Disclaimer</a>
          <a 
            href="http://www.aiwebtools.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-cyber-cyan transition-colors"
          >
            More AI Tools
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-cyber-cyan focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden py-4 bg-cyber-black/95 backdrop-blur-lg border-t border-white/10 animate-slide-in-bottom">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a 
              href="https://chatgpt.com/g/g-oQg0mRBWy-indiana-archaeologist-gpt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cyber-button-primary w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Use Indiana Archaeologist GPT Now
            </a>
            <a 
              href="#faq" 
              className="text-white hover:text-cyber-cyan transition-colors py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="#disclaimer" 
              className="text-white hover:text-cyber-cyan transition-colors py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Disclaimer
            </a>
            <a 
              href="http://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-cyber-cyan transition-colors py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              More AI Tools
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
