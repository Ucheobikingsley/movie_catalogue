import React from 'react'
type Props = {
    movie: {
        title?: string;
    }
  };
const MovieCard = (prop: Props) => {
  return (
    <div className='bg-white shadow-sm rounded-md cursor-pointer'>{prop.movie.title}</div>
  )
}

export default MovieCard