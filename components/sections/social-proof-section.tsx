import { audience } from "@/lib/constants";

export function SocialProofSection() {
  return (
    <section className="border-y border-white/10 bg-white/[0.02] px-6 py-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
          Built for teams shaping AI-assisted delivery
        </p>
        <div className="flex flex-col gap-3 text-sm text-slate-300 sm:flex-row sm:flex-wrap sm:justify-end">
          {audience.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-slate-950/60 px-4 py-2"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
