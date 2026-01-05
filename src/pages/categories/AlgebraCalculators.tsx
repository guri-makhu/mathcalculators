import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Variable, Equal, FunctionSquare, Sigma, Grid2X2, Expand, Replace, ScrollText } from "lucide-react";

const calculators = [
  { name: "Linear Equation", icon: Equal, path: "/algebra/linear", description: "Solve ax + b = c equations" },
  { name: "Quadratic Equation", icon: FunctionSquare, path: "/algebra/quadratic", description: "Solve ax² + bx + c = 0" },
  { name: "Polynomial Calculator", icon: Sigma, path: "/algebra/polynomial", description: "Add, subtract, multiply polynomials" },
  { name: "Factorization", icon: Grid2X2, path: "/algebra/factorization", description: "Factor algebraic expressions" },
  { name: "Simplify Expression", icon: Variable, path: "/algebra/simplify", description: "Simplify algebraic expressions" },
  { name: "Expand Expression", icon: Expand, path: "/algebra/expand", description: "Expand algebraic expressions" },
  { name: "Substitute Value", icon: Replace, path: "/algebra/substitute", description: "Substitute values into expressions" },
  { name: "Algebraic Formulas", icon: ScrollText, path: "/algebra/formulas", description: "Common algebraic formulas" },
];

const AlgebraCalculators = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-category-algebra/10">
            <Variable className="h-7 w-7 text-category-algebra" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Algebra</h1>
            <p className="text-muted-foreground">Equations, polynomials, factorization and more</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {calculators.map((calc) => (
            <Link
              key={calc.path}
              to={calc.path}
              className="group p-6 rounded-2xl bg-card border border-border card-shadow hover:card-shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-category-algebra/10 mb-4 group-hover:scale-110 transition-transform">
                <calc.icon className="h-6 w-6 text-category-algebra" />
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{calc.name}</h3>
              <p className="text-sm text-muted-foreground">{calc.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AlgebraCalculators;
