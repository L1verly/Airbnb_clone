import Image from 'next/image'
import React from 'react'
import superstarsPic from '@/public/superstars.webp'

const Categories = () => {
  return (
    <div className='pt-3 cursor-pointer pb-6 flex items-center space-x-12 justify-evenly'>
      <div className="pb-4 flex flex-col items-center space-y-2 opacity-60 hover:opacity-100 hover:border-gray-200 border-b-2 border-white">
        <Image src={superstarsPic} alt='Superstars' width={25}/>
        <div>Superstars</div>
      </div>
      <div className="pb-4 flex flex-col items-center space-y-2 opacity-60 hover:opacity-100 hover:border-gray-200 border-b-2 border-white">
        <Image src={superstarsPic} alt='Superstars' width={25}/>
        <div>Some other category</div>
      </div>
      <div className="pb-4 flex flex-col items-center space-y-2 opacity-60 hover:opacity-100 hover:border-gray-200 border-b-2 border-white">
        <Image src={superstarsPic} alt='Superstars' width={25}/>
        <div>Another category</div>
      </div>
      <div className="pb-4 flex flex-col items-center space-y-2 opacity-60 hover:opacity-100 hover:border-gray-200 border-b-2 border-white">
        <Image src={superstarsPic} alt='Superstars' width={25}/>
        <div>One more category</div>
      </div>
    </div>
  )
}

export default Categories