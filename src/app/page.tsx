import BestSeller from "@/components/BestSeller";
import Hero from "@/components/Hero";
import OurProducts from "@/components/Ourproducts";
import WhyChooseUs from "@/components/WhyChooseus";


export default function Home() {
  return (
    <div className="min-h-[300vh] overflow-hidden">
      <main className="">
        <Hero />
        <BestSeller />
        <OurProducts />
        <WhyChooseUs />
      </main>
    </div>
  );
}
