import React from 'react'

const MovieCard = ({movie}: {{title:string}}) => {
  return (
    <div>{movie.title}</div>
  )
}

export default MovieCard