import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
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

    if (!/^\S+@\S+\.\S+$/.test(email)) {
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