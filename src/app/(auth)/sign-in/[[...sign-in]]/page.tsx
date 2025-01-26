import { SignIn } from "@clerk/nextjs";
import React from "react";

export default function SignInPage() {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <SignIn/>
    </div>
  );
}
