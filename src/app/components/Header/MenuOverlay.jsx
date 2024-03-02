import Link from 'next/link'
import React from 'react'

const MenuOverlay = ({ links }) => {
  return (
    <div className='absolute w-80 top-[25%] left-1/2 overflow-auto -translate-x-1/2 z-30 px-5 rounded-lg bg-white shadow-md text-left'>
      {
        links.map((link, index) => (
          <div className='py-6 border-b border-[#f4f4f4]' key={index}>
            <Link href='/' >
              <h1 className='text-xl font-semibold text-black capitalize'>
                {link}
              </h1>
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default MenuOverlay