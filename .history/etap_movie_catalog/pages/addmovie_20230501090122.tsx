import React from 'react'

const addmovie = () => {
  return (
    <div className="mt-10 mx-auto w-60 h-12 flex">
      <input type="text"  className='rounded-md outline-none h-full pl-2 w-60'/>
      <input type="text" className='rounded-md outline-none h-full pl-2 w-60'/>
   
       <button>Add Movie</button>
    </div>
  )
}

export default addmovie