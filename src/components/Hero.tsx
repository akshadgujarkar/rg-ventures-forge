
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useRef, useEffect, useState } from "react";
import { MainSection } from "./MainSection";
import { Typewriter } from "./TypeWriter";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";


const tips = [
  {
    title: "About RG Ventures",
    description:
      "RG Ventures is a trusted supplier of all types of industrial products, committed to delivering high-quality materials and equipment across diverse industries.",
  },
  {
    title: "Focuses On",
    description:
      "With a strong focus on reliability, customer satisfaction, and timely service, we cater to the dynamic needs of manufacturing, construction, engineering, and other industrial sectors.",
  },
  {
    title: "Customization",
    description:
      "Whether you need standard components or customized solutions, RG Ventures is your one-stop source for industrial excellence.",
  },
];


export const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentTip, setCurrentTip] = useState(0);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (currentTip < tips.length - 1) {
      setCurrentTip(currentTip + 1);
    }
  };

  const handlePrev = () => {
    if (currentTip > 0) {
      setCurrentTip(currentTip - 1);
    }
  };

  const isFirstTip = currentTip === 0;
  const isLastTip = currentTip === tips.length - 1;


  // Handle the particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Create particles
    const particlesArray: Particle[] = [];
    const numberOfParticles = 80;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.7;
        this.speedY = (Math.random() - 0.5) * 0.7;
        this.opacity = Math.random() * 0.5 + 0.2;

        // Create a color palette that matches the theme
        const colors = ['#9b87f5', '#6E59A5', '#403E43', '#222222'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        // Update particle position
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    // Initialize particles
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }

    // Connect particles with lines
    const connectParticles = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const opacity = 1 - (distance / 120);
            ctx.strokeStyle = `rgba(155, 135, 245, ${opacity * 0.15})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const particle of particlesArray) {
        particle.update();
        particle.draw();
      }

      connectParticles();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-background via-background/95 to-background">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-primary/10 z-10" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-accent/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }} />
      </div>

      <div className="container relative z-20 px-4 md:px-6 py-24 flex flex-col items-center">
        <div className="space-y-2 mb-8 text-center">
          <div className="inline-block px-4 py-1.5 bg-secondary/50 rounded-full backdrop-blur-sm border border-border/30 mb-4">
            {/* <span className="text-sm font-medium text-primary">Innovating for Tomorrow</span> */}
            <Typewriter
              text={["Welcome to RG Ventures", "Industrial gifting supply", "Marketing"]}
              speed={100}
              loop={true}
              className=" text-sm font-medium text-primary"
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 pb-2">
            Industrial Excellence
          </h1>
          <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
            Crafting innovative industrial solutions that drive growth and sustainability
          </p>
        </div>

        {/* 3D Text component */}
        <div className="w-full">
          <MainSection />

        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 z-30">
          <Button size="lg" className="group btn-glow text-base px-8 py-6" onClick={() => scrollToSection('industries')}>
            Explore Solutions
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="secondary" className="text-base px-8 py-6" onClick={()=> scrollToSection('contact')}>
            Contact Us
          </Button>
        </div>

        <div className=" mt-14">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="default" className="text-black">About RG Ventures</Button>
            </PopoverTrigger>
            <PopoverContent className="max-w-[280px] py-3 shadow-none" side="top">
              <div className="space-y-3">
                <div className="space-y-1">
                  <p className="text-[13px] font-medium">{tips[currentTip].title}</p>
                  <p className="text-xs text-muted-foreground">{tips[currentTip].description}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {currentTip + 1}/{tips.length}
                  </span>
                  <div className="flex gap-0.5">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="size-6"
                      onClick={handlePrev}
                      disabled={isFirstTip}
                      aria-label="Previous tip"
                    >
                      <ArrowLeft size={14} strokeWidth={2} aria-hidden="true" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="size-6"
                      onClick={handleNext}
                      disabled={isLastTip}
                      aria-label="Next tip"
                    >
                      <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
                    </Button>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>


        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center z-20">
          {['20+ Years Experience', '500+ Projects', 'Industry Leaders', 'Advisory Services'].map((stat, index) => (
            <div key={index} className="p-4 rounded-xl backdrop-blur-sm border border-border/30 bg-background/40">
              <p className="font-semibold text-foreground">{stat}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-30">
        <a
          href="#services"
          className="animate-bounce p-2 bg-background/30 backdrop-blur-sm rounded-full border border-border/30"
        >
          <ArrowRight className="h-5 w-5 rotate-90 text-primary" />
        </a>
      </div>
    </section>
  );
};
