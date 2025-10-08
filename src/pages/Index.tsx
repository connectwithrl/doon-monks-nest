import { Hero } from "@/components/Hero";
import { Facilities } from "@/components/Facilities";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import WhatsappButton  from "@/components/WhatsappButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Facilities />
        <WhatsappButton />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
