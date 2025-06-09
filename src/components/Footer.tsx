
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contacto" className="bg-aefem-purple text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* AEFEM Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/3eea07a0-a974-46e3-8004-f4cdd61c758f.png" 
                alt="AEFEM Logo" 
                className="h-12 w-12 object-contain"
              />
              <span className="ml-3 text-2xl font-bold">AEFEM</span>
            </div>
            <p className="text-lg mb-6 opacity-90 leading-relaxed">
              Associação de Empoderamento Feminino - Formar, acompanhar e inspirar 
              mulheres para a autonomia através da educação técnica e empreendedorismo.
            </p>
            
            {/* Newsletter */}
            <div className="bg-white/10 p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Subscreve a Nossa Newsletter</h3>
              <p className="mb-4 opacity-90">Recebe novidades e histórias inspiradoras</p>
              <div className="flex gap-2">
                <Input 
                  placeholder="O teu email" 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                />
                <Button className="bg-aefem-pink hover:bg-pink-600 text-white">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-aefem-pink mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Morada</p>
                  <p className="opacity-90 text-sm">
                    Av. Samora Machel, Prédio Rubi<br />
                    Entrada Ara-Sul, 2.º Andar, N.º 7<br />
                    Maputo, Moçambique
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-aefem-pink" />
                <div>
                  <p className="font-medium">Telefones</p>
                  <p className="opacity-90 text-sm">+258 86 356 6904</p>
                  <p className="opacity-90 text-sm">+258 83 481 8265</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-aefem-pink" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="opacity-90 text-sm">info@aefem.co.mz</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Links Rápidos</h3>
            <nav className="space-y-3">
              <a href="#sobre" className="block hover:text-aefem-pink transition-colors">
                Sobre Nós
              </a>
              <a href="#programas" className="block hover:text-aefem-pink transition-colors">
                Programas
              </a>
              <a href="#testemunhos" className="block hover:text-aefem-pink transition-colors">
                Testemunhos
              </a>
              <a href="#equipa" className="block hover:text-aefem-pink transition-colors">
                Equipa
              </a>
              <a href="#" className="block hover:text-aefem-pink transition-colors">
                Como Apoiar
              </a>
              <a href="#" className="block hover:text-aefem-pink transition-colors">
                Voluntariado
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="opacity-90 text-sm mb-4 md:mb-0">
              © 2024 AEFEM - Associação de Empoderamento Feminino. Todos os direitos reservados.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-aefem-pink transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-aefem-pink transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-aefem-pink transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
