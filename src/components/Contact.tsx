
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, Mail, Phone, MapPin, Check } from "lucide-react";
import { useRef, useState } from "react";

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormState('success');
      if (formRef.current) {
        formRef.current.reset();
      }
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-secondary/30 via-background/95 to-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-primary/10 rounded-full backdrop-blur-sm border border-border/30">
            <span className="text-sm font-medium text-primary">Get in Touch</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">Ready to Transform Your Industry?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Connect with our experts for consultation and innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="bg-gradient-to-br from-background/70 to-secondary/20 backdrop-blur-xl border-border/30 overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl">Contact Information</CardTitle>
              <CardDescription>Reach out to us through any of these channels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid gap-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:info@rgventures.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">info@rgventures.com</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+15551234567" className="text-sm text-muted-foreground hover:text-primary transition-colors">+1 (555) 123-4567</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Address</p>
                    <span className="text-sm text-muted-foreground">Mumbai, India</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-background/70 to-secondary/20 backdrop-blur-xl border-border/30 overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              <CardDescription>Fill out the form and we'll get back to you shortly</CardDescription>
            </CardHeader>
            <CardContent>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      className="w-full px-3 py-2 rounded-md bg-background/50 border border-border/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="w-full px-3 py-2 rounded-md bg-background/50 border border-border/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    className="w-full px-3 py-2 rounded-md bg-background/50 border border-border/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full px-3 py-2 rounded-md bg-background/50 border border-border/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors"
                  ></textarea>
                </div>
                <Button 
                  className="w-full group" 
                  size="lg" 
                  type="submit"
                  disabled={formState === 'submitting'}
                >
                  {formState === 'idle' && (
                    <>
                      Send Message
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                  {formState === 'submitting' && 'Sending...'}
                  {formState === 'success' && 'Message Sent!'}
                  {formState === 'error' && 'Error - Try Again'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
