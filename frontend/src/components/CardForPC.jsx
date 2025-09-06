import React from 'react'

const CardForPC = ({title,price}) => {
  return (
     <div>
        <div class="bg-white rounded-xl shadow-lg overflow-hidden w-64 hover:shadow-2xl transition duration-300">
      <img src="https://via.placeholder.com/256x150" alt="Image 1" class="w-full h-40 object-cover"/>
      <div class="p-4 text-center">
        {/* <h3 class="text-lg font-bold mb-2">Card Title 1</h3> */}
        <p class="text-gray-600 text-sm">{title}.</p>
        <p>{price}</p>
      </div>
    </div>
    </div>
  )
}

export default CardForPC
