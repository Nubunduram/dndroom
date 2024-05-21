import SignInForm from "@/components/SignInForm";
import SignUpForm from "@/components/SignUpForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-primary">
      <SignInForm />
    </main>
  );
}
