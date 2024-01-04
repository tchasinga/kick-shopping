import React from 'react';
import Image from "next/image";
import imgOne from "../img/Girl-jordan.png";
import imgTwo from "../img/AppleAirPods.png";
import MenuItem from '../Menu/MenuItem';
import SectionHeader from './SectionHeader';

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
          <SectionHeader/> 
        </div>
        <div className="mygrid mt-36">
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/> 
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/> 
            <MenuItem/>
        </div>
    </section>
  )
}
