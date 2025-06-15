
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSlideProps {
  title: string;
  description: string;
  backgroundImage: string;
  onLearnMore: () => void;
}

const HeroSlide = ({ title, description, backgroundImage, onLearnMore }: HeroSlideProps) => {
  return (
    <div className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background with opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: `url('${backgroundImage}')`
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="animate-fade-in-up max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight text-shadow-md">
            {title}
          </h1>
          
          <p className="text-sm md:text-base mb-8 max-w-3xl mx-auto leading-relaxed text-shadow font-light opacity-90 line-clamp-4">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={onLearnMore}
              className="bg-aefem-pink hover:bg-aefem-purple text-white text-base px-8 py-4 rounded-full font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 border-0"
            >
              Ler História Completa
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
