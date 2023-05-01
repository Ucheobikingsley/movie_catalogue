import Hero from '@/components/Hero'
import TrendingMovie from '@/components/TrendingMovie';
import { server } from '@/config';
import axios from 'axios';

export default function Home({movies}: Record<string, Array<Record<string, unknown>>>) {
  console.log(movies);
  return (
    <div>
      <Hero/>
      <TrendingMovie movies={movies.results}/>
    </div>
   
  )
}


export async function getStaticProps(){
  const res = await axios(`${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
  const movies = res.data
  return {
    props: {movies}
  }
}

