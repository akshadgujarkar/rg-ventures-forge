
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

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
