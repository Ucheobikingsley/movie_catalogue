import React from 'react'
import MovieCard from './MovieCard'
type Props = {
    movies: {
        id?:string;
        title?: string;
        genre:string;
        created_at:string;
    }[]

    handleChange: (e:Event) => void
}
const TrendingMovie = (prop: Props) => {
  return (
    <div className='bg-gray-700 container max-w-7xl mx-auto pb-10 px-4'>
        <div className='mt-10 mx-auto w-60 h-12 flex '>
            <input type="text" className='rounded-md outline-none h-full pl-2 w-60' onChange={prop.handleChange}  placeholder='search movie...'/>
        </div>
        <h1 className='text-white text-2xl mt-8 mb-5'>Trending Movies</h1>
        <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
        {prop.movies.map(movie => <MovieCard movie={movie} key={movie.id}/> )}
        </div>
      
    </div>
  )
}

export default TrendingMovie