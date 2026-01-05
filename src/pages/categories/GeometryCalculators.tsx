import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Hexagon, Square, RectangleHorizontal, Triangle, Circle, Box, Pyramid, Cylinder, Diameter } from "lucide-react";

const calculators = [
  { name: "Area Calculator", icon: Square, path: "/geometry/area", description: "Calculate area for various shapes" },
  { name: "Perimeter Calculator", icon: RectangleHorizontal, path: "/geometry/perimeter", description: "Calculate perimeter of shapes" },
  { name: "Volume Calculator", icon: Box, path: "/geometry/volume", description: "Calculate volume of 3D shapes" },
  { name: "Surface Area", icon: Hexagon, path: "/geometry/surface-area", description: "Surface area of 3D shapes" },
  { name: "Circle Calculator", icon: Circle, path: "/geometry/circle", description: "Radius, diameter, circumference" },
  { name: "Triangle Calculator", icon: Triangle, path: "/geometry/triangle", description: "Angles, sides, and area" },
  { name: "Polygon Calculator", icon: Hexagon, path: "/geometry/polygon", description: "Regular polygon calculations" },
  { name: "Cone Calculator", icon: Pyramid, path: "/geometry/cone", description: "Cone volume and surface area" },
  { name: "Sphere Calculator", icon: Diameter, path: "/geometry/sphere", description: "Sphere calculations" },
];

const GeometryCalculators = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-category-geometry/10">
            <Hexagon className="h-7 w-7 text-category-geometry" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Geometry</h1>
            <p className="text-muted-foreground">Area, perimeter, volume and surface area calculations</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {calculators.map((calc) => (
            <Link
              key={calc.path}
              to={calc.path}
              className="group p-6 rounded-2xl bg-card border border-border card-shadow hover:card-shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-category-geometry/10 mb-4 group-hover:scale-110 transition-transform">
                <calc.icon className="h-6 w-6 text-category-geometry" />
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

export default GeometryCalculators;
