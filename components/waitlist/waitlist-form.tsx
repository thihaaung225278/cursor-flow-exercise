"use client";

import { FormEvent, useMemo, useState } from "react";
import { CheckCircle2, LoaderCircle, MailWarning } from "lucide-react";

import { useLocale } from "@/components/providers/locale-provider";

import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";

type SubmissionState = "idle" | "loading" | "success" | "error";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type WaitlistFormProps = {
  title?: string;
  description?: string;
  buttonLabel?: string;
  placeholder?: string;
  helperCopy?: string;
  successTitle?: string;
  successDescription?: string;
};

export function WaitlistForm({
  /*
  title = "Get early access before the public launch",
  description = "Join the waitlist for launch updates, onboarding invites, and the first release announcement.",
  buttonLabel = "Join the Waitlist",
  placeholder = "you@company.com",
  helperCopy = "No spam. Early access only. Unsubscribe anytime.",
  */
  title,
  description,
  buttonLabel,
  placeholder,
  helperCopy,
  successTitle,
  successDescription,
}: WaitlistFormProps) {
  const { t } = useLocale();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState<SubmissionState>("idle");

  const resolvedTitle = title ?? t.waitlist.formTitle;
  const resolvedDescription = description ?? t.waitlist.formDescription;
  const resolvedButtonLabel = buttonLabel ?? t.common.joinWaitlist;
  const resolvedPlaceholder = placeholder ?? t.waitlist.placeholder;
  const resolvedHelperCopy = helperCopy ?? t.waitlist.helperCopy;
  const resolvedSuccessTitle = successTitle ?? t.waitlist.successTitle;
  const resolvedSuccessDescription =
    successDescription ?? t.waitlist.successDescription;

  const isSuccess = status === "success";
  const helperText = useMemo(
    () => (error ? error : resolvedHelperCopy),
    [error, resolvedHelperCopy],
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedEmail = email.trim();

    if (!emailPattern.test(trimmedEmail)) {
      setStatus("idle");
      setError(t.waitlist.invalidEmail);
      return;
    }

    setStatus("loading");
    setError("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmedEmail }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setError(t.waitlist.requestFailed);
    }
  }

  if (isSuccess) {
    return (
      <Card className="border-cyan-400/20 bg-cyan-400/5">
        <CardContent className="space-y-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
            <CheckCircle2 className="h-5 w-5" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-white">
              {resolvedSuccessTitle}
            </h3>
            <p className="text-sm leading-6 text-slate-300">
              {resolvedSuccessDescription}
            </p>
          </div>
          <Button variant="secondary" onClick={() => setStatus("idle")}>
            {t.waitlist.addAnotherEmail}
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-[0_0_40px_rgba(15,23,42,0.45)]">
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-white">
            {resolvedTitle}
          </h3>
          <p className="text-sm leading-6 text-slate-300">
            {resolvedDescription}
          </p>
        </div>

        <form className="space-y-3" onSubmit={handleSubmit} noValidate>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Input
              aria-invalid={Boolean(error)}
              autoComplete="email"
              className="sm:flex-1"
              name="email"
              onBlur={() => {
                if (email && !emailPattern.test(email.trim())) {
                  setError(t.waitlist.invalidEmail);
                }
              }}
              onChange={(event) => {
                setEmail(event.target.value);
                if (error) {
                  setError("");
                }
              }}
              placeholder={resolvedPlaceholder}
              type="email"
              value={email}
            />
            <Button className="sm:min-w-40" disabled={status === "loading"} size="lg" type="submit">
              {status === "loading" ? (
                <>
                  <LoaderCircle className="h-4 w-4 animate-spin" />
                  {t.waitlist.loading}
                </>
              ) : (
                resolvedButtonLabel
              )}
            </Button>
          </div>

          <div className="flex items-start gap-2 text-sm">
            {error ? (
              <MailWarning className="mt-0.5 h-4 w-4 shrink-0 text-rose-300" />
            ) : status === "error" ? (
              <MailWarning className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
            ) : (
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
            )}
            <p
              className={
                error
                  ? "text-rose-300"
                  : status === "error"
                    ? "text-amber-300"
                    : "text-slate-400"
              }
            >
              {helperText}
            </p>
          </div>
        </form>

        <div className="grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
          {t.waitlist.trustPoints.map((point) => (
            <div
              key={point}
              className="rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3"
            >
              {point}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
