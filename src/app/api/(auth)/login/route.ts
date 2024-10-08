import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { email, password } = await req.json();
    if (email === "admin@xyz.com" && password === "admin@1234") {
      // Create JWT token (use a secret key)
      const token = await jwt.sign(
        { email, password },
        process.env.JWT_SECRET!,
        {
          expiresIn: "1h",
        }
      );
      const resData = NextResponse.json({ status: 200, data: { token } });
      resData.cookies.set({
        name: "token",
        value: token,
        httpOnly: true,
        sameSite: "strict",
        maxAge: 60 * 60, // 1 hour in seconds
        path: "/", // Cookie is valid across the entire site
      });
      return resData;
    } else {
      return NextResponse.json({ status: 401, error: "Invalid credentials" });
    }
  } catch (error) {
    console.log("Error Occured while Login", error);
    return NextResponse.json({ ...error.response.data });
  }
}
