
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

import { useIsMobile } from "@/hooks/use-mobile";
import { programData } from "@/data/programData";


const ProgramDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const isMobile = useIsMobile();
  
  // Find the current program data
  const program = programData.find(p => p.slug === slug);
  
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  // Handle 404 for invalid slugs
  if (!program) {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Program Not Found</h1>
            <p className="mb-8">We couldn't find the program you're looking for.</p>
            <Link to="/">
              <Button>Return to Home</Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <main className="flex-grow w-full overflow-x-hidden p-3 md:p-5 sm:p-4 lg:p-10">
        {/* Hero Banner */}
        <section className="bg-gradient-to-b from-primary/20 to-background pt-24 pb-16 w-full">
          <div className="section-container">
            <div className="program-header text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">{program.title}</h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                {program.shortDescription}
              </p>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-8 md:py-16 w-full">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8 md:space-y-12">
                {program.sections && program.sections.map((section, index) => (
                  <div key={index} className="content-section">
                    <h2 className="text-xl md:text-2xl font-bold mb-4">{section.title}</h2>
                    <div className="prose max-w-none">
                      {section.content}
                    </div>
                    <div className="mt-8 rounded-lg overflow-hidden">
                      <img 
                        src={program.sections[0].image}
                        alt={section.title || program.title} 
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                ))}
                
                {/* Key Benefits */}
                {program.benefits && (
                  <div className="content-section">
                    <h2 className="text-xl md:text-2xl font-bold mb-6">Key Benefits</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {program.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start p-4 bg-card rounded-lg border">
                          <div className="bg-primary/10 p-2 rounded-lg mr-4">
                            {benefit.icon}
                          </div>
                          <div>
                            <h3 className="font-medium">{benefit.title}</h3>
                            <p className="text-sm text-muted-foreground">{benefit.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* CTA */}
                <div className="program-cta mt-12 p-4 md:p-8 bg-primary/10 rounded-2xl">
                  <div className="text-center">
                    <h3 className="text-lg md:text-xl font-bold mb-2">Ready to Get Started?</h3>
                    <p className="mb-6">Join our program and take the next step in your career.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <Link to="/" className="w-full sm:w-auto">
                        <Button size={isMobile ? "default" : "lg"} className="w-full sm:w-auto">
                          <ArrowLeft className="mr-2 h-4 w-4" /> Get Back to Expertise
                        </Button>
                      </Link>
                      <Link to="/#contact" className="w-full sm:w-auto">
                        <Button size={isMobile ? "default" : "lg"} className="w-full sm:w-auto">
                          Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-1 mt-8 lg:mt-0">
                <div className="lg:sticky lg:top-24 space-y-6">                  
                  {/* Related Programs */}
                  <Card className="p-4 md:p-6">
                    <h3 className="font-bold text-lg mb-4">Related Programs</h3>
                    <div className="space-y-4">
                      {program.relatedPrograms && program.relatedPrograms.map((relatedProgram, index) => (
                        <Link to={`/programs/${relatedProgram.slug}`} key={index}>
                          <div className="flex items-center p-3 hover:bg-accent rounded-lg transition-colors">
                            <div className="text-primary mr-3 flex-shrink-0">
                              {relatedProgram.icon}
                            </div>
                            <div className="flex-1 text-sm md:text-base">{relatedProgram.title}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProgramDetails;
