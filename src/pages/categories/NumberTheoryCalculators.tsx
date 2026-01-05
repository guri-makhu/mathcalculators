import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Hash, Binary, Sigma, GitBranch, Sparkles, Layers } from "lucide-react";

const calculators = [
  { name: "GCD Calculator", icon: Sigma, path: "/number-theory/gcd", description: "Greatest Common Divisor" },
  { name: "LCM Calculator", icon: Layers, path: "/number-theory/lcm", description: "Least Common Multiple" },
  { name: "Prime Checker", icon: Sparkles, path: "/number-theory/prime", description: "Check if a number is prime" },
  { name: "Factor Finder", icon: GitBranch, path: "/number-theory/factors", description: "Find all factors of a number" },
  { name: "Fibonacci", icon: Hash, path: "/number-theory/fibonacci", description: "Fibonacci sequence generator" },
  { name: "Base Converter", icon: Binary, path: "/number-theory/base-convert", description: "Binary, Octal, Hex conversions" },
];

const NumberTheoryCalculators = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-category-number/10">
            <Hash className="h-7 w-7 text-category-number" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Number Theory</h1>
            <p className="text-muted-foreground">GCD, LCM, prime numbers, factors and base conversions</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {calculators.map((calc) => (
            <Link
              key={calc.path}
              to={calc.path}
              className="group p-6 rounded-2xl bg-card border border-border card-shadow hover:card-shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-category-number/10 mb-4 group-hover:scale-110 transition-transform">
                <calc.icon className="h-6 w-6 text-category-number" />
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

export default NumberTheoryCalculators;
