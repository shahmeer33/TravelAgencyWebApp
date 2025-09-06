import React from 'react'
import CardForPC from "../components/CardForPC"
import ProductCategories from '../components/ProductCategories'
import {Link} from "react-router-dom"
import Button from '../components/Button'

const FujairahTours = () => {
  return (
  <div className='main  flex items-center py-10 px-10 justify-center'  >
               <div className='section-1 flex flex-col gap-5  ' >
                 <h2  className='text-3xl font-semibold'        >Product categories</h2>
                  <ProductCategories/>
               </div>
               <div className='section-2  flex flex-col gap-5 mb-90 ml-50'  >
                    <h2  className='text-3xl font-semibold '   >Fujairah Tours</h2>
                    <div className='row-1 flex gap-5'  >
                           <div className='item-1 flex flex-col gap-5'  >
                             <CardForPC title="FUJAIRAH-EAST COAST TOUR"  price="FROM: !.>985"  />                         
                             <Button value="Read More"  />
                    </div>
                  
                    </div>
                    

               </div>
      </div>
  )
}

export default FujairahTours
