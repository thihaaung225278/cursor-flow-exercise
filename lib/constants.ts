import {
  Bot,
  Code2,
  ListChecks,
  Mail,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export const siteConfig = {
  name: "Cursor Meta-Prompt Generator",
  eyebrow: "Prompt Ops for builders",
  description:
    "Generate cleaner prompts, reusable templates, and smarter workflows for Cursor without fighting your tooling.",
  ctaLabel: "Join the waitlist",
  ctaHref: "#waitlist",
};

export const audience = [
  "Frontend teams shipping faster",
  "Solo builders refining prompts",
  "Agencies standardizing AI workflows",
];

export const stats = [
  { value: "3x", label: "faster prompt drafting" },
  { value: "1", label: "source of truth for teams" },
  { value: "0", label: "fluffy setup steps" },
];

export const features = [
  {
    title: "Generate production-ready prompts",
    description:
      "Turn rough intent into structured meta-prompts tuned for real frontend delivery work.",
    icon: Sparkles,
  },
  {
    title: "Keep patterns consistent",
    description:
      "Capture reusable prompt blocks so your team stops reinventing context on every task.",
    icon: ListChecks,
  },
  {
    title: "Built for developer workflows",
    description:
      "Optimize for handoff clarity, component architecture, and implementation-ready output.",
    icon: Code2,
  },
];

export const steps = [
  {
    title: "Describe the product task",
    description:
      "Share the feature goal, constraints, and stack you are working with.",
    icon: Bot,
  },
  {
    title: "Generate a clean meta-prompt",
    description:
      "The system structures your intent into a reusable prompt scaffold with clear logic.",
    icon: Sparkles,
  },
  {
    title: "Ship with more confidence",
    description:
      "Use the output directly in Cursor to reduce prompt drift and speed up execution.",
    icon: ShieldCheck,
  },
];

export const faqs = [
  {
    question: "What is the waitlist for?",
    answer:
      "Early access to the first release of Cursor Meta-Prompt Generator, plus product updates and onboarding invitations.",
  },
  {
    question: "Do I need to install anything today?",
    answer:
      "No. The waitlist is for launch access only, so you can sign up now and get notified when the product is ready.",
  },
  {
    question: "Will you spam my inbox?",
    answer:
      "No spam. Only launch updates, early access notices, and essential product communication.",
  },
];

export const waitlistTrustPoints = [
  "Developer-first product direction",
  "Early access invitations",
  "No spam, unsubscribe anytime",
];

export const waitlistSuccess = {
  title: "You're on the list.",
  description:
    "We will send launch updates, early access availability, and onboarding details to your inbox.",
  icon: Mail,
};
