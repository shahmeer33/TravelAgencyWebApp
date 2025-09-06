import React from 'react'

const Review = ({setToggle}) => {
  return (
    <div className='ReviewHighlight' >
           <div className='flex py-10 gap-1 ml-50' >
                 <span className='bg-gray-100 py-4 px-3'  onClick={() => setToggle(false)}   >Description</span><div  className='text-cyan-700 border-t-3 border-cyan-700 py-4 px-3 ' >Reviews (0)</div>
                 <div className='bg-gray-100 w-170'  > </div>
           </div>
     </div>
  )
}

export default Review