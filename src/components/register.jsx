import React from 'react'
import { Link } from 'react-router-dom'

const register = () => {
  return (
    <div className='container mx-auto py-24 bg-cyan-950 flex justify-center'>
      <div className='flex flex-col items-center bg-slate-600 w-96 p-12 rounded'>
        <div className='mb-8'>
          <h1 className='text-5xl font-semibold text-white'>Sign Up</h1>
        </div>

        <div className='flex flex-col items-center gap-5'>
          <input className='w-72 h-8 rounded ps-2 focus:outline-none focus:ps-3' type="email" name="" placeholder='Email' />
          <input className='w-72 h-8 rounded ps-2 focus:outline-none focus:ps-3' type="password" name="" placeholder='Create password' />
          <input className='w-72 h-8 rounded ps-2 focus:outline-none focus:ps-3' type="password" name="" placeholder='Confirm password' />
        </div>

        <div className='mt-10 font-semibold bg-blue-700 text-white py-2 px-6 rounded hover:bg-white hover:text-blue-700 hover:border hover:border-blue-700'>
          <button className=''>Signup</button>
        </div>

        <p className='mt-6 text-white'>Already have an account? <Link to='/signin'><span className='text-slate-400 font-semibold cursor-pointer'>Sign in</span></Link></p>
        
        
      </div>
      
    </div>
  )
}

export default register
