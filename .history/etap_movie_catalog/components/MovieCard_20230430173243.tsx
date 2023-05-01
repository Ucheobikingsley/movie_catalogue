import React from 'react'
import Image from 'next/image';
type Props = {
    movie: {
        title?: string;
        poser_path:string;
    }
  };
const MovieCard = (prop: Props) => {
  return (
    <div className='bg-white shadow-sm rounded-md cursor-pointer'>
        <Image src={`https://image.tmdb.org/t/p/w500/${prop.movie.poser_path}`} alt="image_poster" width={700} height={800} className="rounded-t-md"/>
    </div>
  )
}

export default MovieCard