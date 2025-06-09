
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
        <div className="animate-fade-in-up">
          <Heart className="w-16 h-16 mx-auto mb-6 text-white" />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Formar uma mulher é<br />
            <span className="text-yellow-300">formar uma nação</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            A AEFEM capacita mulheres moçambicanas através da educação técnica, 
            empreendedorismo e solidariedade, criando caminhos para a autonomia e dignidade.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-aefem-purple hover:bg-gray-100 text-lg px-8 py-6 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Junta-te ao Movimento
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-aefem-purple text-lg px-8 py-6 rounded-full font-semibold"
            >
              Conhece a Nossa História
            </Button>
          </div>
        </div>
        
        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="animate-scale-in">
            <div className="text-4xl md:text-5xl font-bold text-yellow-300">1000</div>
            <div className="text-lg opacity-90">Mulheres a Impactar</div>
          </div>
          <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-4xl md:text-5xl font-bold text-yellow-300">200</div>
            <div className="text-lg opacity-90">Micronegócios a Criar</div>
          </div>
          <div className="animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-4xl md:text-5xl font-bold text-yellow-300">3</div>
            <div className="text-lg opacity-90">Anos de Missão</div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-white rounded-full opacity-50"></div>
      </div>
    </section>
  );
};

export default Hero;
