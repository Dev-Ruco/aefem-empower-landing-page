
import { GraduationCap, TrendingUp, HandHeart, Users, Equal } from "lucide-react";

const Pillars = () => {
  const pillars = [
    {
      icon: GraduationCap,
      title: "Formação",
      description: "Educação técnica de qualidade que prepara mulheres para o mercado de trabalho e empreendedorismo.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "Empreendedorismo",
      description: "Apoio na criação e desenvolvimento de micronegócios sustentáveis e rentáveis.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: HandHeart,
      title: "Solidariedade",
      description: "Criação de redes de apoio mútuo entre mulheres, fortalecendo laços comunitários.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Users,
      title: "Rede de Apoio",
      description: "Acompanhamento contínuo e mentoria para garantir o sucesso a longo prazo.",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: Equal,
      title: "Igualdade de Oportunidades",
      description: "Promovemos acesso igualitário à educação e oportunidades económicas para todas as mulheres.",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-aefem-purple mb-6">
            Os Nossos Pilares e Visão
          </h2>
          <div className="w-24 h-1 gradient-aefem mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Os cinco pilares fundamentais que sustentam toda a nossa missão de 
            empoderamento feminino e transformação social.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="group text-center hover:scale-105 transition-all duration-300"
            >
              <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${pillar.color} flex items-center justify-center shadow-lg group-hover:shadow-xl`}>
                <pillar.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-aefem-purple mb-4 group-hover:text-aefem-pink transition-colors">
                {pillar.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-aefem-purple to-purple-600 text-white p-12 rounded-3xl text-center">
          <h3 className="text-2xl font-bold mb-6">
            A Nossa Visão para 2027
          </h3>
          <p className="text-lg mb-8 opacity-90 max-w-3xl mx-auto">
            Ser a organização de referência em Moçambique no empoderamento feminino, 
            tendo impactado positivamente mil mulheres e criado duzentos micronegócios sustentáveis.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-white/20 rounded-2xl p-6">
              <div className="text-3xl font-bold mb-2">2024-2027</div>
              <div className="text-lg">Período de Implementação</div>
            </div>
            <div className="bg-white/20 rounded-2xl p-6">
              <div className="text-3xl font-bold mb-2">5 Províncias</div>
              <div className="text-lg">Expansão Nacional</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pillars;
