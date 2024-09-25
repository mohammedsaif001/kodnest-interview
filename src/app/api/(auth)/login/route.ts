import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { email, password } = await req.json();
    console.log("shsjssss", email, password);
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
      });
      return resData;
    } else {
      return NextResponse.json({ status: 401, error: "Invalid credentials" });
    }

    return res;
  } catch (error) {
    console.log("sksssss", error);
    return NextResponse.json({ ...error.response.data });
  }
}
