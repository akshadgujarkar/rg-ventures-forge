
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { useEffect, useRef } from "react";

const industries = [
  {
    name: "Oil & Gas",
    tags: ["Automation", "Safety", "Control"]
  },
  {
    name: "Infrastructure",
    tags: ["Steel", "Fabrication", "Assembly"]
  },
  {
    name: "Manufacturing",
    tags: ["Drives", "Automation", "Efficiency"]
  },
  {
    name: "Renewable Energy",
    tags: ["Solar", "Sustainable", "Green"]
  },
  {
    name: "Food & Pharma",
    tags: ["Hygienic", "Precise", "Sterile"]
  },
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
    <section id="industries" className="py-24">
      <div className="container px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-primary/10 rounded-full backdrop-blur-sm">
            <span className="text-sm font-medium text-primary">Our Expertise</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">Industries We Serve</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expertise across diverse industrial sectors
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {industries.map((industry, index) => (
            <Card 
              key={industry.name} 
              className="p-6 hover-card bg-secondary/50 border-border/50 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_15px_rgba(155,135,245,0.15)] w-64"
              style={{ animationDelay: `${index * 150}ms` }}
              ref={(el) => cardsRef.current[index] = el}
            >
              <p className="text-xl font-semibold mb-4">{industry.name}</p>
              <div className="flex flex-wrap gap-2">
                {industry.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="bg-background/50">{tag}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
