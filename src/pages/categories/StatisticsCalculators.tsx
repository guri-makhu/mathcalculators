import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { BarChart3, LineChart, Activity, Percent, Shuffle, Combine, GitBranch, TrendingUp, ScatterChart } from "lucide-react";

const calculators = [
  { name: "Mean Calculator", icon: LineChart, path: "/statistics/mean", description: "Calculate arithmetic mean" },
  { name: "Median Calculator", icon: Activity, path: "/statistics/median", description: "Find the middle value" },
  { name: "Mode Calculator", icon: BarChart3, path: "/statistics/mode", description: "Find most frequent value" },
  { name: "Standard Deviation", icon: TrendingUp, path: "/statistics/std-dev", description: "Measure of dispersion" },
  { name: "Variance Calculator", icon: ScatterChart, path: "/statistics/variance", description: "Calculate variance" },
  { name: "Probability", icon: Percent, path: "/statistics/probability", description: "Basic probability" },
  { name: "Permutation", icon: Shuffle, path: "/statistics/permutation", description: "nPr calculations" },
  { name: "Combination", icon: Combine, path: "/statistics/combination", description: "nCr calculations" },
  { name: "Correlation", icon: GitBranch, path: "/statistics/correlation", description: "Correlation coefficient" },
];

const StatisticsCalculators = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-category-stats/10">
            <BarChart3 className="h-7 w-7 text-category-stats" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Statistics & Probability</h1>
            <p className="text-muted-foreground">Mean, median, mode, standard deviation and more</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {calculators.map((calc) => (
            <Link
              key={calc.path}
              to={calc.path}
              className="group p-6 rounded-2xl bg-card border border-border card-shadow hover:card-shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-category-stats/10 mb-4 group-hover:scale-110 transition-transform">
                <calc.icon className="h-6 w-6 text-category-stats" />
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

export default StatisticsCalculators;
