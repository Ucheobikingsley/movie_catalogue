import Hero from '@/components/Hero'
import TrendingMovie from '@/components/TrendingMovie';
import { server } from '@/config';
import axios from 'axios';

export default function Home({movies}:any) {
  console.log(movies);

  const parentHandleChange = (e:any) => {
    console.log(e.target.value);
    return;
  };
  return (
    <div className='bg-gray-700'>
      <Hero/>
      <TrendingMovie movies={movies.results} handleChange={parentHandleChange} />
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

