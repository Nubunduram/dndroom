"use client"
import SignInForm from "@/components/SignInForm";
import SignUpForm from "@/components/SignUpForm";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-8 p-4 bg-primary">
      <SignUpForm />
      <SignInForm />
    </main>
  );
}
