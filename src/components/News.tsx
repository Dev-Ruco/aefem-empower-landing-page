
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const News = () => {
  const news = [
    {
      id: 1,
      title: "Liloca leva bolsas de formação e apoio solidário a mulheres com VIH em Malhazine",
      excerpt: "A Associação de Empoderamento Feminino (AEFEM), liderada pela artista e activista Liloca (Luísa Zélia), realizou no domingo, 8 de Junho, uma visita solidária à Associação Hixikanwe, no bairro de Malhazine, em Maputo.",
      image: "/lovable-uploads/11d0bacb-e9fb-4482-8903-9a96eb8f67ae.png",
      date: "8 de Junho, 2024"
    },
    {
      id: 2,
      title: "AEFEM lança programa de mentoria para jovens mulheres empreendedoras",
      excerpt: "Novo programa visa capacitar jovens mulheres com ferramentas práticas para o desenvolvimento de negócios sustentáveis, promovendo a independência económica através do empreendedorismo.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "15 de Maio, 2024"
    },
    {
      id: 3,
      title: "Formandas da AEFEM expõem criações em feira de talentos femininos em Maputo",
      excerpt: "Mulheres capacitadas pela AEFEM apresentaram os seus trabalhos em arte floral, costura e culinária numa feira que celebra o talento e a criatividade feminina moçambicana.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "22 de Abril, 2024"
    }
  ];

  return (
    <section id="noticias" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-aefem-purple mb-6">
            Últimas Notícias
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Acompanhe as nossas actividades e o impacto que estamos a criar na comunidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {news.map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <div className="relative overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-aefem-pink" />
                  <span className="text-sm font-medium text-aefem-purple">{article.date}</span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-aefem-purple mb-3 line-clamp-2 leading-tight">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
                <Button 
                  variant="ghost" 
                  className="text-aefem-pink hover:text-aefem-purple hover:bg-aefem-pink/10 p-0 h-auto font-semibold group"
                >
                  Ler mais
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-aefem-pink hover:bg-aefem-purple text-white px-8 py-3 rounded-full font-semibold"
          >
            Ver Todas as Actividades
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default News;
