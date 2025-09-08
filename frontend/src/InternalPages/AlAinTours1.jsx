import React,{useState} from 'react'
import Description from '../components/Description'
import Review from '../components/Review'
import ReviewForm from '../components/ReviewForm'

const AlAinTours1 = () => {

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
            <div className='description  flex flex-col gap-4'  >

                      <h3 className='font-semibold'  >Description</h3>

                      <p>A luxurious tour of the Garden city- Al Ain. It includes a fort, archeological park, museum, natural hot water springs, and mall.</p>

                      <p>Why Should I go for this?</p>

                      <div className='points'  >
                            <ul className='flex flex-col gap-1 '  >
                                <li>This is a perfect tour to escape from Dubai’s uber glitzy urban scene.</li>
                                <li>This fully guided tour with all transfers retreats you to Al Ain, which is a true oasis with verdant gardens, serene parks etc.</li>
                                
                                <li>Opportunity to see the UAE’s second largest mountain, Jebel Hafeet, with the most remarkable views over the city.</li>
                                <li>Visit some of the region’s top attractions, mainly the museum-turned Al Jahili Fort, Al Ain National Museum, Archeological Park, Al Ain Zoo and Al Ain Mall.</li>
                                <li>There will be a stop at the traditional Camel Market, which is probably the region’s last of its kind.</li>
                                <li>You’ll further get to experience the natural hot springs, lying at the base of Jebel Hafeet Mountain.</li>
                                
                            </ul>
                      </div>
            </div>

               <div className='important-info flex flex-col gap-4' >
                                   <h3 className='font-semibold'    >Important Information</h3>

               </div>
               <div className='flex gap-1 flex-col' >
                    <p> Transfers are only provided from centrally located hotels and residences in Dubai city. (Deira, Bur Dubai, Sheikh Zayed, Marina).</p>
                    
                      <p>   Please carry a valid photo ID/Passport along with you </p>
                       <p> Kindly provide us with detailed pick-up information for an easy pick up from your location.</p>
                        <p>    On specific days and weekends some of the locations might remain closed for visits. In such cases we do not hold any responsibility and no compensation will be adjusted</p>
                         <p> <span className='font-bold' >Special Note:</span> Al Ain National Heritage,  Al Ain Fort and Archaeological Park will be closed on  <span className='font-bold' >Monday’s and Friday’s</span>  </p>
                          <b>·Note: Operational timing during Ramadan for Al Ain Zoo will be 7:00 pm to 12:00 a.</b>
            

               </div>
                  
             </div>
               
        </div>
      )}
    </div>
  )
}

export default AlAinTours1