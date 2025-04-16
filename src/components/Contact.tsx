
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="gradient-border">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Ready to Get Started?</CardTitle>
              <CardDescription className="text-lg">
                Connect with our experts for consultation and solutions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-center gap-6">
                <Button className="group" size="lg">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              <div className="flex justify-center gap-8 mt-8">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>info@rgventures.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
