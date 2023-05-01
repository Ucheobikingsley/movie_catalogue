import React from 'react'

const TrendingMovie = ({movies}: Record<string, Record<string, Array<string, unknown>>>) => {
  return (
    <div className='bg-gray-700 container max-w-7xl mx-auto pb-10 px-4'>
        <h1 className='text-white text-2xl mt-8 mb-5'>Trending Movies</h1>
        {movies.map(movie => )}
    </div>
  )
}

export default TrendingMovie