import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div className='   ' >
            
            <div className='flex  justify-between  px-20 bg-gray-900 text-white py-15 sticky top-0  ' >

            <div className='logo' >
                 <img alt="helo" />
            </div>

            <div className='menu-bar flex gap-3 text-medium '   >
                   
            <Link  className=' hover:bg-cyan-400 hover:text-gray-900 px-5 py-2 '   to="/"  >Home</Link>
            <Link   className=' hover:bg-cyan-400 hover:text-gray-900 px-5 py-2 '    to="/dubaiActivities"    >Dubai Activities</Link>

            <Link  className=' hover:bg-cyan-400 hover:text-gray-900 px-5 py-2'     to="/VisaServices"    > Visa services</Link>

            <Link className=' hover:bg-cyan-400 hover:text-gray-900 px-5 py-2'    to="/hotels"    > Hotels   </Link>

            <Link className=' hover:bg-cyan-400 hover:text-gray-900 px-5 py-2' to="/flights"   > Flights</Link>
             <Link className=' hover:bg-cyan-400 hover:text-gray-900 px-5 py-2'  to="/blogs"     > Blogs</Link>

            <Link className=' hover:bg-cyan-400 hover:text-gray-900 px-5 py-2' to="/contactus"   >  Contact us</Link>

            </div>

            <div  className='searcbox/cart text-medium hover:text-cyan-400 relative'  >

            <div  className='flex justify-between gap-7'>
  <input 
  type="text" 
  placeholder="Search..." 
  class="w-64 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
/>

<div className='absolute left-67 top-2'  >
        <svg  xmlns="http://www.w3.org/2000/svg" 
       class="h-7 w-7 text-gray-500" 
       fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
          d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
  </svg>


  <svg xmlns="http://www.w3.org/2000/svg"  
       class="h-6 w-6"  
       fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"  
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8h13.2L17 13M7 13h10M10 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
  </svg>
          
</div>

 

            </div>
 
  
            </div>

            </div>

    </div>
  )
}

export default Header
