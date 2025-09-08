import React,{useState} from 'react'
import Description from '../components/Description'
import Review from '../components/Review'
import ReviewForm from '../components/ReviewForm'

const Aquarium1 = () => {

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
                                <li>It’s one of the region’s largest water parks.</li>
                                <li>It’s a part of the impressive ever Atlantis, The Palm Hotel, located on the crescent of the iconic palm-shaped Palm Jumeirah Island.</li>
                                
                                <li>Apart from Aquaventure Water Park, your ticket covers access to the Lost Chambers Aquarium and the 700-meter-long Adventure Beach.</li>
                                <li>Experience a mix of super daring, milder and kid-exclusive rides, slides and attractions within the water park.</li>
                                <li>The water park’s daredevil experiences take form of Leap of Faith, Master Blast and Poseidon’s Revenge.
</li>
                                <li>Opportunity to be part of a variety of thrilling marine activities such as Ray Feeding, Shark Snorkeling and Diving</li>
                                
                                <li>You can further fly high over the park with the Atlantean Flyer zip line and experience the exhilarating ever wave rider fun with Surf’s Up.</li>
                                
                                <li>As you step into the Lost Chambers Aquarium, discover the mythical city of the Lost City of Atlantis</li>
                                
                                <li>There are also 65,000 marine animals on display here.</li>
                            </ul>
                      </div>
            </div>

 <div className='highlights  flex flex-col gap-4'  >

                      <h3 className='font-semibold'  >Tour Inclusions</h3>

                   

                      <div className='points'  >
                            <ul className='flex flex-col gap-1 '  >
                                <li>Transfers (If option selected)</li>
                                <li>Atlantis Aqua venture Day Pass</li>
                                
                                <li>Enjoy unlimited access to Aquaventure Water Park</li>
                                <li>Get unlimited access to Adventure Beach.</li>
                                <li>Atlantis Aquaventure Super pass
</li>
                                <li>Make the most of its mix of heart-racing, milder, and kid-specific rides with Entry to the Lost Chambers Aquarium</li>
                                
                                <li>Lost Chamber Aquarium.</li>
                                
                                <li>See over 65000 distinct marine animals.</li>
                                
                                <li>Chances to see marine experts dive and feed sharks.</li>
                            </ul>
                      </div>
            </div>

   <div className='highlights  flex flex-col gap-4'  >

                      <h3 className='font-semibold'  >Exclusion</h3>

                   

                      <div className='points'  >
                            <ul className='flex flex-col gap-1 '  >
                                <li>Exclusion</li>
                                <li>All personal expenses spend for dining, shopping etc. on-site</li>
                              
                            </ul>
                      </div>
            </div>
               <div className='important-info flex flex-col gap-4' >
                                   <h3 className='font-semibold'    >Important Information</h3>

               </div>
               <div className='flex gap-1 flex-col' >
                    <p> Visitors are not allowed to bring food, beverages & Alcohol into Aquaventure..</p>
                    
                      <p>Atlantis Aquaventure is a shallow water facility. Please enter all pools and attractions feet first for your safety. Diving is not permitted anywhere. </p>
                       <p>The Pickup will be arranged from Dubai Hotel / Residence only.</p>
                        <p>Pick-up from Areas other than centrally located Dubai Hotels / Residence will be done on request with an additional surcharge..</p>
                         <p>Sharing transfers are available only from Deira, Bur Dubai..</p>
                          <p>The pick-up/drop-off timing on Sharing transfers may be modified as per the trip schedule by 30 to 60 minutes, depending on traffic conditions and your locatio</p>
                         
                          <p className='font-bold'  >Important Note: – Atlantis Off-peak tickets will not be valid for the below-mentioned dates –</p>

                          
                          <p>21 October – 5 November 2025</p>
                            <p>23 December – 31 December 2025</p>
               </div>
                  
             </div>
               
        </div>
      )}
    </div>
  )
}

export default Aquarium1