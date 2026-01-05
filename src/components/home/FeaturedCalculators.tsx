import { Link } from "react-router-dom";
import { Percent, FunctionSquare, Ruler, Calculator } from "lucide-react";

const featured = [
  {
    title: "Percentage Calculator",
    description: "Calculate percentages, increases, decreases and more",
    icon: Percent,
    path: "/basic/percentage",
    color: "hsl(235, 65%, 55%)",
  },
  {
    title: "Quadratic Equation Solver",
    description: "Solve ax² + bx + c = 0 with step-by-step solutions",
    icon: FunctionSquare,
    path: "/algebra/quadratic",
    color: "hsl(280, 60%, 55%)",
  },
  {
    title: "Area Calculator",
    description: "Calculate area for squares, rectangles, triangles & circles",
    icon: Ruler,
    path: "/geometry/area",
    color: "hsl(160, 60%, 45%)",
  },
];

export const FeaturedCalculators = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Popular Calculators
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Jump into our most-used tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((calc, index) => (
            <div
              key={calc.path}
              className="animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Link
                to={calc.path}
                className="group flex flex-col h-full p-8 rounded-2xl bg-card border border-border card-shadow hover:card-shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${calc.color}15` }}
                >
                  <calc.icon className="h-8 w-8" style={{ color: calc.color }} />
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {calc.title}
                </h3>

                <p className="text-muted-foreground flex-1">
                  {calc.description}
                </p>

                <div className="mt-6 flex items-center gap-2 font-medium" style={{ color: calc.color }}>
                  <Calculator className="h-4 w-4" />
                  <span>Open Calculator</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
