import React from 'react'
import CardForPC from "../components/CardForPC"
import ProductCategories from '../components/ProductCategories'
import {Link} from "react-router-dom"
import Button from '../components/Button'

const CityTours = () => {
  return (
      <div className='main  flex items-center py-10 px-10 justify-center'  >
               <div className='section-1 flex flex-col gap-5 mb-70  ' >
                 <h2  className='text-3xl font-semibold'        >Product categories</h2>
                  <ProductCategories/>
               </div>
               <div className='section-2  flex flex-col gap-5  ml-50'  >
                    <h2  className='text-3xl font-semibold  '   >City Tours</h2>
                    <div className='row-1 flex gap-5'  >
                           <div className='item-1 flex flex-col gap-5'  >
                             <CardForPC title="6 Emirates in a Day Tour" price="FROM: !.>990"  />
                             <Button value="Read More"  />
                    </div>
                  <div className='item-2 flex flex-col gap-5'   >
                            <CardForPC  title="Al Ain City Tour" price="FROM: !.>860"     />
                             <Button value="Read More"  />
                    </div>
                    <div className='item-3 flex flex-col gap-5'   >
                             <CardForPC title="Big Bus Tour" price="FROM: !.>200"   />
                             <Button value="Read More"  />
                    </div>
                    </div>
                    
 <div className='row-2 flex gap-5'  >
                           <div className='item-1 flex flex-col gap-5'  >
                             <CardForPC title="Dubai Big Bus Tour" price="FROM: !.>195"    />
                             <Button value="Read More"  />
                    </div>
                  <div className='item-2 flex flex-col gap-5'   >
                            <CardForPC title="Dubai City Tour" price="FROM: !.>75"  />
                             <Button value="Read More"  />
                    </div>
                    <div className='item-3 flex flex-col gap-5'   >
                             <CardForPC title="Dubai Shopping Tour" price="FROM: !.>1005"   />
                             <Button value="Read More"  />
                    </div>
                    </div>

                     <div className='row-3 flex gap-5'  >
                           <div className='item-1 flex flex-col gap-5'  >
                             <CardForPC  title="Full Day Explore Dubai City Tour" price="FROM: !.>370"  />
                             <Button value="Read More"  />
                    </div>
               
                   
                    </div>
                    
                    
               </div>
      </div>
  )
}

export default CityTours
