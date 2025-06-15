
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useNavigate } from "react-router-dom";
import HeroSlide from "./HeroSlide";

const Hero = () => {
  const navigate = useNavigate();

  const slides = [
    {
      id: 1,
      title: "AEFEM Leva Bolsas de formação e Apoio Solidário a Mulheres Com VIH em Maputo",
      description: "A Associação de Empoderamento Feminino (AEFEM), liderada pela artista e activista Liloca, realizou no domingo, 8 de Junho, uma visita solidária à Associação Hixikanwe, no bairro de Malhazine, em Maputo. A iniciativa teve como objectivo apoiar mulheres em situação de vulnerabilidade, particularmente afectadas pelo VIH, através da entrega de bens alimentares e da atribuição de bolsas de formação profissional.",
      backgroundImage: "/lovable-uploads/ae3c2206-a4ca-42f9-89ff-82f026afaba4.png",
      action: () => navigate('/historia-completa')
    },
    {
      id: 2,
      title: "Empoderar Mulheres, Transformar Vidas",
      description: "Juntas construímos um futuro onde cada mulher moçambicana tem acesso à educação, oportunidades e dignidade. A nossa missão é formar mil mulheres em três anos e criar duzentos micronegócios sustentáveis.",
      backgroundImage: "/lovable-uploads/2639acf1-b534-470a-a7b0-bbf8cd0f5c8f.png",
      action: () => navigate('/cadastro')
    }
  ];

  return (
    <section className="relative">
      <Carousel className="w-full">
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <HeroSlide
                title={slide.title}
                description={slide.description}
                backgroundImage={slide.backgroundImage}
                onLearnMore={slide.action}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </section>
  );
};

export default Hero;
