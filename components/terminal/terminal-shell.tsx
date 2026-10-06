"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { UserButton } from "@clerk/nextjs";

import {
  createEntry,
  resolveCommandOutput,
  type TerminalEntry,
} from "@/lib/terminal";

const bootEntries: TerminalEntry[] = [
  createEntry(
    "system",
    "Welcome to Cursor Meta-Prompt OS. Type `..help` to see available frameworks.",
  ),
  createEntry("system", "Secure session established. Awaiting command input."),
];

export function TerminalShell() {
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState<TerminalEntry[]>(bootEntries);
  const [isProcessing, setIsProcessing] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    viewportRef.current?.scrollTo({
      top: viewportRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [history, isProcessing]);

  const promptLabel = useMemo(() => "visitor@cursor-meta:~$", []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextCommand = command.trim();

    if (!nextCommand || isProcessing) {
      return;
    }

    setCommand("");
    setIsProcessing(true);

    const inputEntry = createEntry("input", `${promptLabel} ${nextCommand}`);

    if (nextCommand === "..clear") {
      setHistory([inputEntry, ...bootEntries.slice(0, 1)]);
      setIsProcessing(false);
      return;
    }

    setHistory((current) => [...current, inputEntry]);

    window.setTimeout(() => {
      setHistory((current) => [
        ...current,
        createEntry("system", "Processing command stream..."),
        ...resolveCommandOutput(nextCommand),
      ]);
      setIsProcessing(false);
      inputRef.current?.focus();
    }, 300);
  };

  return (
    <section className="flex min-h-screen flex-col bg-black text-green-500">
      <header className="flex items-center justify-between border-b border-green-500/20 px-4 py-3 sm:px-6">
        <div className="space-y-1">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">
            Hacker Command Center
          </p>
          <h1 className="font-mono text-lg text-green-400 sm:text-xl">
            Cursor Meta-Prompt OS
          </h1>
        </div>
        <UserButton
          appearance={{
            elements: {
              avatarBox: "ring-1 ring-green-500/30",
              userButtonPopoverCard:
                "border border-green-500/30 bg-slate-950 text-green-200",
              userButtonPopoverActionButton:
                "text-green-200 hover:bg-slate-900 hover:text-green-100",
            },
          }}
          afterSignOutUrl="/"
        />
      </header>

      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-4 sm:px-6">
        <div className="grid flex-1 gap-4 lg:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="rounded-2xl border border-green-500/20 bg-slate-950/40 p-4 font-mono text-sm text-green-300">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
              Active Modules
            </p>
            <ul className="mt-4 space-y-3">
              <li>01. prompt compiler</li>
              <li>02. framework chain</li>
              <li>03. auth gateway</li>
              <li>04. terminal history</li>
            </ul>
            <p className="mt-6 text-xs text-green-500/70">
              Use `..help` to inspect the framework command surface.
            </p>
          </aside>

          <div className="flex min-h-[70vh] flex-col rounded-2xl border border-green-500/20 bg-slate-950/50 shadow-[0_0_50px_rgba(34,197,94,0.08)]">
            <div className="flex items-center gap-2 border-b border-green-500/20 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-green-500/80" />
              <p className="ml-3 font-mono text-xs uppercase tracking-[0.25em] text-cyan-400">
                Secure Terminal Session
              </p>
            </div>

            <div
              ref={viewportRef}
              className="flex-1 overflow-y-auto px-4 py-4 font-mono text-sm leading-7"
            >
              <div className="space-y-3">
                {history.map((entry) => (
                  <p
                    key={entry.id}
                    className={
                      entry.kind === "error"
                        ? "text-red-400"
                        : entry.kind === "system"
                          ? "text-cyan-400"
                          : entry.kind === "input"
                            ? "text-green-500"
                            : "text-green-300"
                    }
                  >
                    {entry.text}
                  </p>
                ))}
                {isProcessing ? (
                  <p className="animate-pulse text-cyan-400">
                    system:// awaiting response...
                  </p>
                ) : null}
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="border-t border-green-500/20 px-4 py-4"
            >
              <label className="flex items-center gap-3 font-mono text-sm text-green-400">
                <span className="shrink-0">{promptLabel}</span>
                <input
                  ref={inputRef}
                  value={command}
                  onChange={(event) => setCommand(event.target.value)}
                  className="w-full border-none bg-transparent text-green-300 outline-none placeholder:text-green-500/40"
                  placeholder="..chain build a login page"
                  autoComplete="off"
                  autoCapitalize="off"
                  spellCheck={false}
                />
              </label>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
