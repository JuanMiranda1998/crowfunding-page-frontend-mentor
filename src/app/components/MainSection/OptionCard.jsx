import React from 'react'
import { OPTIONS_DATA } from './MainComponent'


const OptionCard = ({ title, minimumTake, description, isAvailable, toggleFunction }) => {

    
    return (
        <>
        {minimumTake>0 && <div className={`flex flex-col px-8 py-10 rounded-lg border border-[#dddddd] ${isAvailable ? '' : 'opacity-50'}`}>
            <div className='flex flex-row justify-between items-center'>
                <h2 className='text-xl font-semibold'>{title}</h2>
                <p className='text-base font-medium text-moderateCyan'>Pledge ${minimumTake} or more</p>
            </div>
            <p className='text-darkGray font-medium text-base my-8'>{description}</p>
            <div className='flex flex-row justify-between items-center'>
                <p className='text-darkGray font-medium'><span className='text-3xl font-bold text-black mr-2'>100</span>left</p>
                <button className={`text-white text-sm font-medium ${isAvailable ? 'bg-moderateCyan hover:bg-darkCyan transition-colors ease-in duration-200' : 'bg-darkGray'} rounded-full px-8 py-3`} disabled={!isAvailable} onClick={toggleFunction} >{isAvailable ? 'Select Reward' : 'Out of stock'}</button>
            </div>
        </div>}
        </>
    )
}

export default OptionCard