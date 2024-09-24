import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const nextCookies = cookies();
  nextCookies.delete("token");

  return NextResponse.json({ status: 200, message: "Logged Out SuccessFully" });
}
