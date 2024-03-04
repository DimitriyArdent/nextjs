import { NextResponse } from "next/server"

export async function GET(req:Request,context:any){
    const {params} = context
    return NextResponse.json({hello:params})
}