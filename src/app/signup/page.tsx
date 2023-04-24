"use client";

import Button from "@/components/Button";
import Link from "@/components/Link";
import Reviews from "@/components/Reviews";
import SignUpForm from "@/components/SignUpForm";
import Slideshow from "@/components/Slideshow";
import { useRef, useState } from "react";

export default function Home() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmationRef = useRef<HTMLInputElement>(null);
  const [accountType, setAccountType] = useState("student");

  const handleSignUp = () => {
    console.log({
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      passwordConfirmation: passwordConfirmationRef.current?.value,
      accountType,
    });
  };

  return (
    <main className="flex h-screen items-center justify-center">
      <div className="flex rounded-xl bg-slate-50 p-3">
        <div className="flex min-h-full w-96 flex-col justify-between rounded-lg  bg-gradient-to-b from-blue-500 to-blue-600 px-8 py-8 text-slate-50">
          <div className="flex flex-col gap-16">
            <h5 className="font-semibold">GRADEGURU</h5>
            <div className="flex flex-col gap-3">
              <h2 className="text-4xl font-semibold">
                The only grade book you need.
              </h2>
              <h3 className="font-normal">
                Join our community today and make your live easier!
              </h3>
            </div>
          </div>
          <Slideshow length={3}>
            <Reviews currentSlide={0} />
          </Slideshow>
        </div>
        <div className="flex flex-col gap-8 px-8 py-12">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl">Sign Up</h1>
            <h4 className="font-normal">
              Have an account? <Link href="/">Log in</Link>
            </h4>
          </div>
          <SignUpForm
            states={{
              accountType,
              setAccountType,
              emailRef,
              passwordRef,
              passwordConfirmationRef,
            }}
          />
          <Button onClick={handleSignUp}>Sign Up</Button>
        </div>
      </div>
    </main>
  );
}
