import { Wifi, Droplets, Zap, BookOpen, Shield, Users, Utensils, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

const facilities = [
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description: "Unlimited high-speed internet for online classes and research",
  },
  {
    icon: BookOpen,
    title: "Study Rooms",
    description: "Dedicated quiet study areas for focused learning and exam prep",
  },
  {
    icon: Zap,
    title: "24/7 Power Backup",
    description: "Never miss a class or deadline with uninterrupted electricity",
  },
  {
    icon: Droplets,
    title: "Clean Water",
    description: "24/7 purified drinking water and hot water for comfort",
  },
  {
    icon: Users,
    title: "Student Community",
    description: "Connect with fellow students in common areas and lounges",
  },
  {
    icon: Utensils,
    title: "Mess Facilities",
    description: "Affordable, hygienic meals with options for self-cooking",
  },
  {
    icon: Shield,
    title: "Secure Living",
    description: "CCTV surveillance and secure lockers for your belongings",
  },
  {
    icon: GraduationCap,
    title: "Near Colleges",
    description: "Conveniently located near major colleges and universities",
  },
];

export const Facilities = () => {
  return (
    <section id="facilities" className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Everything Students Need to Thrive
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Study-friendly facilities designed for college life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
