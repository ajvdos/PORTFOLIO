import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

// Simple in-memory rate limiter (per server instance).
// Good enough for a low-traffic portfolio; resets on redeploy/cold start.
const submissions = new Map<string, number[]>();
const WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS = 3;   // max 3 submissions per IP per minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (submissions.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  timestamps.push(now);
  submissions.set(ip, timestamps);
  return timestamps.length > MAX_REQUESTS;
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Honeypot: a hidden field that real users never fill in.
    // If it has a value, it's almost certainly a bot.
    if (String(body.website ?? "").trim() !== "") {
      // Return a fake success so bots don't learn the honeypot was tripped.
      return NextResponse.json({ success: true }, { status: 201 });
    }

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const subject = String(body.subject ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (name.length > 100 || subject.length > 150 || message.length > 5000) {
      return NextResponse.json(
        { error: "One or more fields exceed the allowed length." },
        { status: 400 }
      );
    }

    if (!/^\S+@\S+\.\S+$/.test(email) || email.length > 254) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const contact = await prisma.contactMessage.create({
      data: { name, email, subject: subject || null, message }
    });

    return NextResponse.json({ success: true, id: contact.id }, { status: 201 });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Unable to save your message." },
      { status: 500 }
    );
  }
}