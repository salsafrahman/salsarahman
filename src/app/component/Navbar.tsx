import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Instagram, Linkedin, Ghost } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-[200] transition-all duration-300 ${scrolled ? 'bg-[#1A2634]/90 backdrop-blur-md py-4 shadow-lg border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tighter text-white z-50">
          Salsa <span className="text-[#FF8C9D]">Rahman</span>.
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
        </nav>

        <div className="hidden md:flex items-center gap-4 text-white/70">
           <a href="https://www.instagram.com/salsa46070?igsh=Zml0dW1lMXdwZzIz" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
           <a href="https://www.linkedin.com/in/salsarahman" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
           <a href="https://www.snapchat.com/add/zacha204" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Ghost className="w-5 h-5" /></a>
        </div>
      </div>
    </header>
  )
}