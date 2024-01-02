import React, { useState } from 'react';
import memeData from '../memeData';



function Meme() {
  const [meme,setMeme]=useState({
    topText:"",
    bottonText:"",
    randowImage:"http://i.imgflip.com/1bij.jpg"

  })

  const [memeImg,setMemeAllImg]=useState(memeData);


  function handleClick() {
    const memeArray = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    const url=memeArray[randomNumber].url;
      setMeme(prevMeme=>({
           ...prevMeme,
          randowImage:url  
      }))
  }

  return (
    <>
      <main className='p-10'>
        <div className='w-full grid grid-cols-2 gap-10 '>
          <input type="text" placeholder='Shut up' className='border border-black rounded-md py-2 ' />
          <input type='text' placeholder='and take my money' className='border border-black rounded-md py-2' />
          <button type='submit' onClick={handleClick} className='bg-purple-800 text-white  py-2  col-span-full rounded'>Get a new image meme</button>
        </div>
      </main>
        <img src={meme.randowImage} className="text-center  "/> 
    </>
  )
}

export default Meme;