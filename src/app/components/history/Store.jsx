import React from 'react'

export default function Store() {
  return (
    <div className='text-center text-slate-800 mt-12'>
        <h1 className='text-3xl  font-semibold'>Our story</h1>
        <h2 className='text-xl'>About our selling system</h2>
        <p className='text-sm'>We are the best seller of sneakers on hearth based selling different type of product</p>
        <p className='text-sm'>Every outfit can look great with a good shoes now take your shopping</p>
        <p className='text-sm'>From when we start our bussness till now is already three years </p>

        <div className='flex gap-1 justify-center mt-3'>
           <p className='font-semibold text-slate-900'>Contact us :</p>
           <a href="tel:+250787289028">+250787289028</a>
        </div>
        <footer className='border-t  p-8 text-center mt-16'>
            <p className='text-sm text-slate-900'>All right reserved &copy; 2024 made by tchasinga balolebwami from scratch</p>
        </footer>
    </div>
  )
}
