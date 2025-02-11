import { gilroyBold } from "@/lib/utility";
import { cn } from "@/lib/utils";
import React from "react";

function CustomHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex">
      <div className="w-32 md:w-16">
        <img src="/images/fancy_square.svg" alt="desktop icon" />
      </div>
      <div>
        <p
          className={cn(
            gilroyBold.className,
            "text-3xl md:text-[52px] text-secondary-foreground"
          )}
        >
          {title}
        </p>
        <p className="text-[#59636d] text-[22px] mt-4">{description}</p>
      </div>
    </div>
  );
}

export default CustomHeader;
