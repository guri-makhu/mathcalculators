import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Grid3X3, Plus, X, Hash, RotateCcw, Zap, Layers } from "lucide-react";

const calculators = [
  { name: "Matrix Addition", icon: Plus, path: "/matrix/addition", description: "Add two matrices" },
  { name: "Matrix Multiplication", icon: X, path: "/matrix/multiplication", description: "Multiply two matrices" },
  { name: "Determinant", icon: Hash, path: "/matrix/determinant", description: "Calculate matrix determinant" },
  { name: "Inverse Matrix", icon: RotateCcw, path: "/matrix/inverse", description: "Find matrix inverse" },
  { name: "Eigenvalues", icon: Zap, path: "/matrix/eigenvalues", description: "Find eigenvalues & eigenvectors" },
  { name: "Matrix Rank", icon: Layers, path: "/matrix/rank", description: "Calculate matrix rank" },
];

const MatrixCalculators = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-category-matrix/10">
            <Grid3X3 className="h-7 w-7 text-category-matrix" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Matrix & Linear Algebra</h1>
            <p className="text-muted-foreground">Matrix operations, determinants, eigenvalues and more</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {calculators.map((calc) => (
            <Link
              key={calc.path}
              to={calc.path}
              className="group p-6 rounded-2xl bg-card border border-border card-shadow hover:card-shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-category-matrix/10 mb-4 group-hover:scale-110 transition-transform">
                <calc.icon className="h-6 w-6 text-category-matrix" />
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

export default MatrixCalculators;
