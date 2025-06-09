
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import News from "@/components/News";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Testimonials from "@/components/Testimonials";
import Pillars from "@/components/Pillars";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <News />
      <About />
      <Programs />
      <Testimonials />
      <Pillars />
      <Team />
      <Footer />
    </div>
  );
};

export default Index;
