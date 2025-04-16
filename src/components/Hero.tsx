
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Animated background element */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-accent/5 rounded-full blur-3xl animate-pulse" />
      </div>

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
