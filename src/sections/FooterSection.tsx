import { Button } from "@/components/ui/button";
import { CodeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

function FooterSection() {
  const data = {
    Product: ["Changelog", "Customer stories", "Security", "Chrome extension"],
    Company: ["About", "Blog", "Links", "Brand"],
    Codevox: ["Startups", "Dear flow"],
    Support: ["Help Center", "Talk to support", "FAQ"],
  };
  return (
    <section className="footer-con">
      <div>
        {/* <img src="/images/footer_logo.svg" alt="footer logo" /> */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-2xl font-mono hover:opacity-80 transition-opacity"
        >
          <CodeIcon className="w-12 h-12 text-emerald-500" />
          <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent text-3xl">
            Codevox
          </span>
        </Link>
      </div>

      <div className="foot">
        <div>
          <p className="items">Company</p>
          <div className="items-cont">
            {data.Company.map((item, index) => (
              <p key={index} className="items-par">
                {item}
              </p>
            ))}
          </div>
        </div>
        <div>
          <p className="items">About</p>
          <div className="items-cont">
            {data.Product.map((item, index) => (
              <p key={index} className="items-par">
                {item}
              </p>
            ))}
          </div>
        </div>
        <div>
          <p className="items">Attio for</p>
          <div className="items-cont">
            {data.Codevox.map((item, index) => (
              <p key={index} className="items-par">
                {item}
              </p>
            ))}
          </div>
        </div>
        <div>
          <p className="items">Support</p>
          <div className="items-cont">
            {data.Support.map((item, index) => (
              <p key={index} className="items-par">
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="butt-con">
          <p className="butt-con-text">Ready to Stream?</p>
          <div className="butt-div">
            <Button variant="default">
              <Link href="/sign-in">Start Here</Link>
            </Button>
            <Button variant="outline">
              <Link href="/sign-up">Start Here</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FooterSection;
