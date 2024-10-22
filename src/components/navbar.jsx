import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {



  const links = ["Home", "Category", "Theatres", "Venues", "About"]
  const urlLinks =["/", "/category", "/theatre", "/venues", "/about"]
  return (
    <div className='container mx-auto flex md:flex-row items-center md:justify-between my-6 rounded-lg bg-white md:p-4 flex-col'>
        <div className='md:py-0 py-2'>
            <p className='font-bold text-2xl'>CineSeat</p>
        </div>

         <div className='md:py-0 py-2'>
              
            <ul className='flex justify-between gap-7 pt-2 text-lg'>
              <li className=' hover:text-blue-700 hover:font-semibold h-6 w-16 flex justify-center '><Link className='focus:text-blue-700 focus:font-semibold' to={urlLinks[0]}>{links[0]}</Link></li>
              <li className=' hover:text-blue-700 hover:font-semibold h-6 w-16 flex justify-center'><Link className='focus:text-blue-700 focus:font-semibold' to={urlLinks[1]}>{links[1]}</Link></li>
              <li className=' hover:text-blue-700 hover:font-semibold h-6 w-16 flex justify-center'><Link className='focus:text-blue-700 focus:font-semibold' to={urlLinks[2]}>{links[2]}</Link></li>
              <li className=' hover:text-blue-700 hover:font-semibold h-6 w-16 flex justify-center'><Link className='focus:text-blue-700 focus:font-semibold' to={urlLinks[3]}>{links[3]}</Link></li>
              <li className=' hover:text-blue-700 hover:font-semibold h-6 w-16 flex justify-center'><Link className='focus:text-blue-700 focus:font-semibold' to={urlLinks[4]}>{links[4]}</Link></li>
            </ul>
        </div>

        <div className='md:py-0 py-2'>
          <Link to='/signin'><button className='bg-blue-700 text-white border border-1 py-2 px-6 rounded-full hover:bg-white hover:text-blue-700 hover:border-blue-700'>Sign in</button></Link>
          
          
           
            
        </div>
            
        
      
    </div>
  )
}

export default navbar
