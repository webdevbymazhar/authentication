import User from "@/app/models/User";
import { GenAccessToken } from "@/Helpers/jwt";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import dbConnection from "@/config/dbConnect";

export async function POST(req) {
    await dbConnection()
    try {
      const { email, password } = await req.json();
  
      const user = await User.findOne({ email });
  
      if(!user){
          return NextResponse.json(
              {
                success: false,
                message: "Invalid Credentials",
              },
              {
                status: 200,
              }
            );
      }
  
      const passwordmatch = await bcrypt.compare(password,user.password)
  
      if(!passwordmatch) {
          return NextResponse.json(
              {
                success: false,
                message: "Invalid Credentials",
              },
              {
                status: 400,
              }
            );
      }
  
      const AccessToken = await GenAccessToken({
        id:user._id,
        username:user.username
      })
  
      cookies().set("Token",AccessToken)
  
      return NextResponse.json(
          {
            success: true,
            message: "Logged In",
          },
          {
            status: 200,
          }
        );
  
  
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        {
          success: false,
          message: error,
        },
        {
          status: 500,
        }
      );
    }
  }