"use client"

import React from 'react'
import Link from "next/link";
import { useSession } from 'next-auth/react';

export default function Header() {
   const session = useSession();
    console.log(session)

  return (
    <div>
       <header className="flex items-center justify-between">
        <Link className="text-slate-900 text-2xl font-medium" href="/">KICK SHOP</Link>
        <nav className="flex gap-2 items-center text-slate-800 font-normal ">
          <Link className="hover:font-medium" href={"/"}>Home</Link>
          <Link className="hover:font-medium" href={""}>Shop</Link>
          <Link className="hover:font-medium" href={""}>About</Link>
          <Link className="hover:font-medium" href={""}>Contact</Link>
        </nav>
        <nav className='bg-slate-700 rounded-full flex items-center gap-3'>
        <Link className="hover:font-medium text-white px-4 py-4 " href={"/register"}>Register</Link>
        <Link className="hover:font-medium bg-blue-800 text-white px-8 w-full py-4  rounded-full" href={"/login"}>Loging</Link>
       </nav>
      </header>
    </div>
  )
}
