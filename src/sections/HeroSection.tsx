import React from "react";
import { cn } from "@/lib/utils";
import Hero from "./Hero";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { gilroyBold } from "@/lib/utility";
import { HeroYoutubeModal } from "@/components/modals/HeroYoutubeModal";

function HeroSection() {
  return (
    <section className=" ">
      <div className="gap-5 mt-8">
        <div
          className={cn(
            gilroyBold.className,
            "text-4xl md:text-[92px] text-center text-primary md:leading-[10rem] my-8"
          )}
        >
          The Best Streaming Platform<br /> For Developers.
        </div>

        <p className="mb-8 mt-4 text-[25px] text-center text-[#31373D]">
          Powerful, flexible and data-driven, Attio makes it easy to build the br
          exact CRM your business needs.
        </p>

        <div className="flex gap-5 justify-center mb-8">
          <Button variant="default">
            <Link href="/sign-in">Start for free</Link>
          </Button>
          <Button
            variant="outline"
          >
            <Link href="/sign-in">Talk to sales</Link>
          </Button>
        </div>

        <div className="flex w-full justify-center">
          <HeroYoutubeModal />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
