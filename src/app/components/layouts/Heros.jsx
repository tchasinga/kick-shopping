"use client"
import React from 'react';
import { useState , useEffect } from 'react';
import Image from "next/image";


export default function Heros() {
    const [imageIndex, setImageIndex] = useState(0);
    const image = [

    ]

  return (
    <div>
        <h1>KICK SHOPPING</h1>
        <p>The best seller of sneakers on hearth</p>
        <p>Every outfit can look great with a good shoes now take your shopping...</p>
        <p>Life is short buy a shoes</p>
        <button>SHOP NOW</button>
    </div>
  )
}
