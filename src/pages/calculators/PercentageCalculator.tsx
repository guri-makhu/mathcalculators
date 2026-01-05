import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Percent, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PercentageCalculator = () => {
  const [percentOf, setPercentOf] = useState({ percent: "", number: "", result: "" });
  const [whatPercent, setWhatPercent] = useState({ part: "", whole: "", result: "" });
  const [percentChange, setPercentChange] = useState({ from: "", to: "", result: "" });

  const calculatePercentOf = () => {
    const p = parseFloat(percentOf.percent);
    const n = parseFloat(percentOf.number);
    if (!isNaN(p) && !isNaN(n)) {
      setPercentOf({ ...percentOf, result: ((p / 100) * n).toFixed(4).replace(/\.?0+$/, "") });
    }
  };

  const calculateWhatPercent = () => {
    const part = parseFloat(whatPercent.part);
    const whole = parseFloat(whatPercent.whole);
    if (!isNaN(part) && !isNaN(whole) && whole !== 0) {
      setWhatPercent({ ...whatPercent, result: ((part / whole) * 100).toFixed(4).replace(/\.?0+$/, "") + "%" });
    }
  };

  const calculatePercentChange = () => {
    const from = parseFloat(percentChange.from);
    const to = parseFloat(percentChange.to);
    if (!isNaN(from) && !isNaN(to) && from !== 0) {
      const change = ((to - from) / from) * 100;
      const sign = change >= 0 ? "+" : "";
      setPercentChange({ ...percentChange, result: sign + change.toFixed(2) + "%" });
    }
  };

  return (
    <Layout>
      <div className="container py-12">
        <Link
          to="/basic"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Basic Calculators
        </Link>

        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-primary/10">
            <Percent className="h-7 w-7 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Percentage Calculator</h1>
            <p className="text-muted-foreground">Calculate percentages, increases, decreases and more</p>
          </div>
        </div>

        <Card className="max-w-2xl">
          <CardHeader>
            <CardTitle>Calculate Percentages</CardTitle>
            <CardDescription>Choose the type of calculation you need</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="percent-of" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="percent-of">% of Number</TabsTrigger>
                <TabsTrigger value="what-percent">What %?</TabsTrigger>
                <TabsTrigger value="percent-change">% Change</TabsTrigger>
              </TabsList>

              <TabsContent value="percent-of" className="space-y-4 mt-6">
                <p className="text-sm text-muted-foreground">What is X% of Y?</p>
                <div className="flex flex-wrap items-center gap-3">
                  <Label className="text-lg">What is</Label>
                  <Input
                    type="number"
                    placeholder="10"
                    className="w-24"
                    value={percentOf.percent}
                    onChange={(e) => setPercentOf({ ...percentOf, percent: e.target.value })}
                  />
                  <Label className="text-lg">% of</Label>
                  <Input
                    type="number"
                    placeholder="200"
                    className="w-24"
                    value={percentOf.number}
                    onChange={(e) => setPercentOf({ ...percentOf, number: e.target.value })}
                  />
                  <Label className="text-lg">?</Label>
                </div>
                <Button onClick={calculatePercentOf} className="w-full">Calculate</Button>
                {percentOf.result && (
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                    <p className="text-sm text-muted-foreground mb-1">Result</p>
                    <p className="text-3xl font-bold text-primary font-mono">{percentOf.result}</p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="what-percent" className="space-y-4 mt-6">
                <p className="text-sm text-muted-foreground">X is what percent of Y?</p>
                <div className="flex flex-wrap items-center gap-3">
                  <Input
                    type="number"
                    placeholder="25"
                    className="w-24"
                    value={whatPercent.part}
                    onChange={(e) => setWhatPercent({ ...whatPercent, part: e.target.value })}
                  />
                  <Label className="text-lg">is what % of</Label>
                  <Input
                    type="number"
                    placeholder="100"
                    className="w-24"
                    value={whatPercent.whole}
                    onChange={(e) => setWhatPercent({ ...whatPercent, whole: e.target.value })}
                  />
                  <Label className="text-lg">?</Label>
                </div>
                <Button onClick={calculateWhatPercent} className="w-full">Calculate</Button>
                {whatPercent.result && (
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                    <p className="text-sm text-muted-foreground mb-1">Result</p>
                    <p className="text-3xl font-bold text-primary font-mono">{whatPercent.result}</p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="percent-change" className="space-y-4 mt-6">
                <p className="text-sm text-muted-foreground">Percentage change from X to Y</p>
                <div className="flex flex-wrap items-center gap-3">
                  <Label className="text-lg">From</Label>
                  <Input
                    type="number"
                    placeholder="50"
                    className="w-24"
                    value={percentChange.from}
                    onChange={(e) => setPercentChange({ ...percentChange, from: e.target.value })}
                  />
                  <Label className="text-lg">to</Label>
                  <Input
                    type="number"
                    placeholder="75"
                    className="w-24"
                    value={percentChange.to}
                    onChange={(e) => setPercentChange({ ...percentChange, to: e.target.value })}
                  />
                </div>
                <Button onClick={calculatePercentChange} className="w-full">Calculate</Button>
                {percentChange.result && (
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                    <p className="text-sm text-muted-foreground mb-1">Percentage Change</p>
                    <p className="text-3xl font-bold text-primary font-mono">{percentChange.result}</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default PercentageCalculator;
