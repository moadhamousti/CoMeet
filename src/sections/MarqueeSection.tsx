"use client";

import quantumLogo from "../../public/images/bravado.png";
import acmeLogo from "../../public/images/hyperlane.png";
import echoValleyLogo from "../../public/images/on_deck.png";
import pulseLogo from "../../public/images/open_ai.png";
import outsideLogo from "../../public/images/pallet.png";
import apexLogo from "../../public/images/causal.png";
import celestialLogo from "../../public/images/plain.png";
import twiceLogo from "../../public/images/passion_front.png";
import Image from "next/image";
import { Fragment } from "react";
import { motion } from "framer-motion";
import { cn, gilroyBold } from "@/lib/utility";

const logos = [
  { name: "Quantum", image: quantumLogo },
  { name: "Acme Corp", image: acmeLogo },
  { name: "Echo Valley", image: echoValleyLogo },
  { name: "Pulse", image: pulseLogo },
  { name: "Outside", image: outsideLogo },
  { name: "Apex", image: apexLogo },
  { name: "Celestial", image: celestialLogo },
  { name: "Twice", image: twiceLogo },
];

export default function LogoTicker() {
  return (
    <section className="marq-over">
      <div className="container">
        {/* <div className={cn(gilroyBold.className, "text-sec")}>
          Already chosen by these market leaders
        </div> */}
        <div className="linear">
          <motion.div
            animate={{
              x: "-50%",
            }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
            className="trans"
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <Fragment key={i}>
                {logos.map((logo) => (
                  <Image src={logo.image} key={logo.name} alt={logo.name} />
                ))}
              </Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
