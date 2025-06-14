
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 gradient-aefem opacity-90"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('/lovable-uploads/5811f023-66fa-475f-bc39-6da20ea9d0f7.png')"
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="animate-fade-in-up max-w-5xl mx-auto">
          <Heart className="w-20 h-20 mx-auto mb-8 text-white drop-shadow-lg" />
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight drop-shadow-lg">
            Formar uma mulher é<br />
            <span className="text-yellow-300">formar uma nação</span>
          </h1>
          
          <p className="text-xl md:text-3xl mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-md font-light">
            A AEFEM capacita mulheres moçambicanas através da educação técnica, 
            empreendedorismo e solidariedade, criando caminhos para a autonomia e dignidade.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <Button 
              size="lg" 
              className="bg-white text-aefem-purple hover:bg-gray-100 text-xl px-12 py-8 rounded-full font-bold shadow-2xl transform hover:scale-110 transition-all duration-300 border-4 border-white"
            >
              Junta-te ao Movimento
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-4 border-white text-white hover:bg-white hover:text-aefem-purple text-xl px-12 py-8 rounded-full font-bold shadow-2xl transform hover:scale-110 transition-all duration-300 backdrop-blur-sm"
            >
              Conhece a Nossa História
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-20 bg-white rounded-full opacity-60"></div>
      </div>
    </section>
  );
};

export default Hero;
