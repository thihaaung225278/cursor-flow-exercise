import { ArrowRight } from "lucide-react";

import { siteConfig } from "@/lib/constants";

import { Button } from "../ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <div>
          <p className="text-sm font-semibold text-white">{siteConfig.name}</p>
          <p className="text-xs text-slate-400">{siteConfig.eyebrow}</p>
        </div>
        <a href={siteConfig.ctaHref}>
          <Button variant="secondary" size="lg">
            {siteConfig.ctaLabel}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </a>
      </div>
    </header>
  );
}
