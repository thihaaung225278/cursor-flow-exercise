import { WaitlistForm } from "@/components/waitlist/waitlist-form";

export function WaitlistSection() {
  return (
    <section id="waitlist" className="px-6 py-20 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="space-y-5">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
            Waitlist
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Get notified when the first release opens up.
          </h2>
          <p className="text-lg leading-8 text-slate-300">
            Join now if you want early access, product updates, and a direct
            path into the first onboarding wave.
          </p>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm leading-7 text-slate-300">
            Best fit for builders who care about clear prompt structure,
            component thinking, and execution quality across real product work.
          </div>
        </div>

        <WaitlistForm />
      </div>
    </section>
  );
}
