export type TerminalEntry = {
  id: string;
  kind: "system" | "input" | "output" | "error";
  text: string;
};

export type ParsedCommand = {
  name: string;
  args: string;
};

const commandResponses: Record<string, (args: string) => string[]> = {
  "..help": () => [
    "Available frameworks: ..single, ..chain, ..init, ..status, ..clear",
    "Example: ..chain build a login page",
  ],
  "..single": (args) => [
    `Scaffolding focused prompt for: ${args || "your next feature"}`,
    "Constraint map: preserving DX, clarity, and ship speed.",
  ],
  "..chain": (args) => [
    `Dispatching multi-step workflow for: ${args || "untitled request"}`,
    "Step 1/3: Analyze product intent",
    "Step 2/3: Draft prompt chain",
    "Step 3/3: Optimize output for delivery",
  ],
  "..init": () => [
    "Initializing project prompt workspace...",
    "Starter context loaded. Type a task to continue.",
  ],
  "..status": () => [
    "System status: online",
    "Auth layer: protected via Clerk",
    "Terminal core: ready for command input",
  ],
};

export function createEntry(
  kind: TerminalEntry["kind"],
  text: string,
): TerminalEntry {
  return {
    id: `${kind}-${crypto.randomUUID()}`,
    kind,
    text,
  };
}

export function parseCommand(input: string): ParsedCommand {
  const [name = "", ...rest] = input.trim().split(/\s+/);

  return {
    name: name.toLowerCase(),
    args: rest.join(" ").trim(),
  };
}

export function resolveCommandOutput(input: string): TerminalEntry[] {
  const parsed = parseCommand(input);

  if (!parsed.name) {
    return [];
  }

  if (parsed.name === "..clear") {
    return [];
  }

  const resolver = commandResponses[parsed.name];

  if (!resolver) {
    return [
      createEntry("error", `Unknown command: ${parsed.name}`),
      createEntry("system", 'Type "..help" to inspect available frameworks.'),
    ];
  }

  return resolver(parsed.args).map((line) => createEntry("output", line));
}
