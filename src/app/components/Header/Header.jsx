import Image from 'next/image'
import Navbar from './Navbar'

const Header = ({ menuOpen, toggleMenuFunction }) => {
  return (
    <div className='w-full h-96 px-4 md:px-32 flex flex-row justify-between relative z-10'>
      <div
          className="absolute top-0 left-0 bottom-0 right-0 h-full 
            bg-gradient-to-t from-transparent from-0% to-black/50 z-10"
        />
      <Image
        src='/image-hero-desktop.jpg'
        alt='hero-image'
        fill
        className='hidden md:block absolute w-full h-full object-cover object-center top-0 bottom-0 left-0 right-0 '
      />
      <Image
        src='/image-hero-mobile.jpg'
        alt='hero-image'
        fill
        className='md:hidden absolute w-full h-full object-cover object-center top-0 bottom-0 left-0 right-0 '
      />
      <Navbar
        menuOpen={menuOpen}
        toggleMenuFunction={toggleMenuFunction}
      />
    </div>
  )
}

export default Header