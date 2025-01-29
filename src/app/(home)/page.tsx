"use client";
import LoaderUI from "@/components/LoaderUI";
import FooterSection from "@/sections/FooterSection";
import Hero from "@/sections/Hero";
import HeroSection from "@/sections/HeroSection";
import LovedByBuildersSection from "@/sections/LovedByBuildersSection";
import MarqueeSection from "@/sections/MarqueeSection";
import Navbar from "@/sections/Navbar";
import ReadyToBuildSection from "@/sections/ReadyToBuildSection";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true); // Simulating loading completion
    }, 1000); // Set the delay to your preference

    return () => clearTimeout(timer); // Cleanup the timeout on unmount
  }, []);

  if (!isLoaded) {
    return <LoaderUI />; // Show loader if not loaded
  }
  return (
    <div>
      <div className="px-4 sm:px-6 lg:px-8">
        <Navbar />
        <div className="pt-16">
          <Hero />
        </div>
        <HeroSection />
        <div className="padding">
          <MarqueeSection />
        </div>
      </div>
      <div className="">
          <LovedByBuildersSection />
        </div>
      <div className="">
        <ReadyToBuildSection/>
      </div>
      <div className="">
        <FooterSection />
      </div>
    </div>
  );
}
