import React from 'react'


const OptionCard = ({ id, title, minimumTake, description, optionData, toggleFunction }) => {
    
    const data = optionData;
    const optionValues = data.find((value) => {
        return value.id === id
    })

    const value = optionValues?.amountLeft
    const valueDisplay = value ? value : 0
    const available = value > 0

    return (
        <>
        {minimumTake>0 && <div className={`flex flex-col px-8 py-10 rounded-lg border border-[#dddddd] ${available ? '' : 'opacity-50'}`}>
            <div className='flex flex-row justify-between items-center'>
                <h2 className='text-xl font-semibold'>{title}</h2>
                <p className='text-base font-medium text-moderateCyan'>Pledge ${minimumTake} or more</p>
            </div>
            <p className='text-darkGray font-medium text-base my-8'>{description}</p>
            <div className='flex flex-row justify-between items-center'>
                <p className='text-darkGray font-medium'><span className='text-3xl font-bold text-black mr-2'>{valueDisplay}</span>left</p>
                <button className={`text-white text-sm font-medium ${available ? 'bg-moderateCyan hover:bg-darkCyan transition-colors ease-in duration-200' : 'bg-darkGray'} rounded-full px-8 py-3`} disabled={!available} onClick={toggleFunction} >{available ? 'Select Reward' : 'Out of stock'}</button>
            </div>
        </div>}
        </>
    )
}

export default OptionCard