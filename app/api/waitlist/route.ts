import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = (await request.json()) as { email?: string };
  const email = body.email?.trim();

  if (!email || !emailPattern.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  return NextResponse.json({
    message: "Waitlist signup received.",
    email,
  });
}
