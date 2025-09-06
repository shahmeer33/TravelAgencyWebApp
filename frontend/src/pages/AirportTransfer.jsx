import React from 'react'
import CardForPC from "../components/CardForPC"
import Button from "../components/Button"
import ProductCategories from "../components/ProductCategories"

const AirportTransfer = () => {
  return (
    <div  className='section-1 flex items-center ml-70 gap-40 py-15   ' >
           <div className='flex flex-col gap-4 '  >
            <h2 className='text-3xl font-semibold '   >Product Categories</h2>
                < ProductCategories/>  
           </div>
         
            <div className='section-2 flex flex-col gap-8 ' >
                   <h2 className='text-6xl font-semibold'  >Airport Transfer</h2>

                   <div className='row-1 flex gap-4'  >
                    <div className='item-1 flex flex-col gap-5' >
                           <CardForPC  title="Abu Air Port Drop Off" price="From:!.>150" />
          <Button  value="Read More" />
                    </div>
                    <div className='item-1 flex flex-col gap-5'  >
                                 <CardForPC  title="Dubai Airport Pickup & Drop " price="From:!.>260" />
          <Button  value="Read More" />
                    </div>
                    <div className='item-1 flex flex-col gap-5'    >
                                <CardForPC  title="Dubai Airport pickup and Drop" price="From:!.>260" />
          <Button  value="Read More" />
                    </div>
                   </div>
                   <div className='row-2 flex gap-4' >
                             <div className='item-1 flex flex-col gap-5'   >
                                    <CardForPC  title="Dubai Airport to Abu Dhabi Pick up/Drop off" price="From:!.>485" />
          <Button  value="Read More" />
                             </div>
                             <div className='item-1 flex flex-col gap-5' >
                         <CardForPC  title="Dubai Airport to Ras Al Khaimah pick Up /Drop OFF" price="From:!.>435" />
                     <Button  value="Read More" />
                             </div>
                   </div>
                  
      

                 
        
            </div>
        
    </div>
  )
}

export default AirportTransfer
