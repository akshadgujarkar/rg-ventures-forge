
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Industries } from "@/components/Industries";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Gallery4 } from "@/components/Gallery4";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Services />
      <Industries />
      <Gallery4  />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
