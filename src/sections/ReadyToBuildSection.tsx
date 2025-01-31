import MainButton from "@/components/common/MainButton";
import { gilroyBold } from "@/lib/utility";
import { cn } from "@/lib/utils";
import React from "react";

function ReadyToBuildSection() {
  return (
    <section className="build-sec">
      <div>
        <p
          className={cn(
            gilroyBold.className,
            "build-text"
          )}
        >
          Ready to start your stream{" "}
          <span className="text-white">coding STREAM?</span>
        </p>
        <div className="build-btn">
          <MainButton
            text="Start here"
            size="small"
            className="btn-build-start"
          />
          <MainButton
            text="Create account"
            size="small"
            className="btn-build-tlk"
          />
        </div>
      </div>
      <div className="">
        <img className="" src="/images/ready_to_build.png" alt="security" />
      </div>
    </section>
  );
}

export default ReadyToBuildSection;