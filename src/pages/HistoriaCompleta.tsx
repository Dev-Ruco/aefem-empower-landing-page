
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HistoriaCompleta = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Header />
      
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-8 text-aefem-purple hover:text-aefem-pink"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Voltar ao Início
          </Button>

          <div className="mb-8">
            <img 
              src="/lovable-uploads/ae3c2206-a4ca-42f9-89ff-82f026afaba4.png" 
              alt="AEFEM em acção solidária"
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>8 de Junho, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Bairro de Malhazine, Maputo</span>
            </div>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-aefem-purple mb-6 leading-tight">
            AEFEM Leva Bolsas de formação e Apoio Solidário a Mulheres Com VIH em Maputo
          </h1>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-lg text-gray-600 mb-6 font-medium">
              A Associação de Empoderamento Feminino (AEFEM), liderada pela artista e activista Liloca, realizou no domingo, 8 de Junho, uma visita solidária à Associação Hixikanwe, no bairro de Malhazine, em Maputo.
            </p>

            <p className="mb-4">
              A iniciativa teve como objectivo apoiar mulheres em situação de vulnerabilidade, particularmente afectadas pelo VIH, através da entrega de bens alimentares e da atribuição de bolsas de formação profissional.
            </p>

            <p className="mb-4">
              No total, foram entregues sete bolsas de estudo para cursos técnicos em áreas como arte floral, corte e costura, culinária, maquilhagem, prótese capilar, mestria de cerimónias e picotagem de cabelos. Durante a actividade, também foram distribuídos cabazes de produtos de primeira necessidade, com especial atenção às mulheres e crianças vivendo com o VIH.
            </p>

            <blockquote className="border-l-4 border-aefem-pink pl-6 py-4 bg-gray-50 rounded-r-lg my-6">
              <p className="text-lg italic text-aefem-purple font-medium">
                "Esta visita não é apenas simbólica. Viemos trazer ajuda imediata, mas sobretudo semear futuro. Queremos que estas sementes se espalhem por todo o país"
              </p>
              <cite className="text-sm text-gray-600 not-italic">— Liloca, Presidente da AEFEM</cite>
            </blockquote>

            <p className="mb-4">
              No seu discurso, Liloca sublinhou que o propósito da AEFEM é transformar vidas através do conhecimento e da criação de oportunidades de rendimento. Acrescentou ainda que a associação pretende alcançar mil mulheres em três anos, apoiar a criação de duzentos micronegócios e contribuir para a geração de emprego e aumento da autonomia económica das mulheres em todo o território nacional.
            </p>

            <p className="mb-4 font-semibold text-aefem-purple">
              "Formar uma mulher é formar uma nação."
            </p>

            <p className="mb-4">
              A AEFEM aposta numa abordagem de continuidade, criando pontes entre as mulheres formadas e outras que já venceram nos mesmos ramos, promovendo a partilha de experiências, contactos e redes de apoio.
            </p>

            <h3 className="text-xl font-bold text-aefem-purple mb-4 mt-8">Sobre a Associação Hixikanwe</h3>

            <p className="mb-4">
              A visita decorreu na sede da Associação Hixikanwe, uma organização não governamental fundada por mulheres que vivem com o VIH. Registada oficialmente em 2009, a Hixikanwe beneficia actualmente mais de quatro mil pessoas e actua em áreas como prevenção do VIH/SIDA, saúde sexual e reprodutiva, apoio psicossocial, nutrição, educação pré-escolar, rastreamento de doentes em TARV, e empoderamento económico.
            </p>

            <blockquote className="border-l-4 border-aefem-pink pl-6 py-4 bg-gray-50 rounded-r-lg my-6">
              <p className="text-lg italic text-aefem-purple font-medium">
                "A tua presença, o teu gesto e o teu carinho renovam em nós a esperança. Esta é a tua casa, Liloca. O teu exemplo fica marcado em cada coração aqui presente."
              </p>
              <cite className="text-sm text-gray-600 not-italic">— Judite de Jesus, Presidente da Associação Hixikanwe</cite>
            </blockquote>

            <p className="mb-4">
              A presidente da associação, Judite de Jesus, agradeceu a presença da AEFEM, sublinhando a importância do gesto. "A Hixikanwe nasceu da vontade de mulheres que vivem com o VIH se apoiarem mutuamente. Hoje beneficiamos mais de quatro mil pessoas em diversas frentes – da saúde ao empreendedorismo. E visitas como esta lembram-nos que não estamos sozinhas."
            </p>

            <p className="mb-4">
              A acção contou com a presença de representantes do Ministério da Justiça, Assuntos Constitucionais e Religiosos, do Conselho Municipal da Cidade de Maputo e de várias lideranças comunitárias.
            </p>

            <p className="mb-4">
              Durante o encontro, a presidente da AEFEM conversou com beneficiárias da Hixikanwe, escutou as suas histórias de vida e conheceu de perto o trabalho desenvolvido pela associação. O momento foi marcado por gestos de partilha, dança, emoção e pela entrega solidária de alimentos de primeira necessidade, envolvendo todas as mulheres presentes num ambiente de empatia e esperança.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Button 
              size="lg" 
              onClick={() => navigate('/cadastro')}
              className="bg-aefem-pink hover:bg-aefem-purple text-white px-8 py-4 rounded-full font-bold"
            >
              Junta-te à Nossa Missão
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default HistoriaCompleta;
