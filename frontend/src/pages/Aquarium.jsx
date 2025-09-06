import React from 'react'
import CardForPC from "../components/CardForPC"
import Button from "../components/Button"
import ProductCategories from "../components/ProductCategories"

const Aquarium = () => {
  return (
    <div  className='main flex items-center ml-70 gap-40  mt-40  ' >
           <div className='flex flex-col gap-4 mb-100'  >
            <h2 className='text-3xl font-semibold '   >Product Categories</h2>
                < ProductCategories/>
           </div>
         
            <div className='flex flex-col gap-8 mb-100 py-10' >
                   <h2 className='text-6xl font-semibold'  >Aquarium
</h2>

      <div className='row-1 flex gap-4'   >
        <div className='item-1 flex flex-col gap-5'  >
                   <CardForPC  title="Atlantis Aquaventure WaterPark + Lost Chmaber Aquarium Super Pass" price="From:!.>350" />
          <Button  value="Read More" />
        </div>
        <div  className='item-2 flex flex-col gap-5'   >
                     <CardForPC  title="Atlantis Lost-Chamber Aquarium Dubai" price="From:!.>135" />
          <Button  value="Read More" />
        </div>
           <div className='item-3 flex flex-col gap-5'   >
                     <CardForPC  title="Dubai Aquarium and pengiun Cove" price="From:!.>180" />
          <Button  value="Read More" />
        </div>
      </div>
      <div className='row-1 flex gap-4'  >
        <div className='item-3 flex flex-col gap-5' >
               <CardForPC  title="Dubai Aquarium and underwater Zoo-Basic" price="From:!.>150" />
          <Button  value="Read More" />
        </div>
        <div className='item-3 flex flex-col gap-5'  >
                 <CardForPC  title="Snorkeling Cage" price="From:!.>410" />
          <Button  value="Read More" />
        </div>
           
      </div>
 
       
            </div>
        
    </div>
  )
}

export default Aquarium
