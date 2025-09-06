import React from 'react'
import CardForPC from "../components/CardForPC"
import Button from "../components/Button"
import ProductCategories from "../components/ProductCategories"



const AbuDhabiTours = () => {
  return (
    <div  className='main flex items-center ml-70 gap-40  py-19 ' >
           <div className='flex flex-col gap-4'  >
            <h2 className='text-3xl font-semibold'   >Product Categories</h2>
                < ProductCategories/>
           </div>
         
            <div className='flex flex-col gap-8 mb-100' >
                   <h2 className='text-6xl font-semibold'  >Abu Dhabi Tour</h2>
          <CardForPC  title="Abu DHABI CITY TOUR" price="From:!.>375" />
          <Button  value="Read More" />
            </div>
        
    </div>
  )
}

export default AbuDhabiTours
