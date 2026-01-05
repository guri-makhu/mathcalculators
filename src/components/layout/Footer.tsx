import { Calculator } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  { name: "Basic Calculators", path: "/basic" },
  { name: "Algebra", path: "/algebra" },
  { name: "Geometry", path: "/geometry" },
  { name: "Trigonometry", path: "/trigonometry" },
  { name: "Statistics", path: "/statistics" },
  { name: "Calculus", path: "/calculus" },
];

const resources = [
  { name: "Finance", path: "/finance" },
  { name: "Converters", path: "/converters" },
  { name: "Matrix & Linear Algebra", path: "/matrix" },
  { name: "Number Theory", path: "/number-theory" },
  { name: "Advanced Tools", path: "/advanced" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card mt-auto">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Calculator className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold tracking-tight">MathCalc</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Free online math calculators and tools for students, teachers, and professionals worldwide.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Math Categories</h4>
            <ul className="space-y-2">
              {categories.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">More Tools</h4>
            <ul className="space-y-2">
              {resources.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Popular Calculators</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/basic/percentage" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Percentage Calculator
                </Link>
              </li>
              <li>
                <Link to="/algebra/quadratic" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Quadratic Solver
                </Link>
              </li>
              <li>
                <Link to="/geometry/area" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Area Calculator
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} MathCalc. All rights reserved. Free math tools for everyone.</p>
        </div>
      </div>
    </footer>
  );
};
