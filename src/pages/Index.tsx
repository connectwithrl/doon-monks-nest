import { Hero } from "@/components/Hero";
import { Facilities } from "@/components/Facilities";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import WhatsappButton  from "@/components/WhatsappButton";
import { CommunityBanner } from "@/components/communitybanner.tsx";

const Index = () => {
  return (
    <div className="min-h-screen">
        <CommunityBanner />
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
