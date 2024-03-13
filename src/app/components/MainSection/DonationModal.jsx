import React, { useState } from 'react'
import { OPTIONS_DATA } from './MainComponent'
import Image from 'next/image'
import CloseModalIcon from '@/public/icon-close-modal.svg'
import ThankYouModal from './ThankYouModal'
import OptionModalCard from './OptionModalCard'

const DonationModal = ({ bookmarkState, bookmarkFunction, toggleModalFunction, donationFunction, optionData }) => {
  const [donationCompleted, setDonationCompleted] = useState(null)
  const [activeOption, setActiveOption] = useState(null)

   const toggleDonation = () =>{
    setDonationCompleted(!donationCompleted)
   }

   const selectOption = (id) =>{
    setActiveOption(id)
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
            {
              OPTIONS_DATA.map((option) => (
                <OptionModalCard
                  key={option.id}
                  id={option.id}
                  title={option.title}
                  minimumTake={option.minimumTake}
                  description={option.description}
                  bookmarkState={bookmarkState}
                  bookmarkFunction={bookmarkFunction}
                  toggleDonationFunction={toggleDonation}
                  selectOptionFunction={selectOption}
                  makeDonationFunction={donationFunction}
                  optionData={optionData}
                  active={activeOption === option.id}
                />
              ))
            }
          </div>
        </div>)}
    </div>  
  )
}

export default DonationModal