"use client";

import Link from "next/link";
import { CodeIcon } from "lucide-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import LoaderUI from "@/components/LoaderUI";
import DasboardBtn from "@/components/DasboardBtn";
import { ModeToggle } from "@/components/ModeToggle";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQs", href: "#faqs" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <nav className="border-b">
      <div className="flex items-center justify-between h-16 px-4 lg:px-8 container mx-auto">
        {/* LEFT SIDE - LOGO */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-2xl font-mono hover:opacity-80 transition-opacity"
        >
          <CodeIcon className="w-8 h-8 text-emerald-500" />
          <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            CodeSync
          </span>
        </Link>

        <div className="hidden md:flex gap-6 w-full justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-primary text-secondary-foreground transition"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <SignedIn>
            <DasboardBtn />
            <ModeToggle />
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <ModeToggle />
            <Link href="/sign-in">
              <Button variant="default">Login</Button>
            </Link>
            <Link href="/sign-up">
              <Button variant="outline">Sign Up</Button>
            </Link>
          </SignedOut>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="flex justify-end mr-4 items-center gap-4 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-menu cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <line
              x1="3"
              y1="6"
              x2="21"
              y2="6"
              className={twMerge(
                "origin-left transition",
                isOpen && "rotate-45 -translate-y-1"
              )}
            ></line>
            <line
              x1="3"
              y1="12"
              x2="21"
              y2="12"
              className={twMerge("transition", isOpen && "opacity-0")}
            ></line>
            <line
              x1="3"
              y1="18"
              x2="21"
              y2="18"
              className={twMerge(
                "origin-left transition",
                isOpen && "-rotate-45 translate-y-1"
              )}
            ></line>
          </svg>
        </div>
      </div>

      {/* MOBILE NAVIGATION */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="overflow-hidden lg:hidden bg-secondary"
          >
            <div className="flex flex-col items-center gap-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="hover:text-primary text-secondary-foreground transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <SignedIn>
                <DasboardBtn />
                <ModeToggle />
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
              <SignedOut>
                <Link href="/sign-in">
                  <Button variant="default" onClick={() => setIsOpen(false)}>
                    Login
                  </Button>
                </Link>
                <Link href="/sign-up">
                  <Button variant="outline" onClick={() => setIsOpen(false)}>
                    Sign Up
                  </Button>
                </Link>
              </SignedOut>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;