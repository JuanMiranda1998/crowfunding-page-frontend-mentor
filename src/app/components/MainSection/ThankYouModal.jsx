import Image from 'next/image'
import React from 'react'
import CheckMarkIcon from '@/public/icon-check.svg'

const ThankYouModal = ({ toggleDonationFunction }) => {
  return (
    <div className=' w-80 md:w-[450px] mt-32 md:mt-0 flex flex-col justify-center items-center py-8 md:py-6 px-4 rounded-md text-center bg-white'>
        <div className='mb-4'>
            <Image
                src={CheckMarkIcon}
                alt=''
                width={80}
                height={80}
            />
        </div>
        <h1 className='text-xl md:text-2xl font-semibold my-4'>Thanks for your support!</h1>
        <p className='text-sm md:text-base text-darkGray font-medium mb-8 leading-6 md:leading-7'>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
        <button className='rounded-full px-8 py-3 text-white text-sm font-medium bg-moderateCyan hover:bg-darkCyan transition-colors ease-in duration-200' onClick={toggleDonationFunction}>Got it!</button>
    </div>
  )
}

export default ThankYouModal