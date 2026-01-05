import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Wallet, Percent, Building, CreditCard, PiggyBank, Coins } from "lucide-react";

const calculators = [
  { name: "Simple Interest", icon: Percent, path: "/finance/simple-interest", description: "Calculate simple interest" },
  { name: "Compound Interest", icon: Coins, path: "/finance/compound-interest", description: "Calculate compound interest" },
  { name: "EMI Calculator", icon: CreditCard, path: "/finance/emi", description: "Monthly installment calculator" },
  { name: "Loan Calculator", icon: Building, path: "/finance/loan", description: "Loan amount calculations" },
  { name: "Savings Calculator", icon: PiggyBank, path: "/finance/savings", description: "Future savings projection" },
  { name: "Currency Converter", icon: Wallet, path: "/finance/currency", description: "Convert between currencies" },
];

const FinanceCalculators = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-category-finance/10">
            <Wallet className="h-7 w-7 text-category-finance" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Finance & Money</h1>
            <p className="text-muted-foreground">Interest, loans, EMI and investment calculators</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {calculators.map((calc) => (
            <Link
              key={calc.path}
              to={calc.path}
              className="group p-6 rounded-2xl bg-card border border-border card-shadow hover:card-shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-category-finance/10 mb-4 group-hover:scale-110 transition-transform">
                <calc.icon className="h-6 w-6 text-category-finance" />
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

export default FinanceCalculators;
