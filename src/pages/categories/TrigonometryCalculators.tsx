import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Triangle, ArrowUpDown, Omega, RotateCw, Scale, Ruler } from "lucide-react";

const calculators = [
  { name: "Sin, Cos, Tan", icon: Triangle, path: "/trigonometry/basic", description: "Calculate sine, cosine, tangent" },
  { name: "Inverse Trig", icon: ArrowUpDown, path: "/trigonometry/inverse", description: "Arcsin, arccos, arctan" },
  { name: "Trig Identities", icon: Omega, path: "/trigonometry/identities", description: "Common trig identities" },
  { name: "Angle Converter", icon: RotateCw, path: "/trigonometry/angle-convert", description: "Degrees ↔ Radians" },
  { name: "Law of Sines", icon: Scale, path: "/trigonometry/law-sines", description: "Triangle calculations" },
  { name: "Law of Cosines", icon: Ruler, path: "/trigonometry/law-cosines", description: "Triangle side/angle calculations" },
];

const TrigonometryCalculators = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-category-trig/10">
            <Triangle className="h-7 w-7 text-category-trig" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Trigonometry</h1>
            <p className="text-muted-foreground">Trig functions, identities, and angle conversions</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {calculators.map((calc) => (
            <Link
              key={calc.path}
              to={calc.path}
              className="group p-6 rounded-2xl bg-card border border-border card-shadow hover:card-shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-category-trig/10 mb-4 group-hover:scale-110 transition-transform">
                <calc.icon className="h-6 w-6 text-category-trig" />
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

export default TrigonometryCalculators;
