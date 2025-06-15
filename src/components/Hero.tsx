
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/lovable-uploads/2639acf1-b534-470a-a7b0-bbf8cd0f5c8f.png')"
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="animate-fade-in-up max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight drop-shadow-2xl">
            Empoderar Mulheres,
            <br />
            <span className="text-aefem-pink">Transformar Vidas</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-light opacity-90">
            Juntas construímos um futuro onde cada mulher moçambicana 
            tem acesso à educação, oportunidades e dignidade.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <Button 
              size="lg" 
              onClick={() => navigate('/cadastro')}
              className="bg-aefem-pink hover:bg-aefem-purple text-white text-lg px-10 py-6 rounded-full font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 min-w-[200px]"
            >
              Junta-te a Nós
              <ArrowRight className="ml-3 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-aefem-purple text-lg px-10 py-6 rounded-full font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm min-w-[200px]"
            >
              Saber Mais
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-white/60 rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
