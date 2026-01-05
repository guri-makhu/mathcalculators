import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { TrendingUp, ArrowDown, ArrowUp, Infinity, Sigma, GitBranch, List } from "lucide-react";

const calculators = [
  { name: "Derivative", icon: ArrowUp, path: "/calculus/derivative", description: "Calculate derivatives" },
  { name: "Indefinite Integral", icon: ArrowDown, path: "/calculus/indefinite-integral", description: "Find antiderivatives" },
  { name: "Definite Integral", icon: Sigma, path: "/calculus/definite-integral", description: "Calculate definite integrals" },
  { name: "Limit Calculator", icon: Infinity, path: "/calculus/limit", description: "Evaluate limits" },
  { name: "Partial Derivative", icon: GitBranch, path: "/calculus/partial", description: "Multivariable derivatives" },
  { name: "Differential Equation", icon: TrendingUp, path: "/calculus/differential", description: "Solve diff equations" },
  { name: "Series & Sequence", icon: List, path: "/calculus/series", description: "Analyze series" },
];

const CalculusCalculators = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-category-calculus/10">
            <TrendingUp className="h-7 w-7 text-category-calculus" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Calculus</h1>
            <p className="text-muted-foreground">Derivatives, integrals, limits and differential equations</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {calculators.map((calc) => (
            <Link
              key={calc.path}
              to={calc.path}
              className="group p-6 rounded-2xl bg-card border border-border card-shadow hover:card-shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-category-calculus/10 mb-4 group-hover:scale-110 transition-transform">
                <calc.icon className="h-6 w-6 text-category-calculus" />
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

export default CalculusCalculators;
