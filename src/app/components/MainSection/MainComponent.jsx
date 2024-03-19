'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import BrandLogo from '@/public/logo-mastercraft.svg'
import OptionCard from './OptionCard'
import StatsComponent from './StatsComponent'
import DonationModal from './DonationModal'
import { BookmarkIcon } from '../Icons'
import Header from '../Header/Header'

export const OPTIONS_DATA = [
    {
        id: 1,
        title: 'Pledge with no reward',
        minimumTake: 0,
        description: "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
    },
    {
        id: 2,
        title: 'Bamboo Stand',
        minimumTake: 25,
        description: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.",
    },
    {
        id: 3,
        title: "Black Edition Stand",
        minimumTake: 75,
        description: "You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
    },
    {
        id: 4,
        title: "Mahogany Special Edition",
        minimumTake: 200,
        description: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
    }
]

const MainComponent = () => {
    const [optionValues, setOptionValues] = useState([
        {
            id: 2,
            amountLeft: 101,
        },
        {
            id: 3,
            amountLeft: 64,
        },
        {
            id: 4,
            amountLeft: 0,
        }
    ])
    const [stats, setStats] = useState({
        backed: 89914,
        backers: 5007,
        daysLeft: 56,
    })
    const [donationModalOpen, setDonationModalOpen] = useState(false)
    const [bookmarked, setBookmarked] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const toggleDonationModal = () => {
        setDonationModalOpen(!donationModalOpen)
    }

    const toggleBookmarked = () => {
        setBookmarked(!bookmarked)
    }

    const makeDonation = (id, amount) => {
        reduceBackersDisp(id);
        const { backed, backers } = stats;
        const formattedAmount = parseInt(amount);
        setStats({...stats, backed: backed + formattedAmount, backers: backers + 1 });
    }

    const reduceBackersDisp = (optionId) => {
        const newArr = []; 
        optionValues.forEach((value) => {
            if (value.id === optionId){
                const newNum = value.amountLeft - 1
                const newValue = {id: value.id, amountLeft: newNum}
                newArr.push(newValue)
            } else {
                newArr.push(value);
            }
        })
        setOptionValues(newArr)
    }

    return (
        <div className='w-full h-full flex flex-col justify-center items-center relative'>
            <Header
                menuOpen={menuOpen}
                toggleMenuFunction={toggleMenu}
            />
            <div className={`w-80 md:w-[800px] flex flex-col gap-6 px-4 md:px-0 -mt-20 ${menuOpen ? 'z-0' : 'z-10' }`}>
                <section className='flex flex-col justify-center items-center text-center bg-white rounded-lg border-2 border-[#f4f4f4]'>
                    <div className='rounded-full overflow-hidden w-16 h-16 -mt-8 aspect-square'>
                        <Image
                            src={BrandLogo}
                            alt='brand'
                            width={BrandLogo.width}
                            height={BrandLogo.height}
                        />
                    </div>
                    <h1 className='font-semibold text-xl md:text-3xl mt-6 mb-4 px-6 md:px-0'>Mastercraft Bamboo Monitor Riser</h1>
                    <p className='font-medium text-sm md:text-lg text-darkGray mb-6 px-6 md:px-0'>A beautiful &amp; handcrafted monitor stand to reduce neck and eye strain.</p>
                    <div className='flex flex-row justify-center gap-4 md:justify-between items-center px-4 md:px-10 mt-6 mb-10 w-full'>
                        <button 
                        className='py-4 px-4 md:px-10 rounded-full bg-moderateCyan font-medium text-white hover:bg-darkCyan transition-colors ease-in duration-200' 
                        onClick={toggleDonationModal}>
                        Back this project
                        </button>
                        <div className={`${bookmarked ? 'text-darkCyan' : 'text-darkGray'} h-14 w-14 md:w-40 md:pl-4 rounded-full md:rounded-r-full md:bg-[#f4f8f9] font-semibold relative cursor-pointer hover:opacity-70 transition-opacity ease-in duration-200 flex items-center justify-center`} onClick={toggleBookmarked}>
                            <BookmarkIcon
                                className='w-full h-full absolute transform md:-left-6 top-0'
                                colorCircle={bookmarked ? '#147b74' : "#2F2F2F"}
                                colorPath={bookmarked ? '#FFFFFF' : "#B1B1B1"}
                            />
                            <p className='hidden md:block'>{bookmarked ? 'Bookmarked' : "Bookmark"}</p>
                        </div>
                    </div>
                </section>
                <StatsComponent stats={stats} />
                <section className='flex flex-col justify-center items-start bg-white rounded-lg border-2 border-[#f4f4f4] py-10 px-4 md:px-16'>
                    <h2 className='text-2xl font-semibold my-6'>About this project</h2>
                    <p className='text-sm md:text-base text-darkGray font-medium mb-6 leading-6'>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>
                    <p className='text-sm md:text-base text-darkGray font-medium mb-6 leading-6'>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>
                    <div className='flex flex-col gap-6 my-6'>
                        {
                            OPTIONS_DATA.map((option) => (
                                <OptionCard
                                    key={option.id}
                                    id={option.id}
                                    title={option.title}
                                    minimumTake={option.minimumTake}
                                    description={option.description}
                                    optionData={optionValues}
                                    toggleFunction={toggleDonationModal}
                                />
                            ))
                        }
                    </div>
                </section>
            </div>
            {donationModalOpen && 
            <DonationModal 
            bookmarkFunction={toggleBookmarked}
            bookmarkState={bookmarked}
            toggleModalFunction={toggleDonationModal} 
            donationFunction={makeDonation} 
            optionData={optionValues}
            />}
        </div>
    )
}

export default MainComponent