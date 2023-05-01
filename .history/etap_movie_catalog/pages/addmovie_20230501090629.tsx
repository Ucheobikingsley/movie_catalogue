import React from 'react'

const addmovie = () => {
  return (
    <div className="mt-10 mx-auto w-1/2 h-12 flex flex-col">
      <input type="text"  className='rounded-md outline-none h-full pl-2 w-60 bg-slate-500'/>
      <input type="text" className='rounded-md outline-none h-full pl-2 w-60 bg-slate-500 mt-5' />
   
       <button>Add Movie</button>
    </div>
  )
}

export default addmovie