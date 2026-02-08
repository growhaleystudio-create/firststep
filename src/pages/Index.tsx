import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import Materials from "@/components/Materials";
import Gallery from "@/components/Gallery";
import Locations from "@/components/Locations";
import Footer from "@/components/Footer";
import SocialProof from "@/components/SocialProof";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SocialProof />
      <Hero />
      <WhatWeDo />
      <HowItWorks />
      <Services />
      <Materials />
      <Gallery />
      <Locations />
      <Footer />
    </div>
  );
};

export default Index;