import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json({hello:'im in api/users GET'})
}


export async function POST(){
    return NextResponse.json({hello:'im in api/users POST'})
}