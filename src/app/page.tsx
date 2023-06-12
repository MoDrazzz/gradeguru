"use client";

import Button from "@/components/Button";
import Link from "@/components/Link";
import LogInForm from "@/components/LogInForm";
import Logo from "@/components/Logo";

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="flex rounded-xl bg-slate-50 p-3">
        <div className="flex flex-col gap-8 px-8 py-12">
          <Logo />
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl">Welcome back</h1>
            <h4 className="font-normal">
              Are you new? <Link href="/signup">Sign Up</Link>
            </h4>
          </div>
          <LogInForm />
        </div>
      </div>
    </main>
  );
}
