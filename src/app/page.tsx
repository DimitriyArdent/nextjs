"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";


export default function Home() {

  async function fetchProducts(){
        const res = await fetch("/api/products",{
          headers:{
            Accept:"application/json",
            Method:"GET"
          }
        })

        if(res){
          const data = await res.json()
          console.log(data)
        }
  }

  return (
    <main className={styles.main}>
      <div onClick={()=>fetchProducts()}>see the products</div>
    </main>
  );
}
