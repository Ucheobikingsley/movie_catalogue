import Hero from '@/components/Hero'
import TrendingMovie from '@/components/TrendingMovie';
import { server } from '@/config';
import axios from 'axios';
import React, {useState, useCallback} from 'react';
import {debounce} from 'lodash-es'

export default function Home({movies}:any) {
  console.log(movies);
  const [isLoading, setState]  = useState(false);
  const [currentMoviesList, setMovieList] = useState<{id:number; title:string; genre:string}[] | null>(null);

  const parentHandleChange = async(e: Event) => {
    if(e.target && e.target.value){
      setState(true)
      const res = await axios(`${server}?search=${e.target.value}`)
      const movies = res.data as {results: Array<Record<string, unknown>>}
      
      setState(false)
    }
   
  };

  const debouncedChangeHandler = useCallback(
    debounce(parentHandleChange, 300)
  , []);



  return (
    <div className='bg-gray-700'>
      <Hero/>
      {isLoading ? 'loading...' : ''
      
      }
      <TrendingMovie  movies={currentMoviesList.length > 0 ? currentMoviesList :movies.results}  handleChange={debouncedChangeHandler} />
    </div>
   
  )
}


export async function getStaticProps(){
  const res = await axios(`${server}`)
  const movies = res.data as {results: Array<Record<string, unknown>>}
  console.log('movies',movies)
  return {
    props: {movies}
  }
}

