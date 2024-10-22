import React from 'react'
import galleFort from '../assets/galle-fort.webp'
import yala from '../assets/yala.jpg'
import ella from '../assets/ella.jpg'
import museum from '../assets/musium.jpg'
import ceylontea from '../assets/ceylontea.jpg'
import amanwella from '../assets/amanwella.jpg'
import welgama from '../assets/weligama.jpg'
import cinnemon from '../assets/cinnemon.jpg'
import citycenter from '../assets/citycenter.jpg'
import liberty from '../assets/liberty.jpg'
import majestic from '../assets/majestic.jpg'
import tangalla from '../assets/tangalla.jpg'
import dutch from '../assets/dutch.jpg'
import fatcrab from '../assets/fatcrab.jpg'


const venues = () => {
  return (
    <div className='container mx-auto bg-slate-300 overflow-x-auto mt-6 rounded pb-8'>
      <div className='font-semibold text-3xl m-6'>
        <p>Venues to follow</p>
      </div>

      <div className=' overflow-x-auto mt-6 rounded flex px-4 gap-5 pb-6'>
        {/* first */}
        <div className='flex flex-col items-center rounded px-16 py-6 bg-white shadow-2xl shadow-slate-700'>
          <div className='w-24 h-24 '>
            <img className='rounded-full w-full h-full object-cover' src={galleFort} alt="" />
          </div>

          <div className='py-2 flex flex-col items-center'>
            <p className='font-semibold'>Galle Fort</p>
            <p className='font-thin text-sm'>256 Followers</p>
          </div>

          <div>
            <button className='border border-white hover:border-blue-600 hover:text-blue-600 hover:bg-white px-5 py-1 rounded-full bg-blue-600 text-white'>Follow</button>
          </div>
        </div>

        {/* Second */}
        <div className=' flex flex-col items-center rounded px-16 py-6 bg-white shadow-2xl shadow-slate-700'>
          <div className='w-24 h-24 '>
            <img className='rounded-full w-full h-full object-cover' src={yala} alt="" />
          </div>

          <div className='py-2 flex flex-col items-center'>
            <p className='font-semibold'>Yala Park</p>
            <p className='font-thin text-sm'>564 Followers</p>
          </div>

          <div>
            <button className='border border-white hover:border-blue-600 hover:text-blue-600 hover:bg-white px-5 py-1 rounded-full bg-blue-600 text-white'>Follow</button>
          </div>
        </div>

        {/* Third */}
        <div className='flex flex-col items-center rounded px-16 py-6 bg-white shadow-2xl shadow-slate-700'>
          <div className='w-24 h-24 '>
            <img className='rounded-full w-full h-full object-cover' src={ella} alt="" />
          </div>

          <div className='py-2 flex flex-col items-center'>
            <p className='font-semibold'>Ella view</p>
            <p className='font-thin text-sm'>968 Followers</p>
          </div>

          <div>
            <button className='border border-white hover:border-blue-600 hover:text-blue-600 hover:bg-white px-5 py-1 rounded-full bg-blue-600 text-white'>Follow</button>
          </div>
        </div>

        {/* Fourth */}
        <div className='flex flex-col items-center rounded px-16 py-6 bg-white shadow-2xl shadow-slate-700'>
          <div className='w-24 h-24 '>
            <img className='rounded-full w-full h-full object-cover' src={museum} alt="" />
          </div>

          <div className='py-2 flex flex-col items-center'>
            <p className='font-semibold'>Museum</p>
            <p className='font-thin text-sm'>1025 Followers</p>
          </div>

          <div>
            <button className='border border-white hover:border-blue-600 hover:text-blue-600 hover:bg-white px-5 py-1 rounded-full bg-blue-600 text-white'>Follow</button>
          </div>
        </div>

        {/* Third */}
        <div className='flex flex-col items-center rounded px-16 py-6 bg-white shadow-2xl shadow-slate-700'>
          <div className='w-24 h-24 '>
            <img className='rounded-full w-full h-full object-cover' src={ceylontea} alt="" />
          </div>

          <div className='py-2 flex flex-col items-center'>
            <p className='font-semibold'>Ceylon Tea</p>
            <p className='font-thin text-sm'>664 Followers</p>
          </div>

          <div>
            <button className='border border-white hover:border-blue-600 hover:text-blue-600 hover:bg-white px-5 py-1 rounded-full bg-blue-600 text-white'>Follow</button>
          </div>
        </div>

        {/* Fifth */}
        <div className='flex flex-col items-centerrounded px-16 py-6 bg-white shadow-2xl shadow-slate-700'>
          <div className='w-24 h-24 '>
            <img className='rounded-full w-full h-full object-cover' src={amanwella} alt="" />
          </div>

          <div className='py-2 flex flex-col items-center'>
            <p className='font-semibold'>Amanwella </p>
            <p className='font-thin text-sm'>745 Followers</p>
          </div>

          <div>
            <button className='border border-white hover:border-blue-600 hover:text-blue-600 hover:bg-white px-5 py-1 rounded-full bg-blue-600 text-white'>Follow</button>
          </div>
        </div>

        {/* sixth */}
        <div className='flex flex-col items-center rounded px-16 py-6 bg-white shadow-2xl shadow-slate-700'>
          <div className='w-24 h-24 '>
            <img className='rounded-full w-full h-full object-cover' src={welgama} alt="" />
          </div>

          <div className='py-2 flex flex-col items-center'>
            <p className='font-semibold'>Weligama</p>
            <p className='font-thin text-sm'>478 Followers</p>
          </div>

          <div>
            <button className='border border-white hover:border-blue-600 hover:text-blue-600 hover:bg-white px-5 py-1 rounded-full bg-blue-600 text-white'>Follow</button>
          </div>
        </div>

        {/* seventh */}
        <div className='flex flex-col items-center rounded px-16 py-6 bg-white shadow-2xl shadow-slate-700'>
          <div className='w-24 h-24 '>
            <img className='rounded-full w-full h-full object-cover' src={cinnemon} alt="" />
          </div>

          <div className='py-2 flex flex-col items-center'>
            <p className='font-semibold'>Cinnamon</p>
            <p className='font-thin text-sm'>586 Followers</p>
          </div>

          <div>
            <button className='border border-white hover:border-blue-600 hover:text-blue-600 hover:bg-white px-5 py-1 rounded-full bg-blue-600 text-white'>Follow</button>
          </div>
        </div>

        {/* eighth */}
        <div className='flex flex-col items-center rounded px-16 py-6 bg-white shadow-2xl shadow-slate-700'>
          <div className='w-24 h-24 '>
            <img className='rounded-full w-full h-full object-cover' src={citycenter} alt="" />
          </div>

          <div className='py-2 flex flex-col items-center'>
            <p className='font-semibold'>City Centre</p>
            <p className='font-thin text-sm'>746 Followers</p>
          </div>

          <div>
            <button className='border border-white hover:border-blue-600 hover:text-blue-600 hover:bg-white px-5 py-1 rounded-full bg-blue-600 text-white'>Follow</button>
          </div>
        </div>

        {/* nineth */}
        <div className='flex flex-col items-center rounded px-16 py-6 bg-white shadow-2xl shadow-slate-700'>
          <div className='w-24 h-24 '>
            <img className='rounded-full w-full h-full object-cover' src={liberty} alt="" />
          </div>

          <div className='py-2 flex flex-col items-center'>
            <p className='font-semibold'>Liberty Plaza</p>
            <p className='font-thin text-sm'>688 Followers</p>
          </div>

          <div>
            <button className='border border-white hover:border-blue-600 hover:text-blue-600 hover:bg-white px-5 py-1 rounded-full bg-blue-600 text-white'>Follow</button>
          </div>
        </div>

        {/* tenth */}
        <div className='flex flex-col items-center rounded px-16 py-6 bg-white shadow-2xl shadow-slate-700'>
          <div className='w-24 h-24 '>
            <img className='rounded-full w-full h-full object-cover' src={majestic} alt="" />
          </div>

          <div className='py-2 flex flex-col items-center'>
            <p className='font-semibold'>Majestic City</p>
            <p className='font-thin text-sm'>425 Followers</p>
          </div>

          <div>
            <button className='border border-white hover:border-blue-600 hover:text-blue-600 hover:bg-white px-5 py-1 rounded-full bg-blue-600 text-white'>Follow</button>
          </div>
        </div>

        {/* eleventh */}
        <div className='flex flex-col items-center rounded px-16 py-6 bg-white shadow-2xl shadow-slate-700'>
          <div className='w-24 h-24 '>
            <img className='rounded-full w-full h-full object-cover' src={tangalla} alt="" />
          </div>

          <div className='py-2 flex flex-col items-center'>
            <p className='font-semibold'>Tangalle</p>
            <p className='font-thin text-sm'>742 Followers</p>
          </div>

          <div>
            <button className='border border-white hover:border-blue-600 hover:text-blue-600 hover:bg-white px-5 py-1 rounded-full bg-blue-600 text-white'>Follow</button>
          </div>
        </div>

        {/* twelth */}
        <div className='flex flex-col items-center rounded px-16 py-6 bg-white shadow-2xl shadow-slate-700'>
          <div className='w-24 h-24 '>
            <img className='rounded-full w-full h-full object-cover' src={dutch} alt="" />
          </div>

          <div className='py-2 flex flex-col items-center'>
            <p className='font-semibold'>Dutch</p>
            <p className='font-thin text-sm'>812 Followers</p>
          </div>

          <div>
            <button className='border border-white hover:border-blue-600 hover:text-blue-600 hover:bg-white px-5 py-1 rounded-full bg-blue-600 text-white'>Follow</button>
          </div>
        </div>

        {/* thirteenth */}
        <div className='flex flex-col items-center rounded px-16 py-6 bg-white shadow-2xl shadow-slate-700'>
          <div className='w-24 h-24 '>
            <img className='rounded-full w-full h-full object-cover' src={fatcrab} alt="" />
          </div>

          <div className='py-2 flex flex-col items-center'>
            <p className='font-semibold'>Fat Crab</p>
            <p className='font-thin text-sm'>474 Followers</p>
          </div>

          <div>
            <button className='border border-white hover:border-blue-600 hover:text-blue-600 hover:bg-white px-5 py-1 rounded-full bg-blue-600 text-white'>Follow</button>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default venues
