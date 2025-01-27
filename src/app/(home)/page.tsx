"use client";
import LoaderUI from "@/components/LoaderUI";
import Hero from "@/sections/Hero";
import HeroSection from "@/sections/HeroSection";
import Navbar from "@/sections/Navbar";
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
    <>
      <Navbar />
      <div className="pt-16">
        <Hero />
      </div>
      <HeroSection />
      {/* <Footer/> */}
    </>
  );
}
