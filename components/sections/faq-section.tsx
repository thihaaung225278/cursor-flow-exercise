import { faqs } from "@/lib/constants";

import { Card, CardContent } from "../ui/card";

export function FaqSection() {
  return (
    <section className="px-6 pb-24 pt-8 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">FAQ</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            A few quick answers before you sign up.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {faqs.map((item) => (
            <Card key={item.question}>
              <CardContent className="space-y-3">
                <h3 className="text-lg font-semibold text-white">
                  {item.question}
                </h3>
                <p className="text-sm leading-6 text-slate-300">{item.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
