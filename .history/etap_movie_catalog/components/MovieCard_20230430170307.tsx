import React from 'react'
type Props = {
    movie: {
        title?: string;
    }
  };
const MovieCard = (prop: Props) => {
  return (
    <div>{prop.movie.title}</div>
  )
}

export default MovieCard