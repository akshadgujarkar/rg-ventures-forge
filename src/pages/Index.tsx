
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Industries } from "@/components/Industries";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Industries />
      <Contact />
    </div>
  );
};

export default Index;
