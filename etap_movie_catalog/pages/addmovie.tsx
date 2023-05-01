import React, {useState} from 'react'
import axios from 'axios';
const AddMovie = () => {
  const [title, setTitle] = useState("")
    const [genre, setGenre] = useState("")

    const inputChangeHandler = (setFunction: React.Dispatch<React.SetStateAction<string>>, event: React.ChangeEvent<HTMLInputElement>) => {
      setFunction(event.target.value)
  }

const createMovie = async(e:Event)=>{
  e.preventDefault();
  if(title && genre){
    await axios.post("http://127.0.0.1:5000/api/etap/movies", {
      title: title,
      genre: genre
    })
    window.alert('created')
  }
}
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" onSubmit={createMovie}>
      <div>
        <label  className="block text-sm font-medium leading-6 text-gray-900">Title</label>
        <div className="mt-2">
          <input id="title" name="title" type="text" required onChange={(e)=>inputChangeHandler(setTitle, e)}  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label   className="block text-sm font-medium leading-6 text-gray-900" >Genre</label>
          
        </div>
        <div className="mt-2">
          <input id="genre" name="genre" type="text" onChange={(e)=>inputChangeHandler(setGenre, e)}  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-gray-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add Movie</button>
      </div>
    </form>

   
  </div>
  )
}

export default AddMovie