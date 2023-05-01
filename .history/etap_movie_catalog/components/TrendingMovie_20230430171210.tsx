import React from 'react'
import MovieCard from './MovieCard'
type Props = {
    movies: Record<string, unknown>[]
}
const TrendingMovie = (prop: Props) => {
  return (
    <div className='bg-gray-700 container max-w-7xl mx-auto pb-10 px-4'>
        <h1 className='text-white text-2xl mt-8 mb-5'>Trending Movies</h1>
        {movies.map(movie => <MovieCard movie={movie} key={movie.id}/> )}
    </div>
  )
}

export default TrendingMovie