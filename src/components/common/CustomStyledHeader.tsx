import { gilroyBold } from "@/lib/utility";
import { cn } from "@/lib/utils";
import React from "react";

function CustomStyledHeader({
  titleColored,
  titleUnColored,
  description,
}: {
  titleColored: string;
  titleUnColored: string;
  description: string;
}) {
  return (
    <div>
      <p
        className={cn(
          gilroyBold.className,
          "texture text-primary"
        )}
      >
        {titleColored} <span className="text-white">{titleUnColored}</span>
      </p>
      <p className="desc">{description}</p>
    </div>
  );
}

export default CustomStyledHeader;