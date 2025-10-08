import { Wifi, Droplets, Zap, Coffee, Shield, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

const facilities = [
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description: "Stay connected with reliable, fast internet throughout the hostel",
  },
  {
    icon: Droplets,
    title: "Clean Water",
    description: "24/7 access to purified drinking water and hot water facilities",
  },
  {
    icon: Zap,
    title: "Power Backup",
    description: "Uninterrupted electricity supply with backup generators",
  },
  {
    icon: Coffee,
    title: "Common Areas",
    description: "Cozy spaces to relax, work, or socialize with fellow travelers",
  },
  {
    icon: Shield,
    title: "Secure Storage",
    description: "Safe lockers and secure storage for your valuables",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description: "Centrally located with easy access to Dehradun's attractions",
  },
];

export const Facilities = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Modern Facilities for Your Comfort
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need for a comfortable and memorable stay
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/50 backdrop-blur-sm"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 shadow-soft">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{facility.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {facility.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
