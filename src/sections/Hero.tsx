import { ChevronRight } from "lucide-react";
import React from "react";

function Hero() {
  return (
    <div className="pt-8 flex items-start justify-center">
      <div className="inline-flex items-center gap-2 bg-secondary p-3 rounded-full shadow-md">
        <div className="bg-primary text-white px-2 py-1 rounded-full text-[10px] font-semibold border">
          New
        </div>
        <p className="text-gray-800 text-sm font-medium">
          How Pallet uses Attio to power their GTM
        </p>
        <div className="text-gray-500">
          <ChevronRight size={18} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
