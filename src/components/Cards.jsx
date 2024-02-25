import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen flex gap-5 items-center px-32 bg-zinc-900'>
        <div className='card-container  w-1/2 h-[50vh]'>
            <div className='relative card w-full h-full rounded-3xl  bg-[#004D43] flex items-center justify-center '>
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute left-10 bottom-10 px-3 py-1 rounded-full border-2'>&copy;2019-2022</button>
            </div>
        </div>
        <div className='card-container flex gap-5 h-[50vh] w-1/2'>
        <div className=' card relative w-1/2 h-full rounded-3xl  bg-[#0d1716] flex items-center justify-center '>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            <button className='absolute left-10 bottom-10 px-3 py-1 rounded-full border-2'>RATING 5.O ON CLUTCH</button>
        </div>
        <div className='relative card w-1/2 h-full rounded-3xl  bg-[#070a0a] flex items-center justify-center'>
            <img className='w-36' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
            <button className='absolute left-10 bottom-10 px-3 py-1 rounded-full border-2'>BUSINESS BOOTCAMP SHOW</button>
        </div>

        </div>
    </div>
  )
}

export default Cards