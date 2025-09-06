import React from 'react'
import CardForPC from "../components/CardForPC"
import ProductCategories from '../components/ProductCategories'
import {Link} from "react-router-dom"
import Button from '../components/Button'

const DubaiDolphinarium = () => {
  return (
    <div className='main  flex items-center py-10 px-10 justify-center'  >
               <div className='section-1 flex flex-col gap-5   ' >
                 <h2  className='text-3xl font-semibold'        >Product categories</h2>
                  <ProductCategories/>
               </div>
               <div className='section-2  flex flex-col gap-5  ml-50'  >
                    <h2  className='text-3xl font-semibold  '   >Dubai Dolphinarium</h2>
                    <div className='row-1 flex gap-5'  >
                           <div className='item-1 flex flex-col gap-5'  >
                             <CardForPC title="Dubai Dolphinarium – Dolphin and Seal Show" price="FROM: !.>105"  />
                             <Button value="Read More"  />
                    </div>
                  <div className='item-2 flex flex-col gap-5'   >
                            <CardForPC  title="Dubai Dolphinarium – Deep Water (Swimming)" price="FROM: !.>630"     />
                             <Button value="Read More"  />
                    </div>
                    <div className='item-3 flex flex-col gap-5'   >
                             <CardForPC title="Dubai Dolphinarium – Exotic Bird Show" price="FROM: !.>55"   />
                             <Button value="Read More"  />
                    </div>
                    </div>
                    
 <div className='row-2 flex gap-5'  >
                           <div className='item-1 flex flex-col gap-5'  >
                             <CardForPC title="Dubai Dolphinarium – Meet & Greet (Touch)" price="FROM: !.>265"    />
                             <Button value="Read More"  />
                    </div>
                  <div className='item-2 flex flex-col gap-5'   >
                            <CardForPC title="Dubai Dolphinarium – Shallow Water (Knee Deep)" price="FROM: !.>475"  />
                             <Button value="Read More"  />
                    </div>
                  
                    </div>
               </div>
      </div>
  )
}

export default DubaiDolphinarium
