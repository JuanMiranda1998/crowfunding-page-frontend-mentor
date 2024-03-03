import React, { useEffect, useState } from 'react'
import { OPTIONS_DATA } from './MainComponent'



const OptionModalCard = ({ 
    title,
    minimumTake, 
    description, 
    isAvailable, 
    toggleDonationFunction 
}) => {

    
    return (
        <div className={`grid grid-cols-12 grid-rows-2 px-8 py-10 rounded-lg border border-[#dddddd] ${isAvailable ? '' : 'opacity-50'}`}>
            <div className='col-span-1 row-span-2 mr-8'>
                  <input className='w-6 h-6' type="radio" />
            </div>
            <div className='flex flex-row justify-between col-span-11 row-span-1'>
                <div className='flex flex-row gap-4'>
                    <h2 className='text-xl font-semibold'>{title}</h2>
                    <p className='text-base font-medium text-moderateCyan mt-1'>Pledge ${minimumTake} or more</p>
                </div>
                <p className='text-darkGray font-medium'><span className='text-3xl font-bold text-black mr-2'>100</span>left</p>
            </div>
            <div className='col-span-11 row-span-1'>
                <p className='text-darkGray font-medium text-base'>{description}</p>
            </div>
        </div>
    )
}

export default OptionModalCard