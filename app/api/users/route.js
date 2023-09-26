import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
export function GET(request) {
  return NextResponse.json([
    { id: 1, name: "Mosh" },
    { id: 2, name: "John" },
  ]);
}

export async function POST(request) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  // Validate
  if (!body.name)
    return NextResponse.json(validation.error.errors, { status: 400 });
  // if invalid, return 400

  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
