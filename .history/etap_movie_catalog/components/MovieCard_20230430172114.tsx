import React from 'react'
type Props = {
    movie: {
        title?: string;
        poser_path:string;
    }
  };
const MovieCard = (prop: Props) => {
  return (
    <div className='bg-white shadow-sm rounded-md cursor-pointer'>
        <Image src={`https://image.tmdb.org/t/p/w500${prop.movie.poser_path}`}/>
    </div>
  )
}

export default MovieCard