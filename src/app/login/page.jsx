"use client"
import React, { useState } from 'react'
import { TextField ,Button , Tooltip} from '@mui/material';
import Link from 'next/link'
import { signIn } from 'next-auth/react'



export default function Loginpages() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('') 
    const [loginInProgress, setLoginInProgress] = useState(false);
    
    const handlerFormSubmit = async (ev) => {
      ev.preventDefault();
      setLoginInProgress(true);
      await signIn('credentials' , {
         callbackUrl: '/',
        email,
        password
      })
      setLoginInProgress(false);
    }
  

  return (
   <section className='mt-8'>
    <h1 className='text-center text-slate-900 text-4xl font-medium'>Login now</h1> 

    <form className=' max-w-xl mx-auto mt-6' onSubmit={handlerFormSubmit}>
         <div className="w-full flex flex-col">
         <TextField type='email' name='email' variant='outlined' disabled={loginInProgress} id="" label="enter your email here" helperText='your email must have @ property' value={email} onChange={(e) => setEmail(e.target.value)}/>
         <TextField type='password' name='password' variant='outlined' disabled={loginInProgress} id="" label="enter your password here" helperText='your password must have 8 characters' value={password}  onChange={(e) => setPassword(e.target.value)}/>
          <Button type='submit' className='w-2/3' disabled={loginInProgress} variant='outlined'>Login now</Button>
         </div>
         <div className='my-4 text-center text-slate-600'>Or login with provider</div>
          <div className="text-center border p-3 rounded-2xl font-medium">
          <button type='button' onClick={()=> signIn('google' , {callbackUrl:'/'})} className=''>Login with google</button>
         </div>
         <div className='flex  gap-2 text-xs mt-3'>
            <p>Don&apos;t have an account</p>
            <Link className='text-green-800 font-extrabold' href={`/register`}>register &raquo;</Link>
          </div>
    </form>
   </section>
  )
}
