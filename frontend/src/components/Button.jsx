import React from 'react'
import {Link } from "react-router-dom"


const Button = ({value}) => {
  return (
    <div>
        <Link to="/viewpage" >
           <button class="
    bg-gradient-to-r from-cyan-400 to-blue-500  /* cyan to blue gradient */
    text-white 
    font-bold 
    px-6 py-3 
    rounded-full 
    shadow-lg 
    hover:from-cyan-500 hover:to-blue-600 
    hover:shadow-xl 
    transition 
    duration-300 
    transform 
    hover:-translate-y-1
    focus:outline-none
    focus:ring-2
    focus:ring-cyan-300
    focus:ring-opacity-50
  ">
    {value}
  </button>
                       </Link>
    </div>
  )
}

export default Button
