import React from 'react'
import CardForPC from "../components/CardForPC"
import ProductCategories from '../components/ProductCategories'
import {Link} from "react-router-dom"
import Button from '../components/Button'

const WaterParks = () => {
  return (
     <div className='main  flex items-center py-10 px-10 justify-center'  >
               <div className='section-1 flex flex-col gap-5 mb-95  ' >
                 <h2  className='text-3xl font-semibold'        >Product categories</h2>
                  <ProductCategories/>
               </div>
               <div className='section-2  flex flex-col gap-5 mb-10 ml-50'  >
                    <h2  className='text-3xl font-semibold '   >Water Parks</h2>
                    <div className='row-1 flex gap-5'  >
                           <div className='item-1 flex flex-col gap-5'  >
                             <CardForPC title="Atlantis Aquaventure Waterpark + Lost-Chamber Aquarium Super Pass"  price="FROM: !.>350"  />                         
                             <Button value="Read More"  />
                    </div>
                   <div className='item-2 flex flex-col gap-5'  >
                             <CardForPC title="Atlantis Aquaventure Waterpark Dubai Day Pass"  price="FROM: !.>315"  />                         
                             <Button value="Read More"  />
                    </div>
                     <div className='item-3 flex flex-col gap-5'  >
                             <CardForPC title="Ferrari World Tour with 2 Day 2 Park Admission Tickets"  price="FROM: !.>475"  />                         
                             <Button value="Read More"  />
                    </div>
                    
                    </div>

                    <div className='row-2 flex gap-5'  >
                           <div className='item-1 flex flex-col gap-5'  >
                             <CardForPC title="Ferrari World Tour with 2 Park Admission Tickets"  price="FROM: !.>160"  />                         
                             <Button value="Read More"  />
                    </div>
                   <div className='item-2 flex flex-col gap-5'  >
                             <CardForPC title="Ferrari World Tour with 3 Day 3 Park Admission Tickets"  price="FROM: !.>575"  />                         
                             <Button value="Read More"  />
                    </div>
                     <div className='item-3 flex flex-col gap-5'  >
                             <CardForPC title="Legoland Water Park Dubai"  price="FROM: !.>330"  />                         
                             <Button value="Read More"  />
                    </div>
                    </div>
                    
                    
                    <div className='row-3 flex gap-5'  >
                           <div className='item-1 flex flex-col gap-5'  >
                             <CardForPC title="Yas Island Tour with 4 Park Admission Tickets"  price="FROM: !.>490"  />                         
                             <Button value="Read More"  />
                    </div>
                   <div className='item-2 flex flex-col gap-5'  >
                             <CardForPC title="Yas Water World from Dubai"  price="FROM: !.>295"  />                         
                             <Button value="Read More"  />
                    </div>
                    
                    </div>

               </div>
      </div>
  )
}

export default WaterParks