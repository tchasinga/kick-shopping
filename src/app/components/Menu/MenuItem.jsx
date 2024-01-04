import React from 'react'
import imgTwo from "../img/AppleAirPods.png";
import Image from "next/image";

export default function MenuItem() {
  return (
    <div className="bg-gray-200 p-4  rounded-lg text-center">
    <Image  src={imgTwo}  alt="air-jordan-4-retro-se-craft.png"/> 
    <h3 className='text-sm'>Air Jordan 4 Retro SE</h3>
    <p className='text-xs'>Craft the great shoes all time </p>
    <button className='bg-black text-white px-6 py-2 rounded-3xl w-full mt-4 text-xs font-bold'>$250</button>
    </div>
  )
}
