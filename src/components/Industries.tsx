
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { useEffect, useRef } from "react";
import { ArrowRight, Tags } from "lucide-react";

const industries = [
  {
    name: "Oil & Gas",
    tags: ["Automation", "Safety", "Control"],
    image: "https://cdn.corporatefinanceinstitute.com/assets/Oil-1.jpg",
  },
  {
    name: "Infrastructure",
    tags: ["Steel", "Fabrication", "Assembly"],
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=500&h=350&q=80&fit=crop",
  },
  {
    name: "Manufacturing",
    tags: ["Full-Spectrum Supplier","B2B Supplier"],
    image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=500&h=350&q=80&fit=crop",
  },
  {
    name: "Renewable Energy",
    tags: ["Solar", "Sustainable", "Green"],
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&h=350&q=80&fit=crop",
  },
  {
    name: "Food & Pharma",
    tags: ["Hygienic", "Precise", "Sterile"],
    image: "https://images.squarespace-cdn.com/content/v1/65282ce86f86554adcd502e6/9fa27ddf-d8ba-4feb-a128-81721f3a8be0/pills+and+fruit2.png",
  },
  {
    name:"Industrial Gifting",
    tags:["Corporate Gift Solution","Sundry Items"],
    image:"https://bookblock-business-media.s3.eu-west-2.amazonaws.com/business/2023/01/25110837/Warehouse-Send.jpg"
  }
];

export const Industries = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (
          x > 0 &&
          x < rect.width &&
          y > 0 &&
          y < rect.height
        ) {
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = (y - centerY) / 20;
          const rotateY = (centerX - x) / 20;

          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
          card.style.transition = 'transform 0.1s';
        } else {
          card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
          card.style.transition = 'transform 0.5s';
        }
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="industries" className="py-32 bg-gradient-to-b from-background via-background/95 to-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-primary/10 rounded-full backdrop-blur-sm border border-border/30">
            <span className="text-sm font-medium text-primary">Our Expertise</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">Industries We Serve</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Specialized solutions for diverse industrial sectors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[100%] mx-auto">
          {industries.map((industry, index) => (
            <div key={industry.name} className="relative group w-full md:w-[420px] lg:w-[480px]">
              <Card
                ref={(el) => cardsRef.current[index] = el}
                className="overflow-hidden h-[400px] border-border/30 bg-gradient-to-b from-secondary/50 to-background/80 backdrop-blur-sm hover:border-primary/30 transition-all duration-500"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 overflow-hidden z-0">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-40"
                    style={{ backgroundImage: `url(${industry.image})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent"></div>
                </div>

                <div className="h-full flex flex-col justify-end relative z-10 p-6">
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{industry.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {industry.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-background/50 backdrop-blur-sm">{tag}</Badge>
                    ))}
                  </div>
                  <div className="mt-auto flex items-center text-sm text-foreground/70 group-hover:text-primary transition-colors">
                    <span>Learn more</span>
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Card>
            </div>
          ))}

        </div>

        <div className="mt-16 p-8 rounded-2xl bg-primary/5 backdrop-blur-sm border border-border/30 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">Need custom solutions for your industry?</h3>
          <p className="text-muted-foreground mb-6">Our experts can provide tailored approaches for your specific industrial needs</p>
          <a href="#contact" className="inline-flex items-center text-primary hover:underline font-medium">
            Contact our team
            <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
