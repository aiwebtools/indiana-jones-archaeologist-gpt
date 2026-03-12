
import React, { useState, useEffect, useCallback } from 'react';
import { Compass, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  const toggleMenu = useCallback(() => setIsMenuOpen(prev => !prev), []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-2 sm:py-3 bg-cyber-black/80 backdrop-blur-lg'
          : 'py-3 sm:py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center min-w-0">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-xl sm:text-2xl font-display font-bold text-cyber-cyan hover:opacity-80 transition-opacity min-w-0"
            onClick={closeMenu}
          >
            <Compass className="h-6 w-6 sm:h-8 sm:w-8 text-cyber-cyan animate-pulse-neon flex-shrink-0" strokeWidth={1.5} />
            <div className="min-w-0">
              <span className="block text-white text-glow text-sm sm:text-base md:text-lg lg:text-xl truncate">Indiana Archaeologist <span className="text-cyber-cyan">GPT</span></span>
              <span className="text-[10px] sm:text-xs font-sans tracking-wide text-cyber-cyan/80 truncate block">Presented by <a href="https://aiwebtools.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" onClick={e => e.stopPropagation()}>AiWebTools.Ai</a></span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          <a 
            href="https://chatgpt.com/g/g-oQg0mRBWy-indiana-archaeologist-gpt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cyber-button whitespace-nowrap text-sm xl:text-base"
          >
            Use Indiana Archaeologist GPT Now
          </a>
          <a href="#faq" className="text-white hover:text-cyber-cyan transition-colors whitespace-nowrap">FAQ</a>
          <a href="#disclaimer" className="text-white hover:text-cyber-cyan transition-colors whitespace-nowrap">Disclaimer</a>
          <a 
            href="https://aiwebtools.lovable.app/?via=aiwebtools" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-cyber-cyan transition-colors whitespace-nowrap"
          >
            More AI Tools
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white hover:text-cyber-cyan focus:outline-none p-2 -mr-2 touch-manipulation"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation - CSS transition for instant feel */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-200 ease-out ${
          isMenuOpen 
            ? 'max-h-[80vh] opacity-100' 
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-cyber-black/95 backdrop-blur-lg border-t border-white/10">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <a 
              href="https://chatgpt.com/g/g-oQg0mRBWy-indiana-archaeologist-gpt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cyber-button-primary w-full text-center py-3 text-base touch-manipulation"
              onClick={closeMenu}
            >
              Use Indiana Archaeologist GPT Now
            </a>
            <a 
              href="#faq" 
              className="text-white hover:text-cyber-cyan active:text-cyber-cyan transition-colors py-3 px-4 text-base touch-manipulation"
              onClick={closeMenu}
            >
              FAQ
            </a>
            <a 
              href="#disclaimer" 
              className="text-white hover:text-cyber-cyan active:text-cyber-cyan transition-colors py-3 px-4 text-base touch-manipulation"
              onClick={closeMenu}
            >
              Disclaimer
            </a>
            <a 
              href="https://aiwebtools.lovable.app/?via=aiwebtools" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-cyber-cyan active:text-cyber-cyan transition-colors py-3 px-4 text-base touch-manipulation"
              onClick={closeMenu}
            >
              More AI Tools
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
