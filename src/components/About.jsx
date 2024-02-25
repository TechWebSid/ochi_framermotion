import React from 'react'

const About = () => {
  return (
    <div className='p-20 w-full bg-[#CDEA68] rounded-tl-3xl roudned-tr-3xl text-black'>
        <h1 className='font-["Neue_Montreal"] p-20 text-6xl leading-[55px] font-normal'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className='w-full flex gap-5  border-t-[1px] border-[#070303] '>
            <div className='w-1/2 pt-10 px-20 '>
                <h1 className='text-6xl font-semibold'>Our Approach</h1>
                <button className=' flex gap-6 items-center px-10 py-6 bg-zinc-900 rounded-full mt-10 text-white font-["Neue_Montreal"]'>Read More
                <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                </button>
            </div>
            <div className='w-1/2 h-[60vh] rounded-3x mt-10 '>
                <img className='w-full object-cover  rounded-3xl' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default About