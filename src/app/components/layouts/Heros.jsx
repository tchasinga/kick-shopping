"use client"
import React from 'react';
import { useState , useEffect } from 'react';
import Image from "next/image";
import imgOne from '../'


export default function Heros() {
    const [imageIndex, setImageIndex] = useState(0);
    const image = [
       
    ]

    useEffect(() =>{
        const intervalId = setInterval(() => {
            setImageIndex((prevIndex) => (prevIndex + 1) % image.length);
        }, 5000)
        return () => clearInterval(intervalId);
    }, [image.length])

  return (
    <div>
        <h1>KICK SHOPPING</h1>
        <p>The best seller of sneakers on hearth</p>
        <p>Every outfit can look great with a good shoes now take your shopping...</p>
        <p>Life is short buy a shoes</p>
        <button>SHOP NOW</button>

        <div className="">
            <Image  src={image[imageIndex]} width={500} height={500} alt="air-jordan-4-retro-se-craft.png"/>
        </div>
    </div>
  )
}
