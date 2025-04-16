
import { Card } from "./ui/card";

const industries = [
  "Oil & Gas",
  "Infrastructure",
  "Manufacturing",
  "Renewable Energy",
  "Food & Pharma",
];

export const Industries = () => {
  return (
    <section className="py-24">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expertise across diverse industrial sectors
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((industry) => (
            <Card key={industry} className="p-6 hover-card bg-secondary/50">
              <p className="text-lg font-semibold">{industry}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
