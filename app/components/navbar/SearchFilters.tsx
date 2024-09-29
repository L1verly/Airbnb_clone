import Image from 'next/image'
import React from 'react'

const SearchFilters = () => {
  return (
    <div className='h-[64px] flex flex-row items-center justify-between border rounded-full'>
        <div className='hidden lg:block'>
            <div className='flex flex-row items-center justify-between'>
                <div className='cursor-pointer w-[250px] h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100'>
                    <p className='text-xs font-semibold'>Where</p>
                    <p className='text-sm'>Desired location</p>
                </div>
                <div className='cursor-pointer h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100'>
                    <p className='text-xs font-semibold'>Check in</p>
                    <p className='text-sm'>Add dates</p>
                </div>
                <div className='cursor-pointer h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100'>
                    <p className='text-xs font-semibold'>Check out</p>
                    <p className='text-sm'>Add dates</p>
                </div>
                <div className='cursor-pointer h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100'>
                    <p className='text-xs font-semibold'>Who</p>
                    <p className='text-sm'>Add guests</p>
                </div>
            </div>
        </div>
        <div className="p-2">
            <div className="p-4 bg-airbnb rounded-full hover:bg-airbnb-dark transition cursor-pointer">
                <Image src='/search.svg' alt='Search' width={16} height={16} 
                    fill={false} className="stroke-4 stroke-current overflow-visible"
                    aria-hidden="true" role="presentation"/>
            </div>
        </div>
    </div>
  )
}

export default SearchFilters;