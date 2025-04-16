
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Industries } from "@/components/Industries";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Services />
      <Industries />
      <Contact />
    </div>
  );
};

export default Index;
