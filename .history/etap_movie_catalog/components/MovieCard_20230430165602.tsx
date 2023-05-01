import React from 'react'
type Props = {
    ttile: string;
  };
const MovieCard = ({movie}: Props) => {
  return (
    <div>{movie.title}</div>
  )
}

export default MovieCard