'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Logo from '@/public/logo.svg'
import IconCloseMenu from '@/public/icon-close-menu.svg'
import IconOpenMenu from '@/public/icon-hamburger.svg'
import Link from 'next/link'
import MenuOverlay from './MenuOverlay'

const Navbar = ({ menuOpen, toggleMenuFunction }) => {
    
    const links = ['About', 'Discover', 'Get Started']
    
    return (
        <div className='flex flex-row justify-between items-start my-14 w-full overflow-hidden z-20'>
            <div>
                <Image
                    src={Logo}
                    alt='logo'
                    width={Logo.width}
                    height={Logo.height}
                />
            </div>
            <div className='hidden md:flex flex-row justify-between gap-8 text-white'>
                {links.map((link,index) => (
                    <Link href='/' key={index}>
                        <h1 className='capitalize'>
                            <span className="bg-gradient-to-r from-white/40 to-white/40 bg-[length:0px_2px] hover:bg-[length:100%_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300">{link}</span>
                        </h1>
                    </Link>
                ))}
            </div>
            <div className='flex justify-center items-center md:hidden z-0'>
                <button onClick={toggleMenuFunction}>
                    <Image 
                        src={menuOpen ? IconCloseMenu : IconOpenMenu}
                        alt=''
                        width={IconOpenMenu.width}
                        height={IconOpenMenu.height}
                    />
                </button>
                {menuOpen && <MenuOverlay links={links} />}
            </div>
        </div>
    )
}

export default Navbar