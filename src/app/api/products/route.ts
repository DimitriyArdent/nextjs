import { NextResponse } from "next/server";
import pg from 'pg';
require('dotenv').config()

const { Pool } = pg;

const client = new Pool({
  connectionString:   process.env.POSTGRES_URL,

})

 
// Connect to the PostgreSQL database
client.connect()
  .then(() => {
    console.log(`Connected to the database  successfully`);
    console.log(process.env.POSTGRES_URL)
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });




export async function GET(){
    const query = 'select * from products'
        
    const result = await client.query(query)
    return NextResponse.json({hello:result})
}


export async function POST(req: Request){
    const data = await req.json();
    return NextResponse.json({hello:data})
}