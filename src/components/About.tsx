
import { Users, Heart, Target, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-aefem-purple mb-6">
            Sobre a AEFEM
          </h2>
          <div className="w-24 h-1 gradient-aefem mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mais do que uma organização, a AEFEM é um movimento de transformação 
            que acredita no poder das mulheres para mudar o mundo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-aefem-purple mb-6">
              A Nossa Missão
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              Formar, acompanhar e inspirar mulheres em situação de vulnerabilidade 
              social, económica e pessoal, capacitando-as para a autonomia através 
              da educação técnica, empreendedorismo e redes de apoio solidário.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Fundada pela artista e activista moçambicana Liloca (Luísa Zélia), 
              a AEFEM nasceu da convicção de que cada mulher empoderada multiplica 
              o impacto positivo na sua família, comunidade e nação.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 text-aefem-pink mx-auto mb-4" />
              <h4 className="font-bold text-aefem-purple mb-2">Comunidade</h4>
              <p className="text-sm text-gray-600">Criamos redes de apoio solidário</p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <Heart className="w-12 h-12 text-aefem-pink mx-auto mb-4" />
              <h4 className="font-bold text-aefem-purple mb-2">Solidariedade</h4>
              <p className="text-sm text-gray-600">Apoio mútuo e crescimento conjunto</p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <Target className="w-12 h-12 text-aefem-pink mx-auto mb-4" />
              <h4 className="font-bold text-aefem-purple mb-2">Autonomia</h4>
              <p className="text-sm text-gray-600">Independência económica e pessoal</p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <Lightbulb className="w-12 h-12 text-aefem-pink mx-auto mb-4" />
              <h4 className="font-bold text-aefem-purple mb-2">Inovação</h4>
              <p className="text-sm text-gray-600">Soluções criativas para desafios reais</p>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-pink-50 to-purple-50 p-12 rounded-3xl">
          <blockquote className="text-xl md:text-2xl font-bold text-aefem-purple mb-6 italic">
            "Mais do que uma organização, a AEFEM é um movimento."
          </blockquote>
          <p className="text-base text-gray-700 max-w-2xl mx-auto">
            Acreditamos que quando uma mulher é empoderada, ela transforma não apenas 
            a sua vida, mas toda a comunidade ao seu redor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
