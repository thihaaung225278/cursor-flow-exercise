"use client";

/*
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { FaqSection } from "@/components/sections/faq-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { SocialProofSection } from "@/components/sections/social-proof-section";
import { WaitlistSection } from "@/components/sections/waitlist-section";
*/
import type { SVGProps } from "react";
import { useEffect, useState } from "react";

import {
  ArrowRight,
  Braces,
  Layers3,
  Sparkles,
  Workflow,
  Youtube,
} from "lucide-react";

import { LanguageToggle } from "@/components/layout/language-toggle";
import { useLocale } from "@/components/providers/locale-provider";
import { WaitlistForm } from "@/components/waitlist/waitlist-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/*
const features = [
  {
    icon: Layers3,
    command: "..single",
    title: "9 Framework Prompts",
    description:
      "React, Next.js, Vue, Nuxt and more with cleaner prompt scaffolds for focused delivery.",
  },
  {
    icon: Workflow,
    command: "..chain",
    title: "3-Step Workflow",
    description:
      "Go from idea to structured prompt flow with a repeatable sequence built for teams.",
  },
  {
    icon: Braces,
    command: "..init",
    title: "Project Starter",
    description:
      "Kick off new builds with prompt presets that preserve architecture, constraints, and tone.",
  },
];
*/

const featureIcons = [Layers3, Workflow, Braces];

function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.12v12.11a2.89 2.89 0 1 1-2-2.75V8.19a6 6 0 1 0 5.95 5.92V8.03a7.9 7.9 0 0 0 4.62 1.48V6.69h-1.68Z" />
    </svg>
  );
}

export default function Home() {
  const { t } = useLocale();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    /*
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.14),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.12),_transparent_30%)]" />
        <SiteHeader />
        <HeroSection />
        <SocialProofSection />
        <FeaturesSection />
        <HowItWorksSection />
        <WaitlistSection />
        <FaqSection />
        <SiteFooter />
      </div>
    </main>
    */
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.14),_transparent_34%)]" />

        <section className="border-b border-white/10 px-6 py-4 lg:px-8">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold tracking-wide text-white">
                {t.header.brand}
              </p>
              <p className="text-xs text-slate-400">
                {t.header.tagline}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <LanguageToggle />
              <a href="#waitlist">
                <Button size="lg">
                  {t.common.joinWaitlist}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
                <Sparkles className="h-4 w-4" />
                {t.hero.badge}
              </div>

              <div className="space-y-5">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                  {t.hero.eyebrow}
                </p>
                <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  {t.hero.title}
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-300">
                  {t.hero.description}
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a href="#waitlist">
                  <Button size="lg">{t.common.joinWaitlist}</Button>
                </a>
                <a href="#features">
                  <Button size="lg" variant="secondary">
                    {t.common.exploreFeatures}
                  </Button>
                </a>
              </div>
            </div>

            <Card className="border-indigo-400/20 bg-white/[0.04] shadow-[0_0_60px_rgba(79,70,229,0.18)]">
              <CardContent className="space-y-6 p-7">
                <div className="space-y-2">
                  <p className="font-mono text-sm text-cyan-300">
                    {t.heroCard.previewLabel}
                  </p>
                  <h2 className="text-2xl font-semibold text-white">
                    {t.heroCard.title}
                  </h2>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                    <p className="font-mono text-sm text-indigo-300">{t.heroCard.stat1Value}</p>
                    <p className="mt-2 text-sm text-slate-300">
                      {t.heroCard.stat1Label}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                    <p className="font-mono text-sm text-cyan-300">{t.heroCard.stat2Value}</p>
                    <p className="mt-2 text-sm text-slate-300">
                      {t.heroCard.stat2Label}
                    </p>
                  </div>
                </div>
                <p className="text-sm leading-7 text-slate-400">
                  {t.heroCard.description}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="features" className="px-6 py-8 lg:px-8 lg:py-12">
          <div className="mx-auto max-w-6xl space-y-8">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
                {t.features.sectionLabel}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {t.features.sectionTitle}
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {t.features.items.map((feature, index) => {
                const Icon = featureIcons[index];

                return (
                  <Card key={feature.command} className="h-full">
                    <CardContent className="flex h-full flex-col space-y-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="space-y-2">
                        <p className="font-mono text-sm text-indigo-300">
                          {feature.command}
                        </p>
                        <h3 className="text-xl font-semibold text-white">
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

        <section id="waitlist" className="px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
                {t.waitlist.sectionLabel}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {t.waitlist.sectionTitle}
              </h2>
              <p className="text-lg leading-8 text-slate-300">
                {t.waitlist.sectionDescription}
              </p>
            </div>

            <WaitlistForm
              title={t.waitlist.formTitle}
              description={t.waitlist.formDescription}
              buttonLabel={t.common.joinWaitlist}
              placeholder={t.waitlist.placeholder}
              helperCopy={t.waitlist.helperCopy}
              successTitle={t.waitlist.successTitle}
              successDescription={t.waitlist.successDescription}
            />
          </div>
        </section>

        <footer className="border-t border-white/10 px-6 py-8 lg:px-8">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between">
            <p>{t.footer.copyright}</p>
            <div className="flex items-center gap-4">
              <a
                className="inline-flex items-center gap-2 hover:text-white"
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
              >
                <Youtube className="h-4 w-4" />
                {t.common.youtube}
              </a>
              <a
                className="inline-flex items-center gap-2 hover:text-white"
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
              >
                <TikTokIcon className="h-4 w-4" />
                {t.common.tiktok}
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
