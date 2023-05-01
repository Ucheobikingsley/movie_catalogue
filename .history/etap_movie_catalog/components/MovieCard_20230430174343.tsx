import React from 'react'
import Image from 'next/image';
type Props = {
    movie: {
        title?: string;
        poster_path:string;
    }
  };
const MovieCard = (prop: Props) => {
  return (
    <div className='bg-white shadow-sm rounded-md cursor-pointer'>
        <Image src={`https://image.tmdb.org/t/p/w500${prop.movie.poster_path}`} alt="image_poster" width={700} height={800} className="rounded-t-md"/>
        <div className='px-6 py-2'>
            <div>{prop.movie.title}</div>
        </div>
    </div>
  )
}

export default MovieCard