
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria João Silva",
      course: "Corte e Costura",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      testimony: "A AEFEM mudou a minha vida. Hoje tenho o meu próprio atelier e sustento a minha família com dignidade. Mais que técnicas, aprendi a acreditar em mim.",
      impact: "Criou 3 postos de trabalho"
    },
    {
      name: "Beatriz Mamudo",
      course: "Culinária",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      testimony: "O programa de culinária não me ensinou apenas a cozinhar, mas a gerir um negócio. Hoje tenho uma empresa de catering que emprega 5 mulheres da minha comunidade.",
      impact: "Faturação mensal de 50.000 MT"
    },
    {
      name: "Esperança Mondlane",
      course: "Maquilhagem",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=face",
      testimony: "Descobri a minha paixão pela maquilhagem na AEFEM. Hoje trabalho com noivas e artistas, e a minha autoestima cresceu junto com o meu negócio.",
      impact: "Mais de 200 clientes atendidas"
    }
  ];

  return (
    <section id="testemunhos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-aefem-purple mb-6">
            Histórias de Transformação
          </h2>
          <div className="w-24 h-1 gradient-aefem mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            As vozes das mulheres que transformaram as suas vidas através da AEFEM 
            são a nossa maior inspiração e motivação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-pink-50 to-purple-50 overflow-hidden">
              <CardContent className="p-8">
                <Quote className="w-8 h-8 text-aefem-pink mb-4 opacity-60" />
                
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div className="ml-4">
                    <h4 className="font-bold text-aefem-purple text-lg">{testimonial.name}</h4>
                    <p className="text-aefem-pink font-medium">{testimonial.course}</p>
                  </div>
                </div>

                <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.testimony}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <div className="text-sm font-semibold text-aefem-purple">
                    {testimonial.impact}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-aefem-pink to-purple-600 text-white p-12 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">
              Junta-te às Centenas de Mulheres Transformadas
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Cada história é única, mas todas partilham o mesmo denominador: 
              a coragem de acreditar numa vida melhor.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="opacity-90">Taxa de Sucesso</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">87%</div>
                <div className="opacity-90">Criam Negócio Próprio</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="opacity-90">Aumentam Autoestima</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
