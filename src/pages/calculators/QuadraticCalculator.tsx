import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { FunctionSquare, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface Solution {
  discriminant: number;
  x1: string;
  x2: string;
  nature: string;
  vertex: { x: string; y: string };
}

const QuadraticCalculator = () => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [solution, setSolution] = useState<Solution | null>(null);
  const [error, setError] = useState("");

  const solve = () => {
    setError("");
    setSolution(null);

    const aNum = parseFloat(a);
    const bNum = parseFloat(b);
    const cNum = parseFloat(c);

    if (isNaN(aNum) || isNaN(bNum) || isNaN(cNum)) {
      setError("Please enter valid numbers for a, b, and c");
      return;
    }

    if (aNum === 0) {
      setError("Coefficient 'a' cannot be zero (that would make it linear)");
      return;
    }

    const discriminant = bNum * bNum - 4 * aNum * cNum;
    const vertexX = -bNum / (2 * aNum);
    const vertexY = aNum * vertexX * vertexX + bNum * vertexX + cNum;

    let x1: string, x2: string, nature: string;

    if (discriminant > 0) {
      const sqrtD = Math.sqrt(discriminant);
      x1 = ((-bNum + sqrtD) / (2 * aNum)).toFixed(6).replace(/\.?0+$/, "");
      x2 = ((-bNum - sqrtD) / (2 * aNum)).toFixed(6).replace(/\.?0+$/, "");
      nature = "Two distinct real roots";
    } else if (discriminant === 0) {
      x1 = x2 = (-bNum / (2 * aNum)).toFixed(6).replace(/\.?0+$/, "");
      nature = "One repeated real root";
    } else {
      const realPart = (-bNum / (2 * aNum)).toFixed(4).replace(/\.?0+$/, "");
      const imagPart = (Math.sqrt(-discriminant) / (2 * aNum)).toFixed(4).replace(/\.?0+$/, "");
      x1 = `${realPart} + ${imagPart}i`;
      x2 = `${realPart} - ${imagPart}i`;
      nature = "Two complex conjugate roots";
    }

    setSolution({
      discriminant,
      x1,
      x2,
      nature,
      vertex: {
        x: vertexX.toFixed(4).replace(/\.?0+$/, ""),
        y: vertexY.toFixed(4).replace(/\.?0+$/, ""),
      },
    });
  };

  return (
    <Layout>
      <div className="container py-12">
        <Link
          to="/algebra"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Algebra Calculators
        </Link>

        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: "hsl(280, 60%, 55%, 0.1)" }}>
            <FunctionSquare className="h-7 w-7" style={{ color: "hsl(280, 60%, 55%)" }} />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Quadratic Equation Solver</h1>
            <p className="text-muted-foreground">Solve ax² + bx + c = 0 with step-by-step solutions</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Enter Coefficients</CardTitle>
              <CardDescription>For the equation ax² + bx + c = 0</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-center gap-2 text-2xl font-mono p-4 bg-muted rounded-xl">
                <span className="text-primary font-bold">{a || "a"}</span>
                <span>x² +</span>
                <span className="text-primary font-bold">{b || "b"}</span>
                <span>x +</span>
                <span className="text-primary font-bold">{c || "c"}</span>
                <span>= 0</span>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="a">a (x² coefficient)</Label>
                  <Input
                    id="a"
                    type="number"
                    placeholder="1"
                    value={a}
                    onChange={(e) => setA(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="b">b (x coefficient)</Label>
                  <Input
                    id="b"
                    type="number"
                    placeholder="0"
                    value={b}
                    onChange={(e) => setB(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="c">c (constant)</Label>
                  <Input
                    id="c"
                    type="number"
                    placeholder="0"
                    value={c}
                    onChange={(e) => setC(e.target.value)}
                  />
                </div>
              </div>

              <Button onClick={solve} className="w-full" size="lg">
                Solve Equation
              </Button>

              {error && (
                <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive">
                  {error}
                </div>
              )}
            </CardContent>
          </Card>

          {solution && (
            <Card className="animate-in fade-in slide-in-from-right-4 duration-300">
              <CardHeader>
                <CardTitle>Solution</CardTitle>
                <CardDescription>{solution.nature}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                    <p className="text-sm text-muted-foreground mb-1">x₁</p>
                    <p className="text-2xl font-bold font-mono text-primary">{solution.x1}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                    <p className="text-sm text-muted-foreground mb-1">x₂</p>
                    <p className="text-2xl font-bold font-mono text-primary">{solution.x2}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Discriminant (Δ)</span>
                    <span className="font-mono font-medium">{solution.discriminant}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Vertex</span>
                    <span className="font-mono font-medium">({solution.vertex.x}, {solution.vertex.y})</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">Parabola opens</span>
                    <span className="font-medium">{parseFloat(a) > 0 ? "Upward ↑" : "Downward ↓"}</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-muted">
                  <p className="text-sm font-medium mb-2">Formula Used</p>
                  <p className="font-mono text-sm">x = (-b ± √(b² - 4ac)) / 2a</p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default QuadraticCalculator;
