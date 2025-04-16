
import { 
  Cpu, 
  Wind, 
  Wrench, 
  BadgePercent,
  Factory,
  Lightbulb
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";

const services = [
  {
    title: "Electrical & Instrumentation",
    description: "State-of-the-art sensors, PLCs, and control systems from leading global brands.",
    icon: Cpu,
  },
  {
    title: "Renewable Energy",
    description: "Comprehensive solar solutions and sustainable energy systems for the future.",
    icon: Wind,
  },
  {
    title: "Technical Supply",
    description: "Premium quality industrial components and equipment for various applications.",
    icon: Wrench,
  },
  {
    title: "Marketing Services",
    description: "Strategic market analysis and positioning for industrial businesses.",
    icon: BadgePercent,
  },
  {
    title: "Fabrication & Erection",
    description: "Expert fabrication services and structural solutions for industrial projects.",
    icon: Factory,
  },
  {
    title: "Expert Consultation",
    description: "Professional guidance for optimizing industrial processes and efficiency.",
    icon: Lightbulb,
  },
];

export const Services = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive industrial solutions tailored to your needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="hover-card bg-background/50 backdrop-blur">
              <CardHeader>
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
