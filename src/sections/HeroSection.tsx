import React from "react";
import { cn } from "@/lib/utils";
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
            "text-hero"
          )}
        >
          Building together <br />in real time
        </div>

        <p className="phrase">
          Fast, collaborative, and developer-first, CodeSync makes it effortless to <br></br>
          code, chat, and build together in real time.
        </p>

        <div className="flex gap-4 justify-center">
          <Button variant="default">
            <Link href="/sign-in">Start for free</Link>
          </Button>
          <Button
            variant="outline"
          >
            <Link href="/sign-in">See More</Link>
          </Button>
        </div>

        <div className="flex w-full justify-center mrg">
          <HeroYoutubeModal />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
