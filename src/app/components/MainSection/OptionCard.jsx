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
        {minimumTake>0 && <div className={`flex flex-col px-4 md:px-8 py-10 rounded-lg border-2 md:border border-[#dddddd] ${available ? '' : 'opacity-50'}`}>
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center'>
                <h2 className='text-xl font-semibold'>{title}</h2>
                <p className='text-sm md:text-base font-semibold md:font-medium mt-2 md:mt-0 text-moderateCyan'>Pledge ${minimumTake} or more</p>
            </div>
            <p className='text-darkGray font-medium text-base my-8'>{description}</p>
            <div className='flex flex-col md:flex-row justify-between gap-6 items-start md:items-center'>
                <p className='text-darkGray font-medium'><span className='text-3xl font-bold text-black mr-2'>{valueDisplay}</span>left</p>
                <button className={`text-white text-sm font-medium ${available ? 'bg-moderateCyan hover:bg-darkCyan transition-colors ease-in duration-200' : 'bg-darkGray'} rounded-full px-6 md:px-8 py-3`} disabled={!available} onClick={toggleFunction} >{available ? 'Select Reward' : 'Out of stock'}</button>
            </div>
        </div>}
        </>
    )
}

export default OptionCard