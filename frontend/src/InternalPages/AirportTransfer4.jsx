import React,{useState} from 'react'
import Description from '../components/Description'
import Review from '../components/Review'
import ReviewForm from '../components/ReviewForm'

const AirportTransfer4 = () => {

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
                    <p>      Airport transfers come with 2 different options Pick up / Drop off.</p>
                     <p>            Your service will be executed according to your Booking selection. You can select both the options if you wish to avail a 2-way transfer (Pick up & Drop off).</p>
                      <p>   You are required to provide us with a detailed information on your Flight timings for an easy pick or drop off. </p>
                       <p>          There will be no Refund for unused or partly used services..</p>
                        <p>      Oversized and excess baggage is subject to the availability of storage space.</p>
                         <p>  ·         If guests fail to report within the given time it will be a NO Show and there will be no Rescheduling or Refund for it.</p>
                          <p>·         Limousine and Luxury transfers are available at extra charges.</p>
            

               </div>
                  
             </div>
               
        </div>
      )}
    </div>
  )
}

export default AirportTransfer4