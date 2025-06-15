
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import News from "@/components/News";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <div id="sobre">
        <About />
      </div>
      <div id="programas">
        {/* Seção de programas será adicionada aqui quando criada */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-aefem-purple mb-8">Nossos Programas</h2>
            <p className="text-gray-600">Esta seção será desenvolvida em breve com nossos programas principais.</p>
          </div>
        </div>
      </div>
      <div id="publicacoes">
        <News />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
