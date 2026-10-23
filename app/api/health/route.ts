import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    ok: true,
    app: "EXDIA Real Estate Platform",
    databaseConfigured: Boolean(process.env.DATABASE_URL),
    note: "This endpoint checks configuration only; it does not verify a live database connection."
  });
}
