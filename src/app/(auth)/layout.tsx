"use client";

import LoaderUI from "@/components/LoaderUI";
import { useEffect, useState } from "react";

function Layout({ children }: { children: React.ReactNode }) {
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
      <main className="flex w-full h-screen justify-center items-center">
        {children}
      </main>
    </>
  );
}
export default Layout;
