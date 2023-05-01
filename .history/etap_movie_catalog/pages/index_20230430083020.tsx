import Hero from '@/components/Hero'
import axios from 'axios';

export default function Home({movies}: Record<string, Array<Record<string, unknown>>>) {
  console.log(movies);
  return (
   <Hero/>
  )
}


export async function getStaticProps(){
  const res = await axios(`${server}/movie/popular?api_key=7265626c4973ba7acf7c1194df5a1e2d&language=en-US&page=1`)
  const movies = [{name: 'hello'}]
  return {
    props: {movies}
  }
}

