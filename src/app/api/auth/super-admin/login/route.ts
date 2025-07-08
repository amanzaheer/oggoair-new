import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import axios from "axios";

export const POST = async (request: NextRequest, response: NextResponse) => {
  try {
    const { ...body } = await request.json();
    const { email, password } = body;
    const signin = await axios.post(
      `${process.env.API_LINK}/api/super-admins/login`,
      {
        email,
        password,
      }
    );

    cookies().set("superAdminToken", `${signin.data.token}`);
    return new NextResponse(
      JSON.stringify({
        status: true,
        message: "Loged in success",
        data: { ...signin.data.data, accessToken: signin.data.token },
      }),
      { status: 200 }
    );
  } catch (err: any) {
    console.log(err.response);
    return new NextResponse(
      JSON.stringify({
        status: false,
        message: err.response.data.message || "An unknown error occurred",
      }),
      { status: err.response.status || 500 }
    );
  }
};
