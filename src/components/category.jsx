import React from 'react'
import concert from '../assets/music.png'
import exhibition from '../assets/exhibition.png'
import festival from '../assets/festival.png'
import party from '../assets/party.png'
import movie from '../assets/movie.png'
import culinary from '../assets/culinary.png'
import sports from '../assets/sports.png'
import kid from '../assets/kid.png'



const category = () => {

  const catIcons =[{concert}, {exhibition}, {festival}, {party}, {movie}, {culinary}, {sports}, {kid}]

  const cat = ["Concerts", "Exhibitions", "Festivels", "Parties", "Movies", "Culinary", "Sports", "Kids"]

  const categoryItem = {
    Concerts : concert,
    Exhibitions : exhibition,
    Festivels : festival,
    Parties : party,
    Movies : movie,
    Culinary : culinary,
    Sports : sports,
    Kids : kid,
  }
  return (
    <div className='container mx-auto bg-white rounded grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-5 mt-6 py-24'>
      
        {cat.map((cat) => {
          return<div className='mx-auto flex justify-between border border-1 border-blue-700 h-10 w-56 py-6 px-8 items-center rounded-md mb-3 hover:bg-blue-200 hover:text-blue-700  shadow-lg shadow-slate-400 bg-white'> 
            <div>
            <img className='h-7 w-7 me-5' src={categoryItem[cat]} alt='' />
            </div>

            <div>
              <p>{cat}</p>
            </div>
          </div>
        })}
      
      
    </div>
  )
}

export default category
