import { features } from "@/lib/constants";

import { Card, CardContent } from "../ui/card";

export function FeaturesSection() {
  return (
    <section id="features" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
            Why join early
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            A prompt system designed for implementation clarity, not novelty.
          </h2>
          <p className="text-lg leading-8 text-slate-300">
            The product direction stays focused on practical delivery: better
            structure, sharper constraints, and reusable context for teams.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <Card key={feature.title}>
                <CardContent className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-white">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-6 text-slate-300">
                      {feature.description}
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
