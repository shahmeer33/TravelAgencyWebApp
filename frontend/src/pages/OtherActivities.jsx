import React from 'react'
import CardForPC from "../components/CardForPC"
import ProductCategories from '../components/ProductCategories'
import {Link} from "react-router-dom"
import Button from '../components/Button'

const OtherActivities = () => {
  return (
   <div className='main  flex items-center py-10 px-10 justify-center'  >
               <div className='section-1 flex flex-col gap-5  ' >
                 <h2  className='text-3xl font-semibold'        >Product categories</h2>
                  <ProductCategories/>
               </div>
               <div className='section-2  flex flex-col gap-5 mb-10 ml-50'  >
                    <h2  className='text-3xl font-semibold '   >Limousine Tours</h2>
                    <div className='row-1 flex gap-5'  >
                           <div className='item-1 flex flex-col gap-5'  >
                             <CardForPC title="Camel Ride"  price="FROM: !.>105"  />                         
                             <Button value="Read More"  />
                    </div>
                   <div className='item-2 flex flex-col gap-5'  >
                             <CardForPC title="Dolphin Show"  price="FROM: !.>400"  />                         
                             <Button value="Read More"  />
                    </div>
                     <div className='item-3 flex flex-col gap-5'  >
                             <CardForPC title="Dubai Horse Riding"  price="FROM: !.>425"  />                         
                             <Button value="Read More"  />
                    </div>
                    
                    </div>

                    <div className='row-2 flex gap-5'  >
                           <div className='item-1 flex flex-col gap-5'  >
                             <CardForPC title="Highspeed Boat (Sightseeing Tour by Boat)"  price="FROM: !.>160"  />                         
                             <Button value="Read More"  />
                    </div>
                   <div className='item-2 flex flex-col gap-5'  >
                             <CardForPC title="Ski Dubai"  price="FROM: !.>210"  />                         
                             <Button value="Read More"  />
                    </div>
                   
                    </div>
                    

               </div>
      </div>
  )
}

export default OtherActivities
