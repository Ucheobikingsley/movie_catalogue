import React from 'react'
import Image from 'next/image';
type Props = {
    movie: {
        title?: string;
        genre:string;
        created_at?:string;
    }
  };
const MovieCard = (prop: Props) => {
  return (
    <div className='bg-white shadow-sm rounded-md cursor-pointer'>
        <Image src={`/movie.webp`} alt="image_poster" width={700} height={800} className="rounded-t-md"/>
        <div className='px-6 py-2' > 
            <div className='font-bold text-xl mb-1'>{prop.movie.title}</div>
            <p className='text-gray-700 text-base mb-1'><span className='text-blue' >genre: </span>{prop.movie.genre}</p>
            <p className='text-gray-700 text-base mb-1'>{prop.movie.created_at}</p>
        </div>
    </div>
  )
}

export default MovieCard