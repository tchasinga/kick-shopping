import React from 'react'
import { TextField ,Button , Tooltip} from '@mui/material';

export default function Register() {
  return (
    <section className='mt-8'>
        <h1 className='text-center text-slate-900 text-4xl font-medium'>Register</h1> 

        <form >
          <TextField type='email' variant='outlined' id="" label="enter your email here" helperText='your email must have @ property' required/>
          <TextField type='password' variant='outlined' id="" label="enter your password here" helperText='your password must have 8 characters' required/>
          <Button variant="contained">Contained</Button>
        </form>
    </section>
  )
}
