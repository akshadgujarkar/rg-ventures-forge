
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="container relative z-10 px-4 py-32">
        <div className="text-center space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Industrial Innovation <br />Meets Excellence
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner in industrial solutions, offering cutting-edge technology, 
            expert consultation, and comprehensive services for sustainable growth.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="group">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="secondary">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
