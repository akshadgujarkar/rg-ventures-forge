
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export const Navigation = () => {
  const menuItems = ["Home", "Services", "Industries", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container flex items-center justify-between h-16 px-4">
        <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          RG Ventures
        </h1>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
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
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col space-y-4 mt-8">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
