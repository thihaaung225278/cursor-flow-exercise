import { steps } from "@/lib/constants";

import { Card, CardContent } from "../ui/card";

export function HowItWorksSection() {
  return (
    <section className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
            How it works
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            One focused flow from intent to a cleaner Cursor-ready prompt.
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <Card key={step.title}>
                <CardContent className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/60 text-cyan-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm text-slate-500">0{index + 1}</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-6 text-slate-300">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
