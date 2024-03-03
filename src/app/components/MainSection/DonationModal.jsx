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
    <div className='absolute top-0 left-0 bottom-0 right-0 flex flex-col justify-center items-center z-50 bg-black/50'>
        {donationCompleted ? <ThankYouModal toggleDonationFunction={toggleDonation} /> : 
        (<div className='w-80 md:w-[720px] flex flex-col py-8 px-10 bg-white rounded-lg shadow-md relative'>
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
            <div className='grid grid-cols-12 grid-rows-2 items-center place-items-center px-8 py-10 rounded-lg border border-[#dddddd]'>
                <div className='col-span-1 row-span-1 mr-8'>
                  <input className='w-6 h-6' type="radio" name="donationOption" />
                </div>
                <div className='col-span-11 row-span-2'>
                  <h2 className='text-xl font-semibold my-2'>Pledge with no reward</h2>
                  <p className='text-darkGray font-medium text-base my-4'>Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.</p>
                </div>
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