import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
  color: string;
  calculatorCount: number;
  index: number;
}

export const CategoryCard = ({
  title,
  description,
  icon: Icon,
  path,
  color,
  calculatorCount,
  index,
}: CategoryCardProps) => {
  return (
    <div
      className="animate-in fade-in slide-in-from-bottom-4 duration-500"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <Link
        to={path}
        className="group block h-full p-6 rounded-2xl bg-card border border-border card-shadow hover:card-shadow-lg transition-all duration-300 hover:-translate-y-1"
      >
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
          style={{ backgroundColor: `${color}15` }}
        >
          <Icon className="h-6 w-6" style={{ color }} />
        </div>

        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-muted-foreground">
            {calculatorCount} calculators
          </span>
          <span
            className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ color }}
          >
            Explore →
          </span>
        </div>
      </Link>
    </div>
  );
};
