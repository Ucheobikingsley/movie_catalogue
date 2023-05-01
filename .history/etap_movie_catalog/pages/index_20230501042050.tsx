import Hero from '@/components/Hero'
import TrendingMovie from '@/components/TrendingMovie';
import { server } from '@/config';
import axios from 'axios';
import React, {useState} from 'react';
import {debounce} from 'lodash-es';

export default function Home({movies}:any) {
  console.log(movies);
  const [isLoading, setState]  = useState(false);

  const parentHandleChange = async(e: Event) => {
    
    const runSearch = async()=>{
      if(e.target && e.target.value){
        setState(true)
        const res = await axios(`${server}`)
        const movies = res.data as {results: Array<Record<string, unknown>>}
        console.log('value', movies)
        setState(false)
    }

    debounce(runSearch(), 400 )
     
    }
   
  };
  return (
    <div className='bg-gray-700'>
      <Hero/>
      {isLoading ? 'loading...' : ''
      
      }
      <TrendingMovie  movies={movies.results}  handleChange={parentHandleChange} />
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

