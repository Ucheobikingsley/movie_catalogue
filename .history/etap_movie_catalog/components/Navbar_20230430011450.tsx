import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-gray-700 '>
        <div className="font-bold text-neutral-100 p-4 max-w-7xl mx-auto container tracking-widest">
            <Link href="/">
                <a>Movie <span>Zone</span></a>
            </Link>

        </div>
    </div>
  )
}

export default Navbar