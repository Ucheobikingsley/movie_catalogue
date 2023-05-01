import Image from "next/image"

const hero = () => {
  return (
    <div className="text-center bg-white pb-10">
        <div className="w-60 mx-auto">
          <Image src={"/home.png"} width={200} height={200} layout="responsive" alt="hero_image"/>
        </div>
        <h1>Welcome to movie zone</h1>
        <p>Produce FILM feature</p>
    </div>
  )
}

export default hero