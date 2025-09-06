import React from 'react'
import CardForPC from "../components/CardForPC"
import ProductCategories from '../components/ProductCategories'
import {Link} from "react-router-dom"
import Button from '../components/Button'

const BurjKhalifaTours = () => {
  return (
      <div className='main  flex items-center py-10 px-10 justify-center'  >
               <div className='section-1 flex flex-col gap-5 mb-70  ' >
                 <h2  className='text-3xl font-semibold'        >Product categories</h2>
                  <ProductCategories/>
               </div>
               <div className='section-2  flex flex-col gap-5  ml-50'  >
                    <h2  className='text-3xl font-semibold  '   >Burj Khalifa Tours</h2>
                    <div className='row-1 flex gap-5'  >
                           <div className='item-1 flex flex-col gap-5'  >
                             <CardForPC title="At The Top Burj,Khalifa;Th e Lounge" price="FROM: !.>800"  />
                             <Button value="Read More"  />
                    </div>
                  <div className='item-2 flex flex-col gap-5'   >
                            <CardForPC  title="Burj Khalifa-At The Top Sky Ticket Level 124,125 & 148" price="FROM: !.>404"     />
                             <Button value="Read More"  />
                    </div>
                    <div className='item-3 flex flex-col gap-5'   >
                             <CardForPC title="Burj Khalifa At The Top Fast Track" price="FROM: !.>300"   />
                             <Button value="Read More"  />
                    </div>
                    </div>
                    
 <div className='row-2 flex gap-5'  >
                           <div className='item-1 flex flex-col gap-5'  >
                             <CardForPC title="Dubai – At the Top, Burj Khalifa Level 125 + 124" price="FROM: !.>174"    />
                             <Button value="Read More"  />
                    </div>
                  <div className='item-2 flex flex-col gap-5'   >
                            <CardForPC title="Dubai At the Top Burj Khalifa + Sunrise
From: 160" price="FROM: !.>160"  />
                             <Button value="Read More"  />
                    </div>
                    <div className='item-3 flex flex-col gap-5'   >
                             <CardForPC title="Dubai Burj Khalifa At the Top + Dubai Aquarium" price="FROM: !.>260"   />
                             <Button value="Read More"  />
                    </div>
                    </div>

                     <div className='row-3 flex gap-5'  >
                           <div className='item-1 flex flex-col gap-5'  >
                             <CardForPC  title="Dubai Fountain Show – Burj Khalifa" price="FROM: !.>25"  />
                             <Button value="Read More"  />
                    </div>
                  <div className='item-2 flex flex-col gap-5'   >
                            <CardForPC title="The Dubai Fountain Boardwalk" price="FROM: !.>25"  />
                             <Button value="Read More"  />
                    </div>
                   
                    </div>
                    
                    
               </div>
      </div>
  )
}

export default BurjKhalifaTours
