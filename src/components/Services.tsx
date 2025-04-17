
import { 
  Cpu, 
  Wind, 
  Wrench, 
  BadgePercent,
  Factory,
  Lightbulb
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { ServicesModels } from "./ServicesModels";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Electrical & Instrumentation",
    description: "State-of-the-art sensors, PLCs, and control systems from leading global brands.",
    icon: Cpu,
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "Renewable Energy",
    description: "Comprehensive solar solutions and sustainable energy systems for the future.",
    icon: Wind,
    color: "bg-green-500/10 text-green-500",
  },
  {
    title: "Technical Supply",
    description: "Premium quality industrial components and equipment for various applications.",
    icon: Wrench,
    color: "bg-amber-500/10 text-amber-500",
  },
  {
    title: "Marketing Services",
    description: "Strategic market analysis and positioning for industrial businesses.",
    icon: BadgePercent,
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    title: "Fabrication & Erection",
    description: "Expert fabrication services and structural solutions for industrial projects.",
    icon: Factory,
    color: "bg-red-500/10 text-red-500",
  },
  {
    title: "Expert Consultation",
    description: "Professional guidance for optimizing industrial processes and efficiency.",
    icon: Lightbulb,
    color: "bg-teal-500/10 text-teal-500",
  },
];

export const Services = () => {
  return (
    <section id="services" className="relative py-32 bg-gradient-to-b from-background via-secondary/30 to-background/95 overflow-hidden">
      <ServicesModels />
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-primary/10 rounded-full backdrop-blur-sm border border-border/30">
            <span className="text-sm font-medium text-primary">What We Offer</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive industrial solutions tailored to your specific requirements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="hover-card bg-background/50 backdrop-blur-xl border border-border/50 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_25px_rgba(155,135,245,0.15)]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className={`p-3 ${service.color} rounded-lg w-fit mb-4`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base mt-2">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="outline" className="group border-primary/30 hover:bg-primary/10">
            View All Services
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};
