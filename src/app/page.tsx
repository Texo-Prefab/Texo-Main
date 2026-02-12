import BestSeller from "@/components/BestSeller";
import BlogsSection from "@/components/Blogs";
import CustomerReview from "@/components/CustomerReview";
import Hero from "@/components/Hero";
import OurClients from "@/components/OurClients";
import OurPortfolio from "@/components/OurPortfolio";
import OurProcess from "@/components/OurProcess";
import OurProducts from "@/components/Ourproducts";
import VlogsSection from "@/components/Vlogs";
import WhyChooseUs from "@/components/WhyChooseus";


export default function Home() {
  return (
    <div className="min-h-[300vh] overflow-hidden">
      <main className="relative">
        <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#886c46] rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#6f5838] rounded-full blur-[120px]" />
      </div>

      <div className="absolute inset-0 opacity-[0.07]" 
        style={{
          backgroundImage: `linear-gradient(#886c46 1px, transparent 1px), linear-gradient(90deg, #886c46 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
        <Hero />
        <BestSeller />
        <OurProducts />
        <OurProcess />
        <WhyChooseUs />
        <OurPortfolio />
        <OurClients />
        <BlogsSection />
        <VlogsSection />
        <CustomerReview />
      </main>
    </div>
  );
}
