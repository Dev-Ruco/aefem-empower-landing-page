
import { Card, CardContent } from "@/components/ui/card";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Liloca (Luísa Zélia)",
      role: "Presidente da AEFEM",
      description: "Artista, empreendedora social e activista pelo empoderamento da mulher. Fundadora da AEFEM, conduz a missão de formar e apoiar mulheres em situação de vulnerabilidade através da solidariedade activa e da capacitação técnica.",
      image: "/lovable-uploads/03203907-3715-4949-91c9-9758309c8855.png"
    },
    {
      id: 2,
      name: "Maria Santos",
      role: "Coordenadora de Programas",
      description: "Especialista em desenvolvimento comunitário com mais de 8 anos de experiência em projectos sociais. Responsável pela coordenação e implementação dos programas de formação técnica da AEFEM.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      name: "Ana Machel",
      role: "Responsável de Parcerias",
      description: "Gestora de relações institucionais com vasta experiência em mobilização de recursos e desenvolvimento de parcerias estratégicas para o sector social em Moçambique.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 4,
      name: "Rosa Mabunda",
      role: "Formadora Principal",
      description: "Especialista em formação técnica e empreendedorismo feminino. Lidera as sessões de capacitação em corte e costura, culinária e desenvolvimento de competências empresariais.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section id="equipa" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-aefem-purple mb-6">
            A Nossa Equipa
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça as mulheres dedicadas que tornam possível a missão da AEFEM
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {teamMembers.map((member) => (
                <CarouselItem key={member.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                    <div className="relative">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-aefem-purple mb-2">
                        {member.name}
                      </h3>
                      <p className="text-aefem-pink font-semibold mb-4">
                        {member.role}
                      </p>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {member.description}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Team;
