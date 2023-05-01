import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-gray-700 '>
        <div className="font-bold text-neutral-100 p-4 max-w-7xl mx-auto container tracking-widest font-neue">
            <Link href="/" className='text-base md:text-2xl'>
                Movie<span className='text-red-600'>Zone</span>
            </Link>

        </div>
    </div>
  )
}

export default Navbar