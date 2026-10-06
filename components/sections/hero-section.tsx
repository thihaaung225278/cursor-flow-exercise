import { ArrowRight, Sparkles } from "lucide-react";

import { siteConfig, stats } from "@/lib/constants";

import { Button } from "../ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-16 lg:px-8 lg:pb-24 lg:pt-24">
      <div className="absolute inset-x-0 top-0 -z-10 mx-auto h-64 max-w-5xl rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
            <Sparkles className="h-4 w-4" />
            Developer-centric prompt tooling
          </div>

          <div className="space-y-5">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-400">
              {siteConfig.eyebrow}
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Build cleaner prompts for Cursor without slowing down product work.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              {siteConfig.description}
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a href={siteConfig.ctaHref}>
              <Button size="lg">
                {siteConfig.ctaLabel}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
            <a href="#features">
              <Button size="lg" variant="secondary">
                Explore the workflow
              </Button>
            </a>
          </div>
        </div>

        <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_60px_rgba(8,145,178,0.12)]">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-slate-950/70 p-5"
            >
              <div className="text-3xl font-semibold text-white">{stat.value}</div>
              <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
