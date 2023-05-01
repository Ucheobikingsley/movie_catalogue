import Hero from '@/components/Hero'
import { server } from '@/config';
import axios from 'axios';

export default function Home({movies}: Record<string, Array<Record<string, unknown>>>) {
  console.log(movies);
  return (
   <Hero/>
  )
}


export async function getStaticProps(){
  const res = await axios(`${server}/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
  const movies = res;
  return {
    props: {movies}
  }
}

