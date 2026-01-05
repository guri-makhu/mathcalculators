import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Atom, Binary, Move, Calculator, Sigma, Superscript, FlaskConical, Scale } from "lucide-react";

const calculators = [
  { name: "Complex Numbers", icon: Atom, path: "/advanced/complex", description: "Complex number operations" },
  { name: "Vector Calculator", icon: Move, path: "/advanced/vector", description: "Vector operations" },
  { name: "Probability Distribution", icon: Scale, path: "/advanced/distribution", description: "Normal, binomial distributions" },
  { name: "Z-Score Calculator", icon: Sigma, path: "/advanced/zscore", description: "Calculate z-scores" },
  { name: "Logarithm Calculator", icon: Calculator, path: "/advanced/logarithm", description: "Log calculations" },
  { name: "Exponent Calculator", icon: Superscript, path: "/advanced/exponent", description: "Power calculations" },
  { name: "Scientific Notation", icon: FlaskConical, path: "/advanced/scientific", description: "Scientific notation converter" },
  { name: "Binary/Hex Calculator", icon: Binary, path: "/advanced/binary-hex", description: "Binary & hex operations" },
];

const AdvancedCalculators = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-category-advanced/10">
            <Atom className="h-7 w-7 text-category-advanced" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Advanced Tools</h1>
            <p className="text-muted-foreground">Complex numbers, vectors, logarithms and scientific notation</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {calculators.map((calc) => (
            <Link
              key={calc.path}
              to={calc.path}
              className="group p-6 rounded-2xl bg-card border border-border card-shadow hover:card-shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-category-advanced/10 mb-4 group-hover:scale-110 transition-transform">
                <calc.icon className="h-6 w-6 text-category-advanced" />
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

export default AdvancedCalculators;
