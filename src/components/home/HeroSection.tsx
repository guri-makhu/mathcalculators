import { Calculator, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-secondary-foreground">
              100+ Free Math Calculators
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
            Solve Math Problems{" "}
            <span className="text-gradient">Instantly</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
            From basic arithmetic to advanced calculus—free online calculators 
            for students, teachers, and professionals worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
            <Button asChild size="lg" className="text-base gap-2">
              <Link to="/basic">
                <Calculator className="h-5 w-5" />
                Start Calculating
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base gap-2">
              <Link to="/algebra">
                Browse All Tools
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Floating Math Symbols */}
          <div className="relative mt-16 h-32 hidden md:block">
            {["π", "∑", "∫", "√", "∞", "Δ"].map((symbol, i) => (
              <span
                key={symbol}
                className="absolute text-4xl md:text-5xl font-mono text-primary/20 select-none animate-float"
                style={{
                  left: `${15 + i * 14}%`,
                  top: `${Math.sin(i) * 30 + 40}%`,
                  animationDelay: `${i * 0.5}s`,
                }}
              >
                {symbol}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
