
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    // Se estamos na página inicial, fazer scroll para a seção
    if (window.location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Se não estamos na página inicial, navegar para lá e depois fazer scroll
      window.location.href = `/#${sectionId}`;
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Link para página inicial */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/3eea07a0-a974-46e3-8004-f4cdd61c758f.png" 
              alt="AEFEM Logo" 
              className="h-12 w-12 object-contain"
            />
            <span className="ml-3 text-2xl font-bold text-aefem-purple">AEFEM</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('sobre')} 
              className="text-aefem-purple hover:text-aefem-pink transition-colors font-medium"
            >
              Sobre Nós
            </button>
            <button 
              onClick={() => scrollToSection('programas')} 
              className="text-aefem-purple hover:text-aefem-pink transition-colors font-medium"
            >
              Programas
            </button>
            <button 
              onClick={() => scrollToSection('publicacoes')} 
              className="text-aefem-purple hover:text-aefem-pink transition-colors font-medium"
            >
              Publicações
            </button>
            <Link to="/doacao">
              <Button className="bg-aefem-pink hover:bg-aefem-purple text-white rounded-full px-6">
                Apoiar
              </Button>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-aefem-purple"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('sobre')} 
                className="text-aefem-purple hover:text-aefem-pink transition-colors font-medium text-left"
              >
                Sobre Nós
              </button>
              <button 
                onClick={() => scrollToSection('programas')} 
                className="text-aefem-purple hover:text-aefem-pink transition-colors font-medium text-left"
              >
                Programas
              </button>
              <button 
                onClick={() => scrollToSection('publicacoes')} 
                className="text-aefem-purple hover:text-aefem-pink transition-colors font-medium text-left"
              >
                Publicações
              </button>
              <Link to="/doacao" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-aefem-pink hover:bg-aefem-purple text-white rounded-full px-6 w-fit">
                  Apoiar
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
