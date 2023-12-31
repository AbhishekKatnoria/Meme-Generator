import React from 'react'
import memeData from '../memeData'



function Meme() {


 function handleClick(){
  console.log(memeData);
}

  return (
    <>

      <main className='p-10'>
        <div className='w-full grid grid-cols-2 gap-10 '>
          <input type="text" placeholder='Shut up' className='border border-black rounded-md py-2 ' />
          <input type='text' placeholder='and take my money' className='border border-black rounded-md py-2' />
          <button type='submit' onClick={handleClick} className='bg-purple-800 text-white  py-2  col-span-full'>Get a new image meme</button>
        </div>
      </main>
    </>
  )
}

export default Meme