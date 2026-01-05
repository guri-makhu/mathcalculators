import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Calculator, Plus, Minus, X, Divide, Percent, BarChart2, ArrowLeftRight, CircleDot } from "lucide-react";

const calculators = [
  { name: "Addition Calculator", icon: Plus, path: "/basic/addition", description: "Add two or more numbers together" },
  { name: "Subtraction Calculator", icon: Minus, path: "/basic/subtraction", description: "Subtract numbers from each other" },
  { name: "Multiplication Calculator", icon: X, path: "/basic/multiplication", description: "Multiply two or more numbers" },
  { name: "Division Calculator", icon: Divide, path: "/basic/division", description: "Divide numbers with remainders" },
  { name: "Percentage Calculator", icon: Percent, path: "/basic/percentage", description: "Calculate percentages and changes" },
  { name: "Average Calculator", icon: BarChart2, path: "/basic/average", description: "Find mean, median, and mode" },
  { name: "Number Comparison", icon: ArrowLeftRight, path: "/basic/compare", description: "Compare two numbers" },
  { name: "Rounding Calculator", icon: CircleDot, path: "/basic/rounding", description: "Round numbers to decimal places" },
];

const BasicCalculators = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-category-basic/10">
            <Calculator className="h-7 w-7 text-category-basic" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Basic Arithmetic</h1>
            <p className="text-muted-foreground">Addition, subtraction, multiplication, division and more</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {calculators.map((calc) => (
            <Link
              key={calc.path}
              to={calc.path}
              className="group p-6 rounded-2xl bg-card border border-border card-shadow hover:card-shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-category-basic/10 mb-4 group-hover:scale-110 transition-transform">
                <calc.icon className="h-6 w-6 text-category-basic" />
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

export default BasicCalculators;
