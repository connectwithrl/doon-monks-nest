import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-mountain.jpg";

export const Hero = () => {
    const scrollToFacilities = () => {
    const section = document.getElementById("facilities");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">


          {/* Background Image */}
          <div
              className="absolute inset-0 z-0"
              style={{
                  backgroundImage: `url(${heroImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
              }}
          >
              <div
                  className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/70"/>
          </div>

          {/* Content */}
          <div className="container relative z-10 px-4 py-20">
              <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
                  <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight">
                      Welcome to{" "}
                      <span
                          className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              The Doon Monks
            </span>
                  </h1>

                  <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                      Your perfect student hostel in Dehradun. Study, live, and grow in a peaceful environment designed
                      for college students.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                      <Button
                          size="lg"
                          className="text-lg px-8 py-6 shadow-elegant hover:shadow-2xl transition-all duration-300 hover:scale-105"
                          onClick={() => {
                              window.open(
                                  "https://wa.me/918439606941?text=Hi, I’d like to book a stay at DoonMonks.”",
                                  "_blank"
                              );
                          }}
                      >
                          Book Your Stay
                          <ArrowRight className="ml-2 h-5 w-5"/>
                      </Button>
                      <Button
                          size="lg"
                          variant="outline"
                          className="text-lg px-8 py-6 border-2 hover:bg-primary/10 transition-all duration-300"
                          onClick={scrollToFacilities}
                      >
                          Explore Facilities
                      </Button>
                  </div>
              </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
              <div className="w-6 h-10 rounded-full border-2 border-primary flex items-start justify-center p-2">
                  <div className="w-1 h-3 bg-primary rounded-full animate-pulse"/>
              </div>
          </div>
      </section>
  );
};
