import Image from 'next/image'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='w-full h-96 px-4 md:px-32 flex flex-row justify-between relative z-0'>
      <div
          className="absolute top-0 left-0 bottom-0 right-0 h-full 
            bg-gradient-to-t from-transparent from-0% to-black/50"
        />
      <Image
        src='/image-hero-desktop.jpg'
        alt='hero-image'
        fill
        className='absolute w-full h-full object-cover object-center top-0 bottom-0 left-0 right-0 -z-20'
      />
      <Navbar />
    </div>
  )
}

export default Header