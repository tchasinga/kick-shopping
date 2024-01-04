"use client"

import React from 'react'
import { TextField ,Button , Tooltip} from '@mui/material';
import {useState} from 'react'


export default function Register() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') 

  const handlerFormsubmit = (ev) => {
    ev.preventDefault()
    fetch('../api/register/', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
   })
   .then(response => {
      if (!response.ok) {
         throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
   })
   .then(data => {
      console.log('Success:', data);
   })
   .catch(error => {
      console.error('Error:', error);
   });
  }
 
  return (
    <section className='mt-8'>
        <h1 className='text-center text-slate-900 text-4xl font-medium'>Register</h1> 

        <form className=' max-w-xl mx-auto mt-6' onSubmit={handlerFormsubmit}>
         <div className="w-full flex flex-col">
         <TextField type='email' variant='outlined' value={email} onChange={ev => setEmail(ev.target.value)} id="" label="enter your email here" helperText='your email must have @ property' required/>
          <TextField type='password' variant='outlined' value={password} onChange={ev =>setPassword(ev.target.value)} id="" label="enter your password here" helperText='your password must have 8 characters' required/>
          <Button type='submit' className='w-2/3' variant='outlined'>register</Button>
         </div>
         <div className='my-4 text-center text-slate-600'>or login with provider</div>
          <div className="text-center border p-3 rounded-2xl font-medium">
          <button className=''>Login with google</button>
          </div>
        </form>
    </section>
  )
}
