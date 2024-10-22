import React from 'react'
import concert1 from '../assets/concert1.jpg'
import concert2 from '../assets/concert2.jpg'
import concert3 from '../assets/concert3.jpg'
import concert4 from '../assets/concert4.jpg'
import concert5 from '../assets/concert5.jpg'



const popular = () => {
  const popularList = ["All", "Today", "Tomorrow", "This Week"," Next Week", "This Month"]


  return (
    <div className='container mx-auto bg-slate-200 mt-6 rounded py-24'>
      <div className='p-6'>
        <h1 className='font-bold text-3xl'>Popular in <span className='font-thin'>Sri Lanka</span></h1>
      </div>

      <div>
        <ul className='flex gap-8 p-6'>
          {popularList.map((pop, index) => {
            return <li className='hover:border-b-2 hover:border-blue-700 hover:font-semibold h-6' key={index}>{pop}</li>
          })}
        </ul>
      </div>
      
      {/* This div for event section */}
      <div className='flex overflow-x-auto'>
        <div className='m-3 rounded shadow-2xl shadow-slate-700 bg-white'>
          <div className='bg-slate-600 h-32 w-56 rounded relative'>
           <div className='bg-slate-600 h-32 w-56 rounded relative'>
            <img className='h-full w-full object-cover rounded' src={concert1} alt="" />
            
            </div>
            
            
            
          </div>
          <div className='mt-2 ms-2 mb-2'>
            <p className='font-semibold'>Harmony Nights</p>
            <p>Colombo: <span className='font-thin'>2024/07/29, 8.00 pm</span></p>
            <button className='bg-blue-500 text-white py-2 px-3 rounded-full mt-2 hover:bg-white hover:text-blue-700 border hover:border-blue-700'>Buy tickets</button>
          </div>
        </div>

        <div className='m-3 rounded shadow-2xl shadow-slate-700 bg-white'>
          <div className='bg-slate-600 h-32 w-56 rounded relative'>
          <div className='bg-slate-600 h-32 w-56 rounded relative'>
            <img className='h-full w-full object-cover rounded' src={concert2} alt="" />
            
            </div>
            
            
          </div>
          <div className='mt-2 ms-2 mb-2'>
            <p className='font-semibold'>Melodic Vibes</p>
            <p>Negombo: <span className='font-thin'>2024/07/29, 5.00 pm</span></p>
            <button className='bg-blue-500 text-white py-2 px-3 rounded-full mt-2 hover:bg-white hover:text-blue-700 border hover:border-blue-700'>Buy tickets</button>
          </div>
        </div>

        <div className='m-3 rounded shadow-2xl shadow-slate-700 bg-white'>
          <div className='bg-slate-600 h-32 w-56 rounded relative'>
          <div className='bg-slate-600 h-32 w-56 rounded relative'>
            <img className='h-full w-full object-cover rounded' src={concert3} alt="" />
            
            </div>
            
            
          </div>
          <div className='mt-2 ms-2 mb-2'>
            <p className='font-semibold'>Musical Magic</p>
            <p>Jaffna: <span className='font-thin'>2024/09/12, 6.00 am</span></p>
            <button className='bg-blue-500 text-white py-2 px-3 rounded-full mt-2 hover:bg-white hover:text-blue-700 border hover:border-blue-700'>Buy tickets</button>
          </div>
        </div>

        <div className='m-3 rounded shadow-2xl shadow-slate-700 bg-white'>
          <div className='bg-slate-600 h-32 w-56 rounded relative'>
          <div className='bg-slate-600 h-32 w-56 rounded relative'>
            <img className='h-full w-full object-cover rounded' src={concert4} alt="" />
            
            </div>
            
            
          </div>
          <div className='mt-2 ms-2 mb-2'>
            <p className='font-semibold'>Sonic Serenity</p>
            <p>Mannar: <span className='font-thin'>2024/08/29, 2.00 pm</span></p>
            <button className='bg-blue-500 text-white py-2 px-3 rounded-full mt-2 hover:bg-white hover:text-blue-700 border hover:border-blue-700'>Buy tickets</button>
          </div>
        </div>

        <div className='m-3 rounded shadow-2xl shadow-slate-700 bg-white'>
          <div className='bg-slate-600 h-32 w-56 rounded relative'>
          <div className='bg-slate-600 h-32 w-56 rounded relative'>
            <img className='h-full w-full object-cover rounded' src={concert5} alt="" />
            
            </div>
            
            
          </div>
          <div className='mt-2 ms-2 mb-2'>
            <p className='font-semibold'>Rhythmic Reverie</p>
            <p>Kandy: <span className='font-thin'>2024/08/09, 7.00 pm</span></p>
            <button className='bg-blue-500 text-white py-2 px-3 rounded-full mt-2 hover:bg-white hover:text-blue-700 border hover:border-blue-700'>Buy tickets</button>
          </div>
        </div>

        

      </div>
      
    </div>
  )
}

export default popular
