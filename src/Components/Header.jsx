import React from 'react'
import Meme from './Meme'


function Navbar() {
  return (
    <>
    <header className=' h-20 bg-purple-800 flex p-5'>
      <img src="./image/troll-face.png" alt='' className='h-full mr-2'/>
      <h1 className='text-white text-xl mt-1'>Meme Generator</h1>
    </header>
    <Meme/> 
    </>
   


  )
}

export default Navbar