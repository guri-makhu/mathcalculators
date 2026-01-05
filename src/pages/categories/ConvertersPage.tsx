import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowLeftRight, Ruler, Thermometer, Gauge, HardDrive, RotateCw } from "lucide-react";

const calculators = [
  { name: "Unit Converter", icon: Ruler, path: "/converters/unit", description: "Length, weight, time" },
  { name: "Temperature", icon: Thermometer, path: "/converters/temperature", description: "Celsius, Fahrenheit, Kelvin" },
  { name: "Speed & Distance", icon: Gauge, path: "/converters/speed", description: "Speed and distance conversions" },
  { name: "Data Storage", icon: HardDrive, path: "/converters/data", description: "Bytes, KB, MB, GB, TB" },
  { name: "Angle Converter", icon: RotateCw, path: "/converters/angle", description: "Degrees, radians, gradians" },
];

const ConvertersPage = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-category-convert/10">
            <ArrowLeftRight className="h-7 w-7 text-category-convert" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Converters</h1>
            <p className="text-muted-foreground">Unit, temperature, speed and data conversions</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {calculators.map((calc) => (
            <Link
              key={calc.path}
              to={calc.path}
              className="group p-6 rounded-2xl bg-card border border-border card-shadow hover:card-shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-category-convert/10 mb-4 group-hover:scale-110 transition-transform">
                <calc.icon className="h-6 w-6 text-category-convert" />
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

export default ConvertersPage;
