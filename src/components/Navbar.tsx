
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <span className="font-display text-2xl text-restaurant-black">Savory</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-restaurant-gold transition-colors">About</a>
            <a href="#menu" className="text-gray-700 hover:text-restaurant-gold transition-colors">Menu</a>
            <a href="#hours" className="text-gray-700 hover:text-restaurant-gold transition-colors">Hours</a>
            <a href="#contact" className="text-gray-700 hover:text-restaurant-gold transition-colors">Contact</a>
            <Button className="bg-restaurant-gold text-white hover:bg-restaurant-black transition-colors">
              Reserve
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-restaurant-gold transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 pb-4">
              <a href="#about" className="text-gray-700 hover:text-restaurant-gold transition-colors">About</a>
              <a href="#menu" className="text-gray-700 hover:text-restaurant-gold transition-colors">Menu</a>
              <a href="#hours" className="text-gray-700 hover:text-restaurant-gold transition-colors">Hours</a>
              <a href="#contact" className="text-gray-700 hover:text-restaurant-gold transition-colors">Contact</a>
              <Button className="bg-restaurant-gold text-white hover:bg-restaurant-black transition-colors w-full">
                Reserve
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
