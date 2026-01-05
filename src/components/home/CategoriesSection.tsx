import {
  Calculator,
  Variable,
  Hexagon,
  Triangle,
  BarChart3,
  TrendingUp,
  Grid3X3,
  Hash,
  Wallet,
  ArrowLeftRight,
  Atom,
} from "lucide-react";
import { CategoryCard } from "./CategoryCard";

const categories = [
  {
    title: "Basic Arithmetic",
    description: "Addition, subtraction, multiplication, division, percentages and averages",
    icon: Calculator,
    path: "/basic",
    color: "hsl(235, 65%, 55%)",
    calculatorCount: 8,
  },
  {
    title: "Algebra",
    description: "Linear & quadratic equations, factorization, polynomial operations",
    icon: Variable,
    path: "/algebra",
    color: "hsl(280, 60%, 55%)",
    calculatorCount: 8,
  },
  {
    title: "Geometry",
    description: "Area, perimeter, volume, and surface area for all shapes",
    icon: Hexagon,
    path: "/geometry",
    color: "hsl(160, 60%, 45%)",
    calculatorCount: 9,
  },
  {
    title: "Trigonometry",
    description: "Sin, cos, tan, inverse functions, and angle conversions",
    icon: Triangle,
    path: "/trigonometry",
    color: "hsl(200, 75%, 50%)",
    calculatorCount: 6,
  },
  {
    title: "Statistics & Probability",
    description: "Mean, median, mode, standard deviation, and probability",
    icon: BarChart3,
    path: "/statistics",
    color: "hsl(340, 70%, 55%)",
    calculatorCount: 9,
  },
  {
    title: "Calculus",
    description: "Derivatives, integrals, limits, and differential equations",
    icon: TrendingUp,
    path: "/calculus",
    color: "hsl(15, 80%, 55%)",
    calculatorCount: 7,
  },
  {
    title: "Matrix & Linear Algebra",
    description: "Matrix operations, determinants, eigenvalues, and more",
    icon: Grid3X3,
    path: "/matrix",
    color: "hsl(260, 55%, 55%)",
    calculatorCount: 6,
  },
  {
    title: "Number Theory",
    description: "GCD, LCM, prime numbers, factors, and base conversions",
    icon: Hash,
    path: "/number-theory",
    color: "hsl(175, 60%, 45%)",
    calculatorCount: 6,
  },
  {
    title: "Finance & Money",
    description: "Interest, loans, EMI, savings, and investment calculators",
    icon: Wallet,
    path: "/finance",
    color: "hsl(145, 55%, 45%)",
    calculatorCount: 6,
  },
  {
    title: "Converters",
    description: "Unit, temperature, speed, data storage, and angle conversions",
    icon: ArrowLeftRight,
    path: "/converters",
    color: "hsl(45, 85%, 55%)",
    calculatorCount: 5,
  },
  {
    title: "Advanced Tools",
    description: "Complex numbers, vectors, logarithms, and scientific notation",
    icon: Atom,
    path: "/advanced",
    color: "hsl(300, 55%, 50%)",
    calculatorCount: 8,
  },
];

export const CategoriesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Math Tools for Every Need
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive collection of calculators organized by category
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={category.path} {...category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
