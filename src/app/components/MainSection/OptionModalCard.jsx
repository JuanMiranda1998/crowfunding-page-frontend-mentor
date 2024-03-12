import React, { useState } from 'react'



const OptionModalCard = ({ 
    id,
    title,
    minimumTake, 
    description, 
    toggleDonationFunction,
    selectOptionFunction,
    makeDonationFunction,
    active
}) => {
    const [donation, setDonation] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target[0].value)
        if (donation >= minimumTake){
            makeDonationFunction(id, e.target[0].value)
            toggleDonationFunction()
        }
    }

    return (
        <div className={`rounded-lg border ${active ? 'border-2 border-moderateCyan' : 'border-[#dddddd]' } `}>
                <div className='grid grid-cols-12 grid-rows-2 items-center place-items-center px-8 py-10'>
                    <div className='col-span-1 row-span-1 mr-8'>
                      <input className='w-6 h-6' value={id} onChange={()=>selectOptionFunction(id)} type="radio" name="donationOption" />
                    </div>
                    <div className='col-span-11 row-span-2'>
                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-row gap-4'>
                                <h2 className='text-xl font-semibold hover:text-moderateCyan cursor-pointer transition-colors ease-in-out duration-150'>{title}</h2>
                                {minimumTake>0 && <p className='text-base font-medium text-moderateCyan mt-1'>Pledge ${minimumTake} or more</p>}
                            </div>
                            {minimumTake>0 && <p className='text-darkGray font-medium'><span className='text-2xl font-bold text-black mr-2'>100</span>left</p>}
                        </div>
                        <div className='col-span-11 row-span-1 mt-2'>
                            <p className='text-darkGray font-medium text-base'>{description}</p>
                        </div>
                    </div>
                </div>
                {active && 
                    <div className='w-full flex flex-col md:flex-row justify-between items-center p-6 border-t-2 border-t-[#dddddd]'>
                        {minimumTake>0 &&<p className=' text-darkGray font-medium'>Enter you pledge</p>}
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