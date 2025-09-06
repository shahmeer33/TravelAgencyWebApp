import React from 'react'

const Description = ({setToggle}) => {
  return (
     <div className='DescriptionHighlight' >
           <div className='flex py-10 gap-1 ml-50' >
                 <span className='text-cyan-700 border-t-3 border-cyan-700 py-4 px-3 '  >Description</span><div
 className='bg-gray-100 w-200 py-4 px-3 ' onClick={() => setToggle(true)} >Reviews (0)</div>
           </div>
           <div>
           </div>
     </div>
  )
}

export default Description