import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Category Pages
import BasicCalculators from "./pages/categories/BasicCalculators";
import AlgebraCalculators from "./pages/categories/AlgebraCalculators";
import GeometryCalculators from "./pages/categories/GeometryCalculators";
import TrigonometryCalculators from "./pages/categories/TrigonometryCalculators";
import StatisticsCalculators from "./pages/categories/StatisticsCalculators";
import CalculusCalculators from "./pages/categories/CalculusCalculators";
import FinanceCalculators from "./pages/categories/FinanceCalculators";
import ConvertersPage from "./pages/categories/ConvertersPage";
import NumberTheoryCalculators from "./pages/categories/NumberTheoryCalculators";
import MatrixCalculators from "./pages/categories/MatrixCalculators";
import AdvancedCalculators from "./pages/categories/AdvancedCalculators";

// Calculator Pages
import PercentageCalculator from "./pages/calculators/PercentageCalculator";
import QuadraticCalculator from "./pages/calculators/QuadraticCalculator";
import AreaCalculator from "./pages/calculators/AreaCalculator";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Category Routes */}
          <Route path="/basic" element={<BasicCalculators />} />
          <Route path="/algebra" element={<AlgebraCalculators />} />
          <Route path="/geometry" element={<GeometryCalculators />} />
          <Route path="/trigonometry" element={<TrigonometryCalculators />} />
          <Route path="/statistics" element={<StatisticsCalculators />} />
          <Route path="/calculus" element={<CalculusCalculators />} />
          <Route path="/finance" element={<FinanceCalculators />} />
          <Route path="/converters" element={<ConvertersPage />} />
          <Route path="/number-theory" element={<NumberTheoryCalculators />} />
          <Route path="/matrix" element={<MatrixCalculators />} />
          <Route path="/advanced" element={<AdvancedCalculators />} />
          
          {/* Individual Calculator Routes */}
          <Route path="/basic/percentage" element={<PercentageCalculator />} />
          <Route path="/algebra/quadratic" element={<QuadraticCalculator />} />
          <Route path="/geometry/area" element={<AreaCalculator />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
