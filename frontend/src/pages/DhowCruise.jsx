import React from 'react'
import CardForPC from "../components/CardForPC"
import ProductCategories from '../components/ProductCategories'
import {Link} from "react-router-dom"
import Button from '../components/Button'

const DhowCruise = () => {
  return (
     <div className='main  flex items-center py-10 px-10 justify-center'  >
               <div className='section-1 flex flex-col gap-5 mb-165  ' >
                 <h2  className='text-3xl font-semibold'        >Product categories</h2>
                  <ProductCategories/>
               </div>
               <div className='section-2  flex flex-col gap-5  ml-50'  >
                    <h2  className='text-3xl font-semibold  '   >Dhow Cruise</h2>
                    <div className='row-1 flex gap-5'  >
                           <div className='item-1 flex flex-col gap-5'  >
                             <CardForPC title="Dubai Creek 4 Star Dhow Cruise Dinner" price="FROM: !.>200"  />
                             <Button value="Read More"  />
                    </div>
                  <div className='item-2 flex flex-col gap-5'   >
                            <CardForPC  title="Dubai Creek 4 Star Dhow Cruise Dinner with Transfer" price="FROM: !.>250"     />
                             <Button value="Read More"  />
                    </div>
                    <div className='item-3 flex flex-col gap-5'   >
                             <CardForPC title="Dubai Creek 5 Star Dhow Cruise Dinner" price="FROM: !.>250"   />
                             <Button value="Read More"  />
                    </div>
                    </div>
                    
 <div className='row-2 flex gap-5'  >
                           <div className='item-1 flex flex-col gap-5'  >
                             <CardForPC title="Dubai Creek 5 Star Dhow Cruise Dinner with Transfer" price="FROM: !.>300"    />
                             <Button value="Read More"  />
                    </div>
                  <div className='item-2 flex flex-col gap-5'   >
                            <CardForPC title="Dubai Creek Dhow Cruise Guided Tour" price="FROM: !.>50"  />
                             <Button value="Read More"  />
                    </div>
                    <div className='item-3 flex flex-col gap-5'   >
                             <CardForPC title="Dubai Creek Dhow Cruise Guided Tour with Transfer
" price="FROM: !.>150"   />
                             <Button value="Read More"  />
                    </div>
                    </div>

                     <div className='row-3 flex gap-5'  >
                           <div className='item-1 flex flex-col gap-5'  >
                             <CardForPC  title="Dubai Marina 5 Star Dhow Cruise Dinner" price="FROM: !.>370"  />
                             <Button value="Read More"  />
                    </div>
                   <div className='item-2 flex flex-col gap-5'  >
                             <CardForPC  title="Dubai Marina 5 Star Dhow Cruise Dinner with transfer" price="FROM: !.>350"  />
                             <Button value="Read More"  />
                    </div>
                        <div className='item-1 flex flex-col gap-5'  >
                             <CardForPC  title="Dubai Marina Sightseeing Cruise" price="FROM: !.>65"  />
                             <Button value="Read More"  />
                    </div>
                   
                    </div>
                    
                     <div className='row-4 flex gap-5'  >
                           <div className='item-1 flex flex-col gap-5'  >
                             <CardForPC  title="Dubai Marina Sightseeing Cruise with Transfer" price="FROM: !.>150"   />
                             <Button value="Read More"  />
                    </div>
                     <div className='item-2 flex flex-col gap-5'  >
                             <CardForPC title="Gulet Experience" price="FROM: !.>260"   />
                             <Button value="Read More"  />
                    </div>
                    <div className='item-3 flex flex-col gap-5'  >
                             <CardForPC  title="HighSpeed Boat(Sightseeing Tour by Boat)" price="FROM: !.>160"   />
                             <Button value="Read More" />
                    </div>

                    </div>
                    
               </div>
      </div>
  )
}

export default DhowCruise
