"use client"

import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react';
import { redirect, useRouter } from "next/navigation";
import Image from "next/image";

export default function Pages() {

    const router = useRouter();
    const { data: session, status } = useSession();
    console.log(session);
    const userImage = session?.user?.image;
    const username = session?.user?.name;
    const [userName, setUserName] = useState('');

    useEffect(() => {
        if (status === 'authenticated') {
            setUserName(session?.user?.name);
        }
    }, [session , status]);

    if (status === 'loading') {
        return <div className='text-center'>Loading...</div>
    }

    if (status === 'unauthenticated') {
        redirect('/login');
    }

    const handlerUpdating = async (ev) => {
        ev.preventDefault();
        const res = await fetch('../api/profiles', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: userName })
        });

        if (res.status === 200) {
            redirect('/profiles');
        } 
    }

  return (
    <section className='mt-8'>
     <h1 className='text-center text-slate-900 text-2xl font-medium'>My profile pages...</h1>

      <div className='max-w-md mx-auto '> 
         <div className="flex gap-2 items-center">
            <div className="">
                <div className="bg-gray-200 p-3 flex flex-col justify-center items-center flex-1">
                <Image src={userImage} alt={username} width={80} height={80} className='rounded-full' />
                <button className='text-xs mt-2 border bg-white w-full font-bold'>Edite</button>
                 </div>
            </div>

         
           <form className="grow" onSubmit={handlerUpdating}>
                <input type="text"  placeholder='First and last name' value={userName} onChange={ev => setUserName(ev.target.value)}/>
                <input type="text" name="" disabled id="" value={session.user.email} />
                <button className='bg-black text-white px-6 py-2 rounded-3xl text-xs font-bold'>Save</button>
            </form>
         </div>
      </div>

    </section>
  )
}