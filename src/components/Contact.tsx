
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/50">
      <div className="container px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-primary/10 rounded-full backdrop-blur-sm">
            <span className="text-sm font-medium text-primary">Get in Touch</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">Ready to Get Started?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Connect with our experts for consultation and solutions
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Card className="gradient-border overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-50" />
            <CardHeader className="text-center relative z-10">
              <CardTitle className="text-3xl">Ready to Get Started?</CardTitle>
              <CardDescription className="text-lg">
                Connect with our experts for consultation and solutions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 relative z-10">
              <div className="flex justify-center gap-6">
                <Button className="group" size="lg">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-background/30 transition-colors">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <p className="font-medium">Email</p>
                  <span className="text-sm text-muted-foreground">info@rgventures.com</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-background/30 transition-colors">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <p className="font-medium">Phone</p>
                  <span className="text-sm text-muted-foreground">+1 (555) 123-4567</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-background/30 transition-colors">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <p className="font-medium">Address</p>
                  <span className="text-sm text-muted-foreground">Mumbai, India</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
