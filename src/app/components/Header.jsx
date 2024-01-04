import React from 'react'
import Link from "next/link";

export default function Header() {
  return (
    <div>
       <header className="flex items-center justify-between">
        <Link className="text-slate-900 text-2xl font-medium" href="/">KICK SHOP</Link>
        <nav className="flex gap-2 items-center text-slate-800 font-normal ">
          <Link className="hover:font-medium" href={""}>Home</Link>
          <Link className="hover:font-medium" href={""}>Shop</Link>
          <Link className="hover:font-medium" href={""}>About</Link>
          <Link className="hover:font-medium" href={""}>Contact</Link>
          <Link className="hover:font-medium bg-blue-800 text-white px-6 py-1 rounded-full" href={""}>Loging</Link>
        </nav>
      </header>
    </div>
  )
}
