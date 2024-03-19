import React, { useState } from 'react'



const OptionModalCard = ({ 
    id,
    title,
    minimumTake, 
    description, 
    toggleDonationFunction,
    selectOptionFunction,
    makeDonationFunction,
    bookmarkState,
    bookmarkFunction,
    optionData,
    active
}) => {
    const [donation, setDonation] = useState(null)

    const data = optionData;
    const optionValues = data.find((value) => {
        return value.id === id
    })

    const value = optionValues ? optionValues.amountLeft : 'available'
    const valueDisplay = value ? value : 0
    const available = value=='available' ? true : value > 0

    const handleSubmit = (e) => {
        e.preventDefault()
        if (donation >= minimumTake){
            if (e.target[0].value == 0){
                if (!bookmarkState){
                    bookmarkFunction()
                }
            } else {
                makeDonationFunction(id, e.target[0].value)
            }  
            toggleDonationFunction()
        }
    }

    return (
        <div className={`rounded-lg border ${active ? 'border-2 border-moderateCyan' : 'border-[#dddddd]' } ${available ? '' : 'opacity-50'}`}>
                <div className='grid grid-cols-12 grid-rows-2 items-center place-items-center px-8 py-10'>
                    <div className='col-span-1 row-span-1 -translate-y-3/4 md:translate-y-0 mr-6'>
                      <input className='w-6 h-6' value={id} onChange={()=>selectOptionFunction(id)} type="radio" name="donationOption" disabled={!available} />
                    </div>
                    <div className='col-span-11 row-span-2 px-2'>
                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-col md:flex-row gap-0 md:gap-4'>
                                <h2 className='text-lg md:text-xl font-semibold hover:text-moderateCyan cursor-pointer transition-colors ease-in-out duration-150'>{title}</h2>
                                {minimumTake>0 && <p className='text-base font-medium text-moderateCyan mt-1'>Pledge ${minimumTake} or more</p>}
                            </div>
                            {minimumTake>0 && <p className='text-darkGray font-medium hidden md:block'><span className='text-2xl font-bold text-black mr-2'>{valueDisplay}</span>left</p>}
                        </div>
                        <div className='col-span-11 row-span-1 mt-2'>
                            <p className='text-darkGray font-medium text-sm md:text-base'>{description}</p>
                            {minimumTake>0 && <p className='text-darkGray font-medium md:hidden mt-6'><span className='text-2xl font-bold text-black mr-2'>{valueDisplay}</span>left</p>}
                        </div>
                    </div>
                </div>
                {active && available &&
                    <div className='w-full flex flex-col md:flex-row justify-between items-center p-6 border-t-2 border-t-[#dddddd]'>
                        {minimumTake>0 &&<p className=' text-darkGray font-medium mb-4 md:mb-0'>Enter you pledge</p>}
                        <form className='flex flex-row' onSubmit={handleSubmit}>
                            {minimumTake>0 && <div className='relative'><input className='w-24 px-8 py-2 mr-4 text-base font-semibold rounded-full focus:outline-none border border-moderateCyan' onChange={(e) => setDonation(e.target.value)} type="number" autoFocus /><span className='text-darkGray font-semibold absolute top-1/2 left-4 -translate-y-3'>$</span></div>}
                            <button className='py-3 px-6 rounded-full bg-moderateCyan font-medium text-sm text-white hover:bg-darkCyan transition-colors ease-in duration-200' type='submit'>Continue</button>
                        </form>
                    </div>
                }
            </div>
    )
}

export default OptionModalCard