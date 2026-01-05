import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { FeaturedCalculators } from "@/components/home/FeaturedCalculators";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedCalculators />
      <CategoriesSection />
    </Layout>
  );
};

export default Index;
