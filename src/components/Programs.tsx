
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Flower, Scissors, ChefHat, Palette, Users, Mic, Sparkles } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: Flower,
      title: "Arte Floral",
      description: "Aprende a criar arranjos florais únicos e desenvolve competências para um negócio próprio no sector da decoração.",
      duration: "3 meses",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Scissors,
      title: "Corte e Costura",
      description: "Domina técnicas de modelagem, corte e costura para criar peças únicas e estabelecer o teu atelier.",
      duration: "6 meses",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: ChefHat,
      title: "Culinária",
      description: "Desenvolve competências culinárias e aprende a gerir um negócio de alimentação sustentável.",
      duration: "4 meses",
      color: "from-orange-500 to-pink-500"
    },
    {
      icon: Palette,
      title: "Maquilhagem",
      description: "Técnicas profissionais de maquilhagem para eventos, casamentos e ensaios fotográficos.",
      duration: "3 meses",
      color: "from-pink-500 to-purple-500"
    },
    {
      icon: Sparkles,
      title: "Prótese Capilar",
      description: "Especialização em técnicas de extensões, perucas e tratamentos capilares avançados.",
      duration: "5 meses",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Mic,
      title: "Mestria de Cerimónias",
      description: "Desenvolve competências de comunicação e liderança para conduzir eventos e cerimónias.",
      duration: "2 meses",
      color: "from-teal-500 to-blue-500"
    }
  ];

  return (
    <section id="programas" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-aefem-purple mb-6">
            Programas & Cursos Técnicos
          </h2>
          <div className="w-24 h-1 gradient-aefem mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos formação técnica especializada que capacita mulheres para o 
            empreendedorismo e autonomia económica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden hover:-translate-y-2"
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${program.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <program.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-aefem-purple group-hover:text-aefem-pink transition-colors">
                  {program.title}
                </CardTitle>
                <div className="text-sm text-aefem-pink font-semibold bg-pink-50 rounded-full px-3 py-1 inline-block">
                  {program.duration}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed text-center">
                  {program.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-aefem-purple mb-4">
              Metodologia AEFEM
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Cada programa combina formação técnica, desenvolvimento pessoal e 
              acompanhamento empresarial para garantir o sucesso das nossas formandas.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-aefem-pink mb-2">1</div>
                <div className="font-semibold text-aefem-purple">Formação Técnica</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-aefem-pink mb-2">2</div>
                <div className="font-semibold text-aefem-purple">Desenvolvimento Pessoal</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-aefem-pink mb-2">3</div>
                <div className="font-semibold text-aefem-purple">Acompanhamento Empresarial</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
