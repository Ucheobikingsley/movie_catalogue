import Image from "next/image"
import Link from "next/link"

const hero = () => {
  return (
    <div className="text-center bg-white pb-10">
        <div className="w-60 mx-auto">
          <Image src={"/home.png"} width={200} height={200} layout="responsive" alt="hero_image"/>
        </div>
        <h1 className="text-2xl text-gray-700 uppercase">Welcome to movie zone</h1>
        <p>Produce FILM feature</p>
        <Link href="/addmovie">
        <button className="bg-gray-700 text-white py-3 px-6 rounded text-sm mt-4">Add Movie</button>
        </Link>
       
    </div>
  )
}

export default hero