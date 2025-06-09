
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import LanguageSelector from "./LanguageSelector";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/3eea07a0-a974-46e3-8004-f4cdd61c758f.png" 
              alt="AEFEM Logo" 
              className="h-12 w-12 object-contain"
            />
            <span className="ml-3 text-2xl font-bold text-aefem-purple">AEFEM</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#noticias" className="text-aefem-purple hover:text-aefem-pink transition-colors font-medium">
              Notícias
            </a>
            <a href="#sobre" className="text-aefem-purple hover:text-aefem-pink transition-colors font-medium">
              Sobre Nós
            </a>
            <a href="#programas" className="text-aefem-purple hover:text-aefem-pink transition-colors font-medium">
              Programas
            </a>
            <a href="#testemunhos" className="text-aefem-purple hover:text-aefem-pink transition-colors font-medium">
              Testemunhos
            </a>
            <a href="#equipa" className="text-aefem-purple hover:text-aefem-pink transition-colors font-medium">
              Equipa
            </a>
            <a href="#contacto" className="text-aefem-purple hover:text-aefem-pink transition-colors font-medium">
              Contacto
            </a>
            <LanguageSelector />
            <Button className="bg-aefem-pink hover:bg-aefem-purple text-white rounded-full px-6">
              Apoiar
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSelector />
            <button
              className="p-2 text-aefem-purple"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#noticias" className="text-aefem-purple hover:text-aefem-pink transition-colors font-medium">
                Notícias
              </a>
              <a href="#sobre" className="text-aefem-purple hover:text-aefem-pink transition-colors font-medium">
                Sobre Nós
              </a>
              <a href="#programas" className="text-aefem-purple hover:text-aefem-pink transition-colors font-medium">
                Programas
              </a>
              <a href="#testemunhos" className="text-aefem-purple hover:text-aefem-pink transition-colors font-medium">
                Testemunhos
              </a>
              <a href="#equipa" className="text-aefem-purple hover:text-aefem-pink transition-colors font-medium">
                Equipa
              </a>
              <a href="#contacto" className="text-aefem-purple hover:text-aefem-pink transition-colors font-medium">
                Contacto
              </a>
              <Button className="bg-aefem-pink hover:bg-aefem-purple text-white rounded-full px-6 w-fit">
                Apoiar
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
