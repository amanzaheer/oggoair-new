import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export const GET = async (request: NextRequest) => {
  try {
    console.log(request.url);
    cookies().delete("superAdminToken");

    return new NextResponse(
      JSON.stringify({
        status: true,
        message: "Logout success",
      }),
      { status: 200 }
    );
  } catch (err: unknown) {
    return new NextResponse(
      JSON.stringify({ status: false, message: "An unknown error occurred" }),
      { status: 500 }
    );
  }
};
