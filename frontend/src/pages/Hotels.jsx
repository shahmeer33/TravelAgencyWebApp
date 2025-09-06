import React from 'react'
import {Link} from "react-router-dom"
import Form from '../components/Form'
import Button from '../components/Button'



const Hotels = () => {
  return (
    <div>
         <div className='main' >
               <div className='flex py-20 px-40' >
                    <div className='paragraph  flex flex-col gap-4 w-1/2  '  >
                        <h2 className='text-5xl font-bold mb-5 '  >Hotel Booking</h2>
                        <p className='text-sm' >Al Nahdi Travels & Tourism can help you in hotel booking in UAE states such as Dubai, Abu Dhabi, Fujairah, Ras Al Khaimah, Sharjah, Ajman & Umm Al Quwain.</p>

                        <p className='text-sm' >
                            For the best experience, we can recommend you the best hotels in whole UAE to make your trip adventurous with full of relaxation.
                        </p>

                        <p className='text-sm'  >
                            The U.A.E is a great place to begin a Middle Eastern adventure. Situated on the eastern side of the Arabian peninsula, it’s home to ultra-modern Dubai and Abu Dhabi, as well as vast sand dunes and the beautiful beaches of the Gulf of Oman. Dubai is certainly the jewel in the U.A.E’s crown. This glitz-and-glamour destination is home to the Burj Khalifa – the world’s tallest building – where you’ll soak up soaring views at the sky-high observation deck. Back on ground level, you can can visit indoor ski slopes and bustling souks, or enjoy a dhow ride on Dubai Creek. While Dubai dominates with its towering skyline, the capital of Abu Dhabi more than holds its own with stunning mosques, a diverse art museum and golden sand beaches. For a true Arabian experience, take a day trip to the desert for sightseeing, sand boarding and camel treks. If you’re after a more authentic stay, the U.A.E has many waterfront, beach side and city center apartments on offer. If you want to treat yourself with helicopter transfers and private beach access, Abu Dhabi and Dubai offer some of the most luxurious hotels in the world and Al Nahdi Travels & Tourism is here for helping you out accessing these activities.
                        </p>

                        <p className='text-sm'  >

                          <Link to="/dubaiuaevisa" className=''> Apply For Dubai Visa</Link>  or 
                          <Link to="/contactus"   > Conatct us </Link>
                          and we will handle the rest View our 
                          <Link  to="/shop"  > tourism Pacakges Here</Link>
                          
                        </p>
                         
                    </div>
                    <div className='img' >
                          <img alt="image"  />
                    </div>
               </div>
               <div className='form flex flex-col ml-20 gap-10 py-20  '  >
                   <div className='Inquiry-form  text-5xl font-bold items-center justify-center flex '  > 
                      <div className='mt-10'     >
                          Inquiry Form
                      </div>
                   </div>
                   <div className='input-boxes ml-15 flex flex-col gap-5' >
                        <div className='input-1 flex flex-col gap-3'    >
<label className='ml-2'  >Your Name</label>
   <input 
  type="text" 
  placeholder="Enter Your Name"
  class="w-200 px-4 py-2 border-none rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-lg transition"
/>

</div>

    <div className='input-2 flex flex-col gap-3'   >
      <label className='ml-2'  >Your Email</label>
   <input 
  type="text" 
  placeholder="Enter Your Email"
  class="w-200 px-4 py-2 border-none rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-lg transition"
/>
    </div>

    <div className='input-3 flex flex-col gap-3'  >
      <label className='ml-3'   >Enter your Subject</label>
   <input 
  type="text" 
  placeholder="Enter your Subject"
  class="w-200 px-4 py-2 border-none rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-lg transition"
/>
    </div>

<div className='input-3 flex flex-col gap-3'  >

   <label className='ml-3'    >Your message</label>
   <input 
  type="text" 
  placeholder="Enter your Message"
  class="w-200 px-4 py-2 border-none rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-lg transition"

/>

</div> 
                   </div>
                   <div className='ml-15' >
                      <Button value="Submit" />
                   </div>
               </div>
         </div>
    </div>
  )
}

export default Hotels
