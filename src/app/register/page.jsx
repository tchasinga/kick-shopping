import React from 'react'
import { TextField ,Button , Tooltip} from '@mui/material';

export default function Register() {
  return (
    <section className='mt-8'>
        <h1 className='text-center text-slate-900 text-4xl font-medium'>Register</h1> 

        <form className=' max-w-xl mx-auto mt-6'>
         <div className="w-full flex flex-col">
         <TextField type='email' variant='outlined' id="" label="enter your email here" helperText='your email must have @ property' required/>
          <TextField type='password' variant='outlined' id="" label="enter your password here" helperText='your password must have 8 characters' required/>
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
