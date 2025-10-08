import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Ready to Move In?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contact us to book your room and start your college journey with us
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="p-8 text-center hover:shadow-elegant transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-muted-foreground">
              Dehradun, Uttarakhand<br />
              India
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-elegant transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Phone className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-muted-foreground">
              +91 8439606941
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-elegant transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground">
              info@doonmonks.com
            </p>
          </Card>
        </div>

        <Card className="p-12 text-center bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground shadow-elegant">
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Start Your College Journey With Us!
          </h3>
          <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
            Affordable, comfortable, and study-friendly accommodation for students. 
            Book your room today and join our student community!
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            onClick={() => {
                  window.open(
                    "https://wa.me/918439606941?text=Hi, I’d like to book a stay at DoonMonks.”",
                    "_blank"
                    );
                }}
          >
            Book Now
          </Button>
        </Card>
      </div>
    </section>
  );
};
