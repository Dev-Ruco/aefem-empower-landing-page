
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import News from "@/components/News";
import About from "@/components/About";
import Programs from "@/components/Programs";
import InstitutionalVideo from "@/components/InstitutionalVideo";
import Testimonials from "@/components/Testimonials";
import Pillars from "@/components/Pillars";
import Team from "@/components/Team";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <News />
      <About />
      <Programs />
      <InstitutionalVideo />
      <Testimonials />
      <Pillars />
      <Team />
      <Partners />
      <Footer />
    </div>
  );
};

export default Index;
