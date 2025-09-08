import React,{useState} from 'react'
import Description from '../components/Description'
import Review from '../components/Review'
import ReviewForm from '../components/ReviewForm'

const Aquarium2 = () => {

  const [toggle, setToggle] = useState(false)

  return (
     <div className="p-6 section-3">
      {toggle ? (
        <div>
          {/* Review part toggle ke liye */}
          <div >
            <Review setToggle={setToggle} />
          </div>

          {/* ReviewForm independent hai, ispe click karne se kuch change nahi hoga */}
          <ReviewForm />
        </div>
      ) : (                           
        <div  >  
          <Description setToggle={setToggle}  />
          <div className='main flex ml-50 flex-col gap-5'  >

            <div>


            </div>
            <div className='highlights  flex flex-col gap-4'  >

                      <h3 className='font-semibold'  >Highlights</h3>

                   

                      <div className='points'  >
                            <ul className='flex flex-col gap-1 '  >
                                <li>It’s a part of the impressive ever Atlantis, The Palm Hotel, located on the crescent of the iconic palm-shaped Palm Jumeirah Island.</li>
                                <li>Your ticket covers access to the Lost Chambers Aquarium..</li>
                                
                                <li>As you step into the Lost Chambers Aquarium, discover the mythical city of the Lost City of Atlantis.</li>

                                <li>There are also 65,000 marine animals on display here.</li>

                            </ul>
                      </div>
            </div>

 <div className='tour inclusions  flex flex-col gap-4'  >

                      <h3 className='font-semibold'  >Tour Inclusions</h3>

                   

                      <div className='points'  >
                            <ul className='flex flex-col gap-1 '  >
                                <li>Transfers (If option selected)</li>
                                <li>Transfers (If option selected)</li>
                                
                                <li>Lost Chamber Aquarium</li>
                                <li>See over 65000 distinct marine animals.</li>
                                <li>Chances to see marine experts dive and feed sharks.
</li>
                                
                            </ul>
                      </div>
            </div>

   <div className='exculsions  flex flex-col gap-4'  >

                      <h3 className='font-semibold'  >Exclusion</h3>

                   

                      <div className='points'  >
                            <ul className='flex flex-col gap-1 '  >
                                <li>Pick up and drop off.</li>
                                <li>All personal expenses spend for dining, shopping etc. on-site.</li>
                              
                            </ul>
                      </div>
            </div>
               <div className='important-info flex flex-col gap-4' >
                                   <h3 className='font-semibold'    >Important Information</h3>

               </div>
               <div className='flex gap-1 flex-col' >
                    <p>Visitors are not allowed to bring food, beverages & Alcohol to the Aquarium.</p>
                    
                      <p>The Pickup will be arranged from Dubai Hotel / Residence only. </p>
                       <p>Pick-up from Areas other than centrally located Dubai Hotels / Residence will be done on request with an additional surcharge..</p>
                        <p>Sharing transfers are available only from Deira, Bur Dubai.</p>
                         <p>Sharing transfers are available only from Deira, Bur Dubai..</p>
                          <p>The pick-up/drop-off timing on Sharing transfers may be modified as per the trip schedule by 30 to 60 minutes, depending on traffic conditions and your location.</p>
                         
                
               </div>
                  
             </div>
               
        </div>
      )}
    </div>
  )
}

export default Aquarium2