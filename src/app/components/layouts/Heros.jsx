"use client"
import React from 'react';
import { useState , useEffect } from 'react';
import Image from "next/image";
import imgOne from '../img/air-jordan-4-retro-se-craft.png';
import imgFive from '../img/Jordan1.png';
import imgSeven from '../img/TrendtationAirfor.png';
import imgEight from '../img/YeezySlidesSlate.png';


export default function Heros() {
    const [imageIndex, setImageIndex] = useState(0);
    const image = [
        imgOne,
        imgFive,
        imgSeven,
        imgEight
    ]

    useEffect(() =>{
        const intervalId = setInterval(() => {
            setImageIndex((prevIndex) => (prevIndex + 1) % image.length);
        }, 5000)
        return () => clearInterval(intervalId);
    }, [image.length])

  return (
    <section className='grid grid-cols-2'>
    <div className='py-12 flex justify-center flex-col'>
        <h1 className='text-6xl'>KICK SHOPPING</h1>
        <div className='text-slate-500 mt-4 text-sm'>
        <p>The best seller of sneakers on hearth</p>
        <p>Every outfit can look great with a good shoes now take your shopping...</p>
        <p>Life is short buy a shoes</p>
        </div>
        <button className='mt-2 bg-black text-white px-6 py-2 rounded-3xl w-4/12 text-xs font-bold'>SHOP NOW</button>
     </div>

        <div className="w-full object-fill flex-1 relative  left-[0%] right-[0%] flex justify-end ">
            <Image  src={image[imageIndex]}  alt="air-jordan-4-retro-se-craft.png"/>
        </div>
    </section>
  )
}
