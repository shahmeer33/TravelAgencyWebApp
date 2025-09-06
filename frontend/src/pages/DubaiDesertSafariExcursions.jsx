import React from 'react'
import CardForPC from "../components/CardForPC"
import ProductCategories from '../components/ProductCategories'
import {Link} from "react-router-dom"
import Button from '../components/Button'

const DubaiDesertSafariExcursions = () => {
  return (
    <div className='main'  >
           <div className='section-1 flex gap-50 items-center justify-center  px-30 py-10' >
                
                <div  className='Product-categories flex flex-col gap-5' >
                    <h2 className='text-3xl font-semibold  '  >Product Catgeories</h2>
                   <ProductCategories/>
                 </div>  
                 <div className='DubaiDesertSafariExcursions flex  flex-col gap-5 w-200 mb-80' >
                         <h2 className='text-6xl font-semibold' >Dubai Desert safari Excursions</h2>
                           <p>Dubai Desert Safari</p> 
                             <p>We have the best Desert Safari in Dubai</p>
                             <p>This is one experience you can’t miss when in Dubai. Choose from the options we offer! Experience some new sensations while a having a drive full of thrill. We will make sure your trip to be full of adventures.</p>
                             <p>Our Desert Safari drivers are all professionals and have a passion for giving you a thrilling ride.</p>
                             <p>So, all you need to do is select the option you are interested in book your Desert Safari Excursion online or  
                                  <Link className='text-cyan-800' to="/contactus" > contact us </Link>
                                   and we will take care of the rest.</p>
                             <p>If not now, when?</p>
                 </div>
           </div>
           <div className='section-2-cards flex flex-col gap-5 justify-center items-center py-10'  >

             <div className='row-1 flex gap-5 ' >
                 <div className='item-1 flex flex-col gap-4' >
                    <CardForPC   title="CARAVANSERAI DINNER" price="FROM: !.> 187" />
                    <Button value="Read More" />
                 </div>
                  <div className='item-1 flex flex-col gap-4'  >
                    <CardForPC  title="Caravanserai Dinner & Desert Safari by sharing 4WD" price="FROM: !.> 187"     />
                          <Button value="Read More" />

                 </div>
                  <div className='item-1 flex flex-col gap-4'   >
                    <CardForPC  title="Dubai Desert Safari" price="FROM: !.>120"  />
                      <Button value="Read More" />

                 </div>
             </div > 
             <div className='row-2  flex gap-5' >
               <div className='item-1 flex flex-col gap-4' >
                    <CardForPC title="Dubai Desert Dubai Safari in Hummer H2" price="FROM: !.>240"    />
                     <Button value="Read More" />

                 </div>
                  <div className='item-2 flex flex-col gap-4' >
                    <CardForPC  title="Dubai Desert Safari with quad Biking " price="FROM: !.>280"      />
                   <Button value="Read More" />

                 </div>
                  <div className='item-3 flex flex-col gap-4'  >
                    <CardForPC  title="Overnight Desert Safari" price="FROM: !.>430"  />
                    <Button value="Read More" />

                 </div>

             </div>
             <div className='row-3 flex gap-5' >
                <div className='item-2 flex flex-col gap-4' >
                    <CardForPC title="Royal Desert Safari & Dinner by Private 4WD" price="FROM: !.>2000"  />
                     <Button value="Read More" />

                 </div>
                  <div className='item-2 flex flex-col gap-4' >
                    <CardForPC title="Royal Desert Safari & Dinner by Private 4WD" price="FROM: !.>495"  />
                      <Button value="Read More" /> 
                 </div> 
             </div>
           </div>
    </div>
  )
}

export default DubaiDesertSafariExcursions
