import React from 'react'
type Props = {
    title: string;
  };
const MovieCard = ({movie}: Props) => {
  return (
    <div>{movie.title}</div>
  )
}

export default MovieCard