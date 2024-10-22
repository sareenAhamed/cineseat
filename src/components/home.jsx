import React from 'react'

const home = () => {
  return (
    <div className='container mx-auto bg-white rounded pt-32 pb-10 flex flex-col items-center'>
      <div>
        <p className='text-5xl font-bold mb-3'>Unlock the stage to</p>
        <p className='text-5xl font-bold text-slate-500'>unforgetable sounds.</p>
      </div>

      <div className='mt-8 flex justify-around bg-blue-200 rounded-full h-16 w-96 pt-5'>
        <div>
        <input className='bg-transparent placeholder:text-slate-600 italic focus:outline-none hover:outline-none' type="text"  placeholder='Search for event'/>
        </div>
        <div className='rounded-full -me-10 -pt-3'>
          
            <svg className='h-8 w-8' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          
          
        </div>
      </div>

      <div className='flex flex-col items-center pt-8'>
        <p className='text-lg font-semibold'>Get tickets to gigs, parties and festivels</p>
        <p className='text-lg font-semibold'>for the <span className='text-green-700'>best price</span> in the market.</p>
      </div>
      
    </div>
  )
}

export default home
