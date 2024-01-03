import React, { useState ,useEffect} from 'react';
import './Meme.css';



function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottonText: "",
    randowImage: "http://i.imgflip.com/1bij.jpg"

  })

  const [memeImg, setMemeAllImg] = useState([]);


  function handleClick() {
  
    const randomNumber = Math.floor(Math.random() * memeImg.length);
    const url = memeImg[randomNumber].url;
    setMeme(prevMeme => ({
      ...prevMeme,
      randowImage: url


    }))
  }

    function handle(event) {
      const { name, value } = event.target;
      setMeme(prev => ({
        ...prev,
        [name]: value
      }))
    }
    useEffect(() => {
      async function getMemes() {
          const res = await fetch("https://api.imgflip.com/get_memes")
          const data = await res.json()
        setMemeAllImg(data.data.memes)
      }
      getMemes()
  }, [])
  

  return (
    <>
      <main className='p-10'>
        <div className='w-full grid grid-cols-2 gap-10 '>
          <input type="text"
            placeholder='Shut up'
            className='border border-black rounded-md py-2 '
            name='topText'
            value={meme.topText}
            onChange={handle} />

          <input type='text'
            placeholder='and take my money'
            className='border border-black rounded-md py-2'
            name='bottonText'
            value={meme.bottonText}
            onChange={handle} />


          <button type='submit' onClick={handleClick} className='bg-purple-800 text-white  py-2  col-span-full rounded'>Get a new image meme</button>
        </div>
      </main>
      <div className='relative'>
        <div className="flex items-center justify-center ">
      <img src={meme.randowImage} alt=''/>

        </div>
      <h2 className="meme--text top">{meme.topText}</h2>
      <h2 className="meme--text bottom">{meme.bottonText}</h2>
      </div>
   
    </>
  )
}

export default Meme;