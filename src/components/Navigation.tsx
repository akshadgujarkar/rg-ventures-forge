
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useEffect, useState } from "react";

export const Navigation = () => {
  const menuItems = ["Home", "Services", "Industries", "Contact"];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-background/80 backdrop-blur-xl border-b border-border/20 shadow-lg shadow-primary/5" 
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20 px-4 md:px-6">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent"></div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            RG Ventures
          </h1>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

      

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="bg-background/20 backdrop-blur-sm">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-background/95 backdrop-blur-xl border-l border-border/30">
            <div className="flex flex-col space-y-8 mt-10">
              <div className="flex items-center gap-2 mb-8">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-accent"></div>
                <div className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  RG Ventures
                </div>
              </div>
              
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors flex items-center py-2"
                >
                  {item}
                </a>
              ))}
              
              <Button className="mt-4 w-full">Get Started</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
