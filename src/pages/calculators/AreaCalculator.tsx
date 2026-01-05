import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Ruler, ArrowLeft, Square, RectangleHorizontal, Triangle, Circle } from "lucide-react";
import { Link } from "react-router-dom";

type ShapeType = "square" | "rectangle" | "triangle" | "circle";

const AreaCalculator = () => {
  const [shape, setShape] = useState<ShapeType>("square");
  const [dimensions, setDimensions] = useState({
    side: "",
    length: "",
    width: "",
    base: "",
    height: "",
    radius: "",
  });
  const [result, setResult] = useState<{ area: string; perimeter: string } | null>(null);

  const calculate = () => {
    let area = 0;
    let perimeter = 0;

    switch (shape) {
      case "square": {
        const s = parseFloat(dimensions.side);
        if (!isNaN(s)) {
          area = s * s;
          perimeter = 4 * s;
        }
        break;
      }
      case "rectangle": {
        const l = parseFloat(dimensions.length);
        const w = parseFloat(dimensions.width);
        if (!isNaN(l) && !isNaN(w)) {
          area = l * w;
          perimeter = 2 * (l + w);
        }
        break;
      }
      case "triangle": {
        const b = parseFloat(dimensions.base);
        const h = parseFloat(dimensions.height);
        if (!isNaN(b) && !isNaN(h)) {
          area = 0.5 * b * h;
          perimeter = 0; // Can't calculate without all sides
        }
        break;
      }
      case "circle": {
        const r = parseFloat(dimensions.radius);
        if (!isNaN(r)) {
          area = Math.PI * r * r;
          perimeter = 2 * Math.PI * r;
        }
        break;
      }
    }

    if (area > 0) {
      setResult({
        area: area.toFixed(6).replace(/\.?0+$/, ""),
        perimeter: perimeter > 0 ? perimeter.toFixed(6).replace(/\.?0+$/, "") : "N/A",
      });
    }
  };

  const shapeIcons: Record<ShapeType, React.ReactNode> = {
    square: <Square className="h-5 w-5" />,
    rectangle: <RectangleHorizontal className="h-5 w-5" />,
    triangle: <Triangle className="h-5 w-5" />,
    circle: <Circle className="h-5 w-5" />,
  };

  const renderInputs = () => {
    switch (shape) {
      case "square":
        return (
          <div className="space-y-2">
            <Label htmlFor="side">Side Length</Label>
            <Input
              id="side"
              type="number"
              placeholder="Enter side length"
              value={dimensions.side}
              onChange={(e) => setDimensions({ ...dimensions, side: e.target.value })}
            />
          </div>
        );
      case "rectangle":
        return (
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="length">Length</Label>
              <Input
                id="length"
                type="number"
                placeholder="Enter length"
                value={dimensions.length}
                onChange={(e) => setDimensions({ ...dimensions, length: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="width">Width</Label>
              <Input
                id="width"
                type="number"
                placeholder="Enter width"
                value={dimensions.width}
                onChange={(e) => setDimensions({ ...dimensions, width: e.target.value })}
              />
            </div>
          </div>
        );
      case "triangle":
        return (
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="base">Base</Label>
              <Input
                id="base"
                type="number"
                placeholder="Enter base"
                value={dimensions.base}
                onChange={(e) => setDimensions({ ...dimensions, base: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="height">Height</Label>
              <Input
                id="height"
                type="number"
                placeholder="Enter height"
                value={dimensions.height}
                onChange={(e) => setDimensions({ ...dimensions, height: e.target.value })}
              />
            </div>
          </div>
        );
      case "circle":
        return (
          <div className="space-y-2">
            <Label htmlFor="radius">Radius</Label>
            <Input
              id="radius"
              type="number"
              placeholder="Enter radius"
              value={dimensions.radius}
              onChange={(e) => setDimensions({ ...dimensions, radius: e.target.value })}
            />
          </div>
        );
    }
  };

  const getFormula = () => {
    switch (shape) {
      case "square":
        return "Area = side²";
      case "rectangle":
        return "Area = length × width";
      case "triangle":
        return "Area = ½ × base × height";
      case "circle":
        return "Area = π × radius²";
    }
  };

  return (
    <Layout>
      <div className="container py-12">
        <Link
          to="/geometry"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Geometry Calculators
        </Link>

        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: "hsl(160, 60%, 45%, 0.1)" }}>
            <Ruler className="h-7 w-7" style={{ color: "hsl(160, 60%, 45%)" }} />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Area Calculator</h1>
            <p className="text-muted-foreground">Calculate area for squares, rectangles, triangles & circles</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Select Shape & Enter Dimensions</CardTitle>
              <CardDescription>Choose a shape and enter its measurements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Shape</Label>
                <Select value={shape} onValueChange={(v) => { setShape(v as ShapeType); setResult(null); }}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="square">
                      <div className="flex items-center gap-2">
                        <Square className="h-4 w-4" /> Square
                      </div>
                    </SelectItem>
                    <SelectItem value="rectangle">
                      <div className="flex items-center gap-2">
                        <RectangleHorizontal className="h-4 w-4" /> Rectangle
                      </div>
                    </SelectItem>
                    <SelectItem value="triangle">
                      <div className="flex items-center gap-2">
                        <Triangle className="h-4 w-4" /> Triangle
                      </div>
                    </SelectItem>
                    <SelectItem value="circle">
                      <div className="flex items-center gap-2">
                        <Circle className="h-4 w-4" /> Circle
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {renderInputs()}

              <Button onClick={calculate} className="w-full" size="lg">
                Calculate Area
              </Button>

              <div className="p-4 rounded-xl bg-muted">
                <p className="text-sm font-medium mb-1">Formula</p>
                <p className="font-mono">{getFormula()}</p>
              </div>
            </CardContent>
          </Card>

          {result && (
            <Card className="animate-in fade-in slide-in-from-right-4 duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {shapeIcons[shape]} {shape.charAt(0).toUpperCase() + shape.slice(1)} Calculation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                  <p className="text-sm text-muted-foreground mb-2">Area</p>
                  <p className="text-4xl font-bold font-mono text-primary">{result.area}</p>
                  <p className="text-sm text-muted-foreground mt-1">square units</p>
                </div>

                {result.perimeter !== "N/A" && (
                  <div className="p-6 rounded-xl bg-secondary">
                    <p className="text-sm text-muted-foreground mb-2">
                      {shape === "circle" ? "Circumference" : "Perimeter"}
                    </p>
                    <p className="text-3xl font-bold font-mono">{result.perimeter}</p>
                    <p className="text-sm text-muted-foreground mt-1">units</p>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default AreaCalculator;
