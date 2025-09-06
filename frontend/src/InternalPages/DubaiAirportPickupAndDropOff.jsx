import React,{useState} from 'react'
import Description from '../components/Description'
import Review from '../components/Review'
import ReviewForm from '../components/ReviewForm'

const DubaiAirportPickupAndDropOff = () => {

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
                        

               </div>
               <div className='special-note flex gap-4 flex-col'  >
                     <div>
                          <h3 className='font-semibold'   >Special Note</h3>
                     </div>
                     <div>
                           <p>Your selected time slot is the pickup from Airport.</p>
                     <p>         Kindly make 3 hrs. difference in between your arrival and Pickup.</p>
                     </div>
               </div>
                <div className='inclusions flex gap-4 flex-col' >
                    <div  >
                          <h3 className='font-semibold'   >Inclusions</h3>
                     </div>
                     <div>
                           <p>Pick up from the Airport/Pick up from the Hotel</p>
                     <p>Transfers in Air conditioned, well maintained and comfortable min bus or van..</p>
                      <p>Airport parking charges are included..</p>
                      <p>Limousine and Luxury transfers are available at extra charges..</p>
                      <p>    Drop off at your Hotel/Airport</p>

                     </div>
               </div>
              
                          
             </div>
               
        </div>
      )}
    </div>
  )
}

export default DubaiAirportPickupAndDropOff