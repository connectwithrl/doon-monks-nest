import { Hero } from "@/components/Hero";
import { Facilities } from "@/components/Facilities";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Facilities />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
