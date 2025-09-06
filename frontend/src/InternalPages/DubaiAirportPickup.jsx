import React,{useState} from 'react'
import Description from '../components/Description'
import Review from '../components/Review'
import ReviewForm from '../components/ReviewForm'

const DubaiAirportPickup = () => {

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
               <div className='important-info flex flex-col gap-4' >
                                   <h3 className='font-semibold'    >Important Information</h3>

               </div>
               <div className='flex gap-1 flex-col' >
                    <p>  This is a one-way transfer service.</p>
                     <p>       Oversized and excess baggage is subject to the availability of storage space.</p>
                      <p> You are required to provide us with a detailed information on your Flight timings </p>
                       <p>         If guests fail to report within the given time it will be a NO Show and there will be no Rescheduling or Refund for it.</p>
                        <p>    Limousine and Luxury transfers are available at extra charges</p>
                         <p>     Sharing transfer is not available from Al Maktoum International Airport and SZR Etihad Terminal</p>
                          <p>Sharing transfers is available from Deira, Bur Dubai, Sheikh Zayed up to Marina.</p>
                            <p>      The pickup / drop off timing on Sharing transfers can be modified as per the trip schedule by 30 to 60 minutes, depending on traffic conditions and your location</p>

               </div>
               <div className='special-note flex gap-4 flex-col'  >
                     <div>
                          <h3 className='font-semibold'   >Special Note</h3>
                     </div>
                     <div>
                           <p>Your selected time slot is the pickup from your location (Hotel / Residence).</p>
                     <p>Kindly make at least 3hrs difference in between your flight departure and Pickup from location.</p>
                     </div>
               </div>
               <div className='inclusions flex gap-4 flex-col' >
                    <div  >
                          <h3 className='font-semibold'   >Inclusions</h3>
                     </div>
                     <div>
                           <p>Pickup from teh Airport.</p>
                     <p>Kindly make at least 3hrs difference in between your flight departure and Pickup from location.</p>
                      <p>Airport parking charges are included..</p>
                      <p>Limousine and Luxury transfers are available at extra charges..</p>
                      <p>Drop off at your Hotel.</p>

                     </div>
               </div>
              
                          
             </div>
               
        </div>
      )}
    </div>
  )
}

export default DubaiAirportPickup