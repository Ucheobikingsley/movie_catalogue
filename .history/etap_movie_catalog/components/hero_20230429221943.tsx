import Image from "next/image"

const hero = () => {
  return (
    <div className="text-center bg-white pb-10">
        <div className="w-60 mx-auto">
          <Image src={"/home.png"} width={200} height={200}/>
        </div>
    </div>
  )
}

export default hero