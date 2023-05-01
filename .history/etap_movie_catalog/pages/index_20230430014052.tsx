import Hero from '@/components/Hero'

export default function Home() {
  return (
   <Hero/>
  )
}

export async function getStaticProps(){
  const movies = [{name: 'hello'}]
  return {
    props: {movies}
  }
}
