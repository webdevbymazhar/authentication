import User from "@/app/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import dbConnection from "@/config/dbConnect";


export async function POST(req) {

    await dbConnection()

    try {
        
        let {username,email,password} = await req.json()

        let hashpassword = await bcrypt.hash(password,10)


        let user = await User.create({username,email,password:hashpassword})

        return NextResponse.json({
            user
        },{status:200})


    } catch (error) {
        return NextResponse.json({
            message : "error in registering data"
        },{status:400})
    }
    
}