import React from 'react'
import CardForPC from "../components/CardForPC"
import Button from "../components/Button"
import ProductCategories from "../components/ProductCategories"

const BurjAlArabTours = () => {
  return (
     <div  className='section-1 flex items-center ml-70 gap-40  py-19  ' >
           <div className='flex flex-col gap-4'  >
            <h2 className='text-3xl font-semibold'   >Project Categories</h2>
                < ProductCategories/>
           </div>
         
            <div className='section-2 flex flex-col gap-8 mb-90 ' >

                   <h2 className='text-6xl font-semibold'  >Burj Al Arab Tours</h2>
                   <div className='row-1 flex gap-4'  >
                       <div className='item-2 flex flex-col gap-4'  >
                       <CardForPC  title="Dubai Burj Al Arab Meals" price="From:!.>400" />
                   <Button  value="Read More" />
                </div>
                 <div className='item-2 flex flex-col gap-4' >
                       <CardForPC  title="Guided inside Burj Al Arab Tour" price="From:!.>558" />
                   <Button  value="Read More" />
                </div>
                   </div>
                     
            </div>
        
    </div>
  )
}

export default BurjAlArabTours
