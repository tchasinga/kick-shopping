import React from 'react';
import Image from "next/image";
import imgOne from "../img/Girl-jordan.png";
import imgTwo from "../img/AppleAirPods.png";

export default function HomeMenu() {
  return (
    <section className=''>

        <div className='relative'>
            <div className="h-48 w-48 absolute left-0">
                <Image  src={imgOne}  layout='fill' objectFit='contain' alt="air-jordan-4-retro-se-craft.png"/> 
            </div>

            <div className="h-48 w-48 absolute right-0">
                <Image  src={imgTwo}  layout='fill' objectFit='contain' alt="air-jordan-4-retro-se-craft.png"/> 
            </div>
        </div>

        <div className="text-center">
        <h3 className='uppercase text-3xl font-semibold'>CHECK OUT OUR PRODUCT HERE</h3>
        <h2 className=''>List of product</h2>      
        </div>  
    </section>
  )
}
