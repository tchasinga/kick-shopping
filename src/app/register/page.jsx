"use client"
import React from 'react'
import { TextField ,Button , Tooltip} from '@mui/material';
import {useState} from 'react'
import Link from 'next/link'


export default function Register() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') 
  const [userCreated, setUserCreated] = useState(false);
  const [creatingUser, setCreatingUser] = useState(false);
  const [error, setError] = useState(false);
  
  const handlerFormsubmit = async (ev) => {
    ev.preventDefault();
    setCreatingUser(true);
  
    try {
      const response = await fetch("../api/register/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('Success:', data);
  
      // Move these inside the .then block
      setCreatingUser(false);
      setUserCreated(true);
  
   } catch (error) {
      console.error('Error:', error);
      // Display error message to the user or handle it in a specific way
      setError(true);
      // Optionally, clear the error after a certain period
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
  };
  
 
  return (
    <section className='mt-8'>
        <h1 className='text-center text-slate-900 text-4xl font-medium'>Register</h1> 
        {userCreated && <div className='text-center text-slate-600'>user created you can <Link className='text-green-800 font-bold' href={`/login`}>login now &raquo;</Link></div>}

        <form className=' max-w-xl mx-auto mt-6' onSubmit={handlerFormsubmit}>
         <div className="w-full flex flex-col">
         <TextField type='email' variant='outlined' disabled={creatingUser} value={email} onChange={ev => setEmail(ev.target.value)} id="" label="enter your email here" helperText='your email must have @ property' required/>
          <TextField type='password' variant='outlined' disabled={creatingUser} value={password} onChange={ev =>setPassword(ev.target.value)} id="" label="enter your password here" helperText='your password must have 8 characters' required/>
          <Button type='submit' className='w-2/3' disabled={creatingUser} variant='outlined'>register</Button>
         </div>
         <div className='my-4 text-center text-slate-600'>or login with provider</div>
          <div className="text-center border p-3 rounded-2xl font-medium">
          <button className=''>Login with google</button>
          </div>
          <div className='flex  gap-2 text-xs mt-3'>
            <p>Already have an account</p>
            <Link className='text-green-800 font-extrabold' href={`/login`}>Login &raquo;</Link>
          </div>
        </form>
         {error && (
             <div className={`bgBlack ${error ? 'visible' : 'hidden'}`}>
             {error && <div className='Success text-center text-red-600'>Error creating user</div>}
           </div>
         )}
    </section>
  )
}
