
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const InstitutionalVideo = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-aefem-purple mb-8">
            O Nosso Impacto
          </h2>
          
          <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
            <img 
              src="/lovable-uploads/11d0bacb-e9fb-4482-8903-9a96eb8f67ae.png"
              alt="Vídeo Institucional AEFEM"
              className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            
            {/* Overlay with play button */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-all duration-300 group-hover:bg-black/50">
              <Button 
                size="lg" 
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white rounded-full p-6 transition-all duration-300 group-hover:scale-110"
              >
                <Play className="w-8 h-8 ml-1" fill="currentColor" />
              </Button>
            </div>
            
            {/* Duration indicator */}
            <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
              2:00
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed">
              "Conheça o impacto da AEFEM na vida de centenas de mulheres em Moçambique: 
              histórias reais de superação, capacitação e solidariedade. Este vídeo institucional 
              resume a nossa missão em 2 minutos."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstitutionalVideo;
