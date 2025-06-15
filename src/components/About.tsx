import { Users, Heart, Target, Lightbulb, Scale, Shield, MessageCircle, Network, HandHeart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Quem Somos */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-aefem-purple mb-6">
            Quem Somos
          </h2>
          <div className="w-24 h-1 gradient-aefem mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A Associação do Empoderamento Feminino (AEFEM) é uma organização da sociedade civil, de âmbito nacional, 
            sem fins lucrativos e dotada de personalidade jurídica própria, comprometida com a promoção da igualdade 
            de género e o fortalecimento do papel das mulheres em Moçambique. Regemo-nos por princípios de legalidade, 
            transparência, integridade e boa governação, procurando servir de ponte entre as comunidades, as instituições 
            e a sociedade em geral, para um desenvolvimento mais justo, inclusivo e sustentável.
          </p>
        </div>

        {/* A Nossa História */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-aefem-purple mb-8 text-center">
            A Nossa História
          </h3>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-base text-gray-700 leading-relaxed">
                A Associação do Empoderamento Feminino (AEFEM) nasceu da visão e determinação da artista e 
                activista Luísa Maiaze, conhecida no panorama cultural moçambicano como <strong>Liloca</strong>.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                Reconhecida pelo seu percurso artístico marcado por canções que exaltam a força, a dignidade 
                e a resiliência da mulher moçambicana, Liloca conquistou ao longo dos anos um vasto público, 
                sobretudo entre mulheres em contextos de maior vulnerabilidade, que se reconhecem e se inspiram 
                nas suas mensagens.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                Consciente do impacto da sua influência e movida pelo desejo de transformar admiração em 
                acção concreta, Liloca reuniu um grupo de mulheres de diversas origens e áreas de actuação 
                para fundar a AEFEM. Assim, a Associação consolidou-se como um espaço de partilha, solidariedade 
                e mobilização de recursos, com o propósito de apoiar, capacitar e criar oportunidades reais 
                para mulheres e raparigas que, por diversos factores, permanecem afastadas de direitos e serviços essenciais.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                Desde então, a AEFEM tem expandido a sua actuação, promovendo projectos e programas que visam 
                a autonomia feminina, a liderança comunitária e a defesa intransigente dos direitos humanos, 
                sempre fiel ao espírito de união, alegria e esperança que Liloca personifica tanto na música como no activismo.
              </p>
            </div>
            
            <div className="order-first md:order-last">
              <img 
                src="/lovable-uploads/21931972-f47d-4995-b9d1-f2257ae2fb94.png"
                alt="Liloca - Fundadora da AEFEM"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* A Nossa Missão */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-aefem-purple mb-8 text-center">
            A Nossa Missão
          </h3>
          
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-8 md:p-12 rounded-3xl">
            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              A missão da AEFEM é promover o empoderamento social, económico e político das mulheres moçambicanas, 
              assegurando a defesa dos seus direitos fundamentais e contribuindo activamente para a eliminação de 
              todas as formas de violência e discriminação baseadas no género. Procuramos, através de programas de 
              capacitação, liderança comunitária, empreendedorismo, advocacia e apoio psicossocial, reforçar as 
              capacidades individuais e colectivas das mulheres, fomentando a sua participação efectiva nos processos 
              de tomada de decisão a nível local e nacional.
            </p>
          </div>
        </div>

        {/* Pilares Estratégicos */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-aefem-purple mb-12 text-center">
            Pilares Estratégicos
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-aefem-pink to-aefem-purple rounded-xl flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-aefem-purple">Capacitação e Liderança Feminina</h4>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Desenvolvimento de programas de formação, empreendedorismo e liderança comunitária, visando dotar 
                as mulheres de competências para actuarem como agentes de mudança nas suas comunidades.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-aefem-pink to-aefem-purple rounded-xl flex items-center justify-center mr-4">
                    <Scale className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-aefem-purple">Advocacia e Defesa de Direitos</h4>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Promoção e defesa activa dos direitos das mulheres e raparigas, com enfoque no combate 
                à violência baseada no género e outras formas de abuso e discriminação.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-aefem-pink to-aefem-purple rounded-xl flex items-center justify-center mr-4">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-aefem-purple">Sensibilização e Mobilização Social</h4>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Implementação de campanhas de sensibilização e educação para a cidadania, estimulando o debate 
                público sobre a igualdade de género e o empoderamento feminino como factores centrais para o desenvolvimento sustentável.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-aefem-pink to-aefem-purple rounded-xl flex items-center justify-center mr-4">
                    <Network className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-aefem-purple">Redes e Parcerias Estratégicas</h4>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Facilitação de espaços de diálogo, intercâmbio de experiências e construção de alianças entre 
                mulheres líderes, jovens e instituições parceiras, consolidando uma rede de apoio mútuo e acção coordenada.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
              <div className="mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-aefem-pink to-aefem-purple rounded-xl flex items-center justify-center mr-4">
                    <HandHeart className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-aefem-purple">Assistência e Aconselhamento</h4>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Prestação de apoio psicossocial, jurídico e social a vítimas de violações de direitos humanos, 
                com enfoque na reabilitação e reinserção digna, em articulação com serviços públicos e organizações afins.
              </p>
            </div>
          </div>

          {/* Botão Junte-se a Nós */}
          <div className="text-center">
            <Link to="/cadastro">
              <Button 
                size="lg" 
                className="bg-aefem-pink hover:bg-pink-600 text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Junte-se a Nós
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Nossos Valores */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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
            <Shield className="w-12 h-12 text-aefem-pink mx-auto mb-4" />
            <h4 className="font-bold text-aefem-purple mb-2">Integridade</h4>
            <p className="text-sm text-gray-600">Transparência e boa governação</p>
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
