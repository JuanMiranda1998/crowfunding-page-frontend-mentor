import React, { useState } from 'react'
import { OPTIONS_DATA } from './MainComponent'
import Image from 'next/image'
import CloseModalIcon from '@/public/icon-close-modal.svg'
import ThankYouModal from './ThankYouModal'
import OptionModalCard from './OptionModalCard'

const DonationModal = ({ toggleModalFunction }) => {
  const [donationCompleted, setDonationCompleted] = useState(null)

   const toggleDonation = () =>{
    setDonationCompleted(!donationCompleted)
   }

  return (
    <div className='absolute -top-16 left-1/2 -translate-y-10 -translate-x-1/2 flex flex-col py-10 px-10 shadow-md rounded-lg z-20 bg-white'>
        {donationCompleted ? <ThankYouModal toggleDonationFunction={toggleDonation} /> : 
        (<div className='w-80 md:w-[760px]'>
          <div className='absolute right-6 top-8 flex items-center justify-center w-8 h-8 cursor-pointer' onClick={toggleModalFunction}>
            <Image
              src={CloseModalIcon}
              alt=''
              width={15}
              height={15}
            />
          </div>
          <h1 className='text-xl md:text-2xl font-semibold my-4'>Back this project</h1>
          <p className='text-base text-darkGray font-medium mb-4'>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
          <div className='flex flex-col gap-6 my-6'>
            <div className='flex flex-col justify-between items-center px-8 py-10 rounded-lg border border-[#dddddd]'>
                <h2 className='text-xl font-semibold'>Pledge with no reward</h2>
                <p className='text-darkGray font-medium text-base my-8'>Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.</p>
            </div>
            {
              OPTIONS_DATA.map((option) => (
                <OptionModalCard
                  key={option.id}
                  title={option.title}
                  minimumTake={option.minimumTake}
                  description={option.description}
                  isAvailable={true}
                  toggleDonationFunction={toggleDonation}
                />
              ))
            }
          </div>
        </div>)}
    </div>  
  )
}

export default DonationModal