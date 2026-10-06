"use client";

import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 py-10">
      <SignIn
        appearance={{
          variables: {
            colorBackground: "#000000",
            colorPrimary: "#22c55e",
            colorText: "#d1fae5",
            colorInputBackground: "#020617",
            colorInputText: "#d1fae5",
          },
          elements: {
            card: "border border-green-500/30 bg-black shadow-[0_0_40px_rgba(34,197,94,0.15)]",
            headerTitle: "text-green-400",
            headerSubtitle: "text-cyan-400",
            socialButtonsBlockButton:
              "border border-green-500/30 bg-slate-950 text-green-300 hover:bg-slate-900",
            formButtonPrimary:
              "bg-green-500 text-black hover:bg-green-400",
            footerActionLink: "text-cyan-400 hover:text-cyan-300",
            formFieldInput:
              "border border-green-500/30 bg-slate-950 text-green-200",
          },
        }}
        path="/sign-in"
        signUpUrl="/sign-up"
        forceRedirectUrl="/app/terminal"
      />
    </main>
  );
}
