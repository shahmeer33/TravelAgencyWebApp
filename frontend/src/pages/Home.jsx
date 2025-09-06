import React from "react";
import Card from "../components/Card";
import {Link } from "react-router-dom"
import Button from "../components/Button";
import { useState } from "react";

const Home = () => {

  const [ReadMore, setReadMore] = useState(false)


  return (
<>

    {/* //# conatiner 1 */}
    <div className="container-1 flex justify-between py-20 px-40 ">
      <div className="item-1 flex gap-3">
        <img alt="image" />

        <div className="flex flex-col gap-2" >
          <h5>Dubai Tourism</h5>
          <p>We cover almost all the activities <br/> and sightseeing in Dubai</p>

        </div>
      </div>

      <div className="item-2 flex gap-3">
                <img alt="image" />

        <div className="flex flex-col gap-2"   >
              <h5>Dubai Tourism</h5>
          <p>We deal in UAE visa,Visa chnage & Umrah Visa</p>
        </div>
      </div>

      <div className="item-3 flex gap-3 ">
                 <img alt="image" />
        <div className="flex flex-col gap-2"  >
              <h5>Visa Service</h5>
          <p>We provide both private & shared transfers</p>
        </div>
      </div>

      <div className="item-4 flex gap-3">
         <img alt="image" />

        <div className="flex flex-col gap-2"  >
          <h5>Transportation</h5>
          <p>Book from your Hotel Category</p>
        </div>
      </div>
    </div>

    {/* /* //# conatiner 2 */ }

    <div>
            <div className="bg-gray-200" >
              <div className="flex justify-center items-center gap-4 py-5 px-5"  >
                  <image src=""  alt="helo" />
                  <p>iamfge </p>
                  <h2 className="text-lg font-bold "  >Browse By Activities</h2>
              </div>
                <div  className="Card flex flex-col py-5 px-5 justify-center items-center gap-5 ">
                        <div className="flex  gap-5" >
                              <Card/>
                             <Card/>
                             <Card/>
                              <Card/>

                        </div>
                        <div className="flex gap-5 "  >
                             <Card/>
                             <Card/>
                             <Card/>
                              <Card/>
                        </div>
                </div>
                <div className="flex items-center justify-center  py-5" >
                  

                       <Link to="/viewpage" >
           <button class="
    bg-gradient-to-r from-cyan-400 to-blue-500  /* cyan to blue gradient */
    text-white 
    font-bold 
    px-6 py-3 
    rounded-full 
    shadow-lg 
    hover:from-cyan-500 hover:to-blue-600 
    hover:shadow-xl 
    transition 
    duration-300 
    transform 
    hover:-translate-y-1
    focus:outline-none
    focus:ring-2
    focus:ring-cyan-300
    focus:ring-opacity-50
  ">
    View All Activities
  </button>
                       </Link>
                </div>
              <div>
              </div>
            </div>
    </div>



{/* Conatiner# 3 */}

<div  className="flex flex-col items-center justify-center gap-4 py-15 " >
    
      <div  className="mr-170 ml-35 text-2xl font-bold"  >
              <h3  >  why Book with FourteenTravels?</h3>

      </div>
      <div>
           <p  >We make your trip memorable by providing you the most adventurous tours packages and visa service at the best rates in town.</p>

           <ul>
              <li>
                   Best price guarantee & Hassle free!
              </li>
                <li>
                      All places and activities are carefully picked by us.
              </li>
               <li>
                   All places and activities are carefully picked by us.
              </li>
               <li>
                   Trusted by more than 10,000 customers
              </li>
               <li>
                   We can organize unique experiences for customers. No matter what, we make it POSSIBLE!
              </li>

              <li>
                  We work with high level of commitment to make each trip successful, memorable and unique.
              </li>

           </ul>
           <div className="mt-5">
             <Button  />

           </div>
             

      </div>
</div>
 
{/* Container # 4 */}

<div className=" Visa-service flex flex-col justify-center items-center gap-8 py-5" >
     <div className="flex gap-10 justify-center items-center mr-100">
          <h2 className="text-2xl font-bold"   >Visa service</h2>
          <p>Find Your Requirements</p>
     </div>
       <div className="flex gap-4" >
            <Card/>
            <Card/>
            <Card/>

       </div>
     <div>
        
     </div>
</div>

{/* Container#5 */}

<div className="container-5 flex flex-col items-center   "  >
     
         <div className="section-1" >
             <h3 className="text-3xl font-semibold py-10"  >Tour Categories</h3>
         </div>

         <div className="section-2 pb-10 flex flex-col gap-20 justify-between " >

<div className="line-1 flex gap-50  " >
              
               <div>
                   <img/>
                   <p className="text-2xl"  >Dubai SightSeeing</p>
               </div>
 
                  <div  className="text-2xl"  >
                   <img/>
                   <p>Dubai Scuba Diving</p>
               </div>

                <div className="text-2xl"  >
                   <img/>
                   <p>Combo Offers</p>
               </div>
   </div>   

       <div className="line-2 flex gap-50 " >
              
               <div>
                   <img/>
                   <p className="text-2xl"  >Dubai water Activities</p>
               </div>
 
               <div  className="text-2xl"  >
                   <img/>
                   <p>Dubai Airport Transfer</p>
               </div>

                <div className="text-2xl"  >
                   <img/>
                   <p>Dubai Adventures</p>
               </div>
   </div>   

    <div className="line-3 flex gap-50 " >
              
               <div>
                   <img/>
                   <p className="text-2xl"  >Dubai Desert Safari </p>
               </div>
 
                  <div  className="text-2xl"  >
                   <img/>
                   <p>Dubai Atlantis Hotel</p>
               </div>

                <div className="text-2xl"  >
                   <img/>
                   <p>Dubai Fun Activities</p>
               </div>
   </div>   
   
    <div className="line-4 flex gap-50 " >
              
               <div>
                   <img/>
                   <p className="text-2xl"  >Dubai Luxury Tours</p>
               </div>
 
                  <div  className="text-2xl"  >
                   <img/>
                   <p>Dubai Dolphinarium</p>
               </div>

                <div className="text-2xl"  >
                   <img/>
                   <p>Dubai Helicopter Tour</p>
               </div>
   </div>   
         </div>
         
</div>


{/* Container 6 */}

<div className="container-6 " >
  <div className="flex flex-col items-center justif-center gap-7 py-20"  >
<h3 className="text-4xl font-semibold"   >Connect with us </h3>
      <div className="flex gap-4"   >
            <img alt="facebook" />
            <img alt="gmail"  />
            <img alt="instagram"   />
            <img alt="whatsApp"   />
            <img   alt="Linkdein"       />
            <img  alt="Satsaticket"      />
            


      </div>
  </div>
      
</div>


{/* Container 7 */}

<div className="flex  flex-col items-center justify-center gap-7 py-20" >

     <div className="mr-60" >
          <h2 className="text-3xl font-semibold"  >Fourteen Travel and Tourism is the <br/> leading travel and tours operator in UAE</h2>
     </div>
     <div className="w-200 flex flex-col gap-4 text-sm"  >
          <p>Fourteen Travel & Tourism is a professionally managed Destination Management Company, which is recognized as Tour Operators in Dubai (UAE) Since 2013. We offer Dubai tour packages and guide you with the ultimate and the most adventurous things to do in Dubai. We ensure customer satisfaction on the highest priority so that travelers or tourists can enjoy their vacations in Dubai to the full.   </p>
          <p>
              We make your trip memorable by providing you the most adventurous tours packages and visa services in the best rates in town. Al Nahdi is undoubtedly the trendsetter among all the travel agencies in dubai as we believe in not only offering the premium quality tours but also completely redefining the memorable experience perspective for the customers to enjoy safe, convenient and most adventurous experience in Dubai city.
          </p>
          <p className="text-orange-800  hover:text-cyan-950" onClick={() => setReadMore(!ReadMore)}  > Read More

             {ReadMore && (
        <div className="mt-4 p-4 flex flex-col gap-5 ">

               <h2  className="text-3xl">Al Nahdi is the leading travel and tours operator in UAE</h2>
               <p>
                  Al Nahdi Travel & Tourism is a professionally managed Destination Management Company, which is recognized as Tour Operators in Dubai (UAE) Since 2013. We offer Dubai tour packages and guide you with the ultimate and the most adventurous things to do in Dubai. We ensure customer satisfaction on the highest priority so that travelers or tourists can enjoy their vacations in Dubai to the full.<br/>

We make your trip memorable by providing you the most adventurous tours packages and visa services in the best rates in town. Al Nahdi is undoubtedly the trendsetter among all the travel agencies in dubai as we believe in not only offering the premium quality tours but also completely redefining the memorable experience perspective for the customers to enjoy safe, convenient and most adventurous experience in Dubai city.
               </p>

               <h2   className="text-3xl"  >
                  Convenient Payment Methods
               </h2>

               <p>
                   We at Al Nahdi understand that each individual has its own preferred method of payment which is convenient for them and that is why we have multiple options from which you can pick your preferred mode of payment which you find suitable and reliabl
               </p>
                 
                  <h2   className="text-3xl"  >
Cancellation & Refund Policy at Al Nahdi               </h2>

               <p>
                Our terms of services includes refund policy. You can check out our cancellation and refund policy to make sure your amount is in the right hand.
               </p>

      <h2   className="text-3xl"  >
Promissory Guarantee            </h2>

               <p>
               Al Nahdi puts customer satisfaction ahead of every other thing and that is why we offer guaranteed loving experience on every tour we offer. We ensure customer satisfaction in order to make sure one hundred percent honesty and transparency.
               </p>

                <h2   className="text-3xl"  >
Wide Range of Tourism           </h2>

               <p>
             In the world full of problems, everyone needs a break from ongoing routine and explore the world that results in relaxation, peace and memorable experience. Keeping that in mind Al Nahdi completely understands this inevitable phenomenon and hence offers online reservation with one of the largest hands-picked tourism in Dubai under all the possible categories one can think of to evaluate the standard of living.<br/>

Starting from an impressive tours of Dubai Desert Safari and Dubai Sightseeing excursions to the tours an individual needs such as Skydiving in Dubai and Scuba diving in Dubai, Al Nahdi stands for catering to every one of their loyal customers no matter what their background or interests are. That is why we make sure to have a diverse range of tours that will be adored by anyone. There is something for everyone here at Al Nahdi as we make sure to cover all the demographics to convey the perfect class of upscale purchase.
               </p>

               <h2   className="text-3xl"  >
Visa Service           </h2>

               <p>
            Al Nahdi also provides visa service and an option to apply for visa online directly on our website. You can apply for Dubai Visit Visa,  Dubai Visa Change and Umrah Visa From Dubai. We provide 14 Days Dubai UAE visa, 30 Days Dubai UAE visa, 90 Days Dubai UAE visa, 30 Days Airport Visa Change, 30 Days Oman Visa Change by Bus, 90 Days Airport Visa Change, 90 Days Oman Visa Change by Bus.<br/>

Al Nahdi Travels & Tourism is recognized as a reliable partner for Umrah visa service in Dubai, United Arab Emirates. It has attained a distinct reputation among the public for providing the highest level of service to the pilgrims at very affordable prices. This reputation is attained by streamlining, harmonizing and educating the staff about the pilgrims needs and the management’s evolving concept of service excellence.<br/>

Quick links: Find your visa requirements here by nationality, apply for visa online <br/>
               </p>

  <h2   className="text-3xl"  >
Dubai Desert Safari Excursions         </h2>

               <p>
            Dubai Desert Safari is one the best selling tourism, in the era of exploring adventures it make up for its greatest demand. Now, we see an immense increase in the number of tourist availing Desert Safari. Al Nahdi offers a wonderfully extensive range of Desert Safari Tours from which you can choose yours and we guarantee that you will have the best experience of adventurous tours in Dubai UAE. Providing exact authentic information about the tour. Also, Al Nahdi offers a wide range of Dubai tourism according to the various financial ranges. This makes the customers happy as they find the best of the best tourism in Dubai in their own range. Al Nahdi offers tourism from all over the UAE specifically in Dubai. Top hand-picked plus promisingly emerging Desert Safari tours in Dubai which includes Desert Safari in Dubai by Land Cruiser with BBQ Dinner, Desert Safari in Dubai with BBQ Dinner – SIC Basis, Desert Safari with Quad Biking, Dubai Desert Safari in Hummer H2, Dubai Dune Buggy Ride, Dubai Dune Buggy Self Drive, Morning Dune Bashing, Overnight Desert Safari, Dubai Arabian Majlis, Dubai Luxury VIP Majlis and many more. The quality of the tour is not something you can doubt as Al Nahdi has an impressive record satisfied yet happy tourists. Especially, Desert Safari are considered to be one of our best selling tour reserved online. <br/>

Further more Dubai Desert Safari is one of the recognized Dubai attractions that is famous worldwide.
               </p>

                <h2   className="text-3xl"  >
Water activities in Dubai</h2>

               <p>
             The vacation is a need of every individual for sure. But, laying on your bed is not what you only need to make the most memorable vacations. You also need a bunch of adventurous trips for the best experiences. What could be more wonderful experience than water activities in Dubai? <br/>

Al Nahdi offers the best water activities in Dubai by providing experiences either it is Fly Boarding in Dubai, Jet skiing in Dubai, Parasailing in Dubai, Boat rides in Dubai, Snorkeling in Dubai or Water theme parks in Dubai, we cover all the adventures and that’s what makes us the best and top travel agency in Dubai. We cover almost all the things to do in Dubai<br/>

These are the activities that are Must-do once in a lifetime. Al Nahdi facilitates you to enjoy these adventures to the full.<br/>

List of best water parks in Dubai: Aquaventure Water Park, Yas Water World Abu Dhabi, Wild Wadi Water Park, Legoland Water Park<br/>

List of water activities in Dubai: Banana Boat Ride, Crab Hunting, Dibba Musandam Tour, Dubai Aquarium & Underwater Zoo, Dubai Dolphin Bay Atlantis, Dubai Dolphinarium – Dolphin and Seal Show, Dubai Dolphinarium – Deep Water (Swimming), Dubai Dolphinarium – Meet & Greet (Touch), Dubai Dolphinarium – Shallow Water (Knee Deep), Dubai Donut Ride, Dubai Fly Boarding, Dubai Jet Ski, Dubai Kayaking, Dubai Parasailing, DUBAI SNORKELING – Snorkeling Trip in Fujairah, Dubai Yacht Rentals, Fly Fish in Dubai, Wonder Bus Tour <br/>
               </p>

               <h2 className="text-3xl "   > 
                   Luxury Tours in Dubai
               </h2>
               <p>
                  Ever wondered how the supper luxury life feels like? Wonder no more. Al Nahdi brings you best luxury tours in Dubai to feel the taste of luxury. Luxury is indeed something everyone desires for, how about experiencing it while saving on some bills? Al Nahdi Travels offers luxury activities in Dubai which will surely result in the feel of comfort such as: Chrysler Limousine Ride in Dubai, Dubai Arabian Majlis, DUBAI HELICOPTER THE PALM TOUR – 17MINS, DUBAI HELICOPTER TOUR ODYSSEY – 40MINS, DUBAI HELICOPTER TOUR THE VISION – 22MINS, DUBAI HELICOPTER TOURS ICONIC TOUR – 12MINS, Dubai Hot Air Balloon – Deluxe, Dubai Luxury VIP Majlis, Dubai Stretch Limousines Tours And Dubai Yacht Rentals
               </p>

   <h2 className="text-3xl "   > 
                 Dubai Dolphinarium
               </h2>
               <p>
                 Dubai Dolphinarium is home to numbers of unique attractions in Dubai. These include the UAE’s only dolphin show, seal show, exotic bird show & mirror maze. Dubai Dolphinarium is the first fully air-conditioned indoor dolphinarium in the Middle East, providing habitat to dolphins and seals, allowing the public to watch, play and enjoy being with these beautiful creatures. Al Nahdi offers tourist to explore Dubai to the full so therefore we give you a chance to meet beautiful dolphins Kiss, hug & even dance with our dolphins all under the guidance of our trainers. <br/>

Who hasn’t dreamt of meeting beautiful dolphins? We have Dubai Dolphinarium – Dolphin and Seal Show, Dubai Dolphinarium – Deep Water (Swimming), Dubai Dolphinarium – Meet & Greet (Touch), Dubai Dolphinarium – Shallow Water (Knee Deep), Dubai Dolphinarium – Creek Park Bird Show
               </p>

<h2 className="text-3xl "   > 
                Dubai Airport Transfer
               </h2>
               <p>
                 Travelling to new place may require hassles for transfer, keeping that in mind Al Nahdi offers Dubai Airport transfer services so that our tourist can enjoy on travelling hassle-free rather than waiting and facing issues in transfers. We at Al Nahdi provide you with both sharing and private cars pickup / dropoff service in Dubai from airport. We provide following transfers:  Dubai Air Port Drop Off, Dubai Air Port Pick Up, Dubai Airport to Abu Dhabi Pick Up / Drop Off, Dubai Airport to Ras Al Khaimah Pick Up / Drop Off, Dubai Marhaba Elite Services, Dubai Marhaba Services

 <p  className="mt-5"   onClick={() => setReadMore(false)} >
   Read Less

 </p>
               </p>


        </div>
      )}
          </p>
        
     </div>


</div>

</>
  );
};

export default Home;
