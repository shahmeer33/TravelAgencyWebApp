import React, { useState } from 'react'
import Description from '../components/Description'
import Review from '../components/Review'
import ReviewForm from '../components/ReviewForm'

const AbuDhabiCityTour = () => {
  // false = Description, true = Review
  const [toggle, setToggle] = useState(false)

  console.log(toggle)

  return (
    <div className="p-6 section-3">
      {toggle ? (
        <div>
          {/* Review part toggle ke liye */}
          <div >
            <Review setToggle={setToggle} />
          </div>

          {/* ReviewForm independent hai, ispe click karne se kuch change nahi hoga */}
          <ReviewForm  />   
        </div>
      ) : (
        <div>
          <div >
            <Description setToggle={setToggle}    />
          </div>

          <div className='flex flex-col justify-center items-center gap-4 mr-100 w-200 ml-50'>
            <div className='text-4xl font-semibold mr-115'>
              <h2>Why visit Abu Dhabi</h2>
            </div>
            <div>
              <p>Some of you are thinking why you should visit Abu Dhabi if you have already seen Dubai city. But the main point is although both are neighbors and are in the Arab World still, the silent features of both cities are entirely different. In the same place does not mean that they are similar and offers the same attraction. Abu Dhabi has its own distinct features utterly different from Dubai and gives you an amazing feeling once you visit the place. Abu Dhabi is the capital of the U.A.E and is a tremendous regional powerhouse.</p>
            </div>

            <div className='text-4xl font-semibold mr-90'>
              <h2>Things to do in Abu Dhabi</h2>
            </div>
            <div>
              <p>If you’re thinking about the options, what can one do in Abu Dhabi? Then do not worry, Abu Dhabi city is not short of options for its tourists. Here are some of the best things anyone can enjoy during their trip to Abu Dhabi..</p>
            </div>

            <div className='text-4xl font-semibold mr-80'>
              <h2>Sheikh Zayed Grand Mosque</h2>
            </div>
            <div>
              <p>Who does not know the name of Sheik Al Zayed Mosque? It does not matter where you live if you love to travel and are interested in beautiful architect than you must hear this name. Without hesitating twice, one can say that Sheikh Al Zayed Mosque is the landmark of the Abu Dhabi. The mosque is a fantastic combination of cladding in Macedonian marble. Mosque proudly reflects the colors of Mameluke, Ottoman, and Fatimid design, which collectively makes it a masterpiece of Islamic architecture. It took 20 years to complete this masterpiece and is opened to the public in 2007. Visitors can witness the amazing artwork in the interior and exterior of the mosque.</p>
            </div>

            <div className='text-4xl font-semibold mr-20'>
              <h2>• Emirates Palace Hotel – Epitome of Luxury</h2>
            </div>
            <div>
              <p>Who does not know the name of Sheik Al Zayed Mosque? It does not matter where you live if you love to travel and are interested in beautiful architect than you must hear this name. Without hesitating twice, one can say that Sheikh Al Zayed Mosque is the landmark of the Abu Dhabi. The mosque is a fantastic combination of cladding in Macedonian marble. Mosque proudly reflects the colors of Mameluke, Ottoman, and Fatimid design, which collectively makes it a masterpiece of Islamic architecture. It took 20 years to complete this masterpiece and is opened to the public in 2007. Visitors can witness the amazing artwork in the interior and exterior of the mosque.</p>
            </div>

            <div className='text-4xl font-semibold mr-140'>
              <h2>• Ferrari World</h2>
            </div>
            <div>
              <p>This place is specially designed for all of the car racing fans. It is a theme park that allows you to have a thrilling experience of Formula One racing. Children’s can also enjoy and learn driving skills on Junior GT track whereas, for an exciting experience, the adrenaline junkies are waiting for all of you to ride flying ace roller coasters. It also contains a spectacular collection of Ferrari cars..</p>
            </div>

            <div className='text-4xl font-semibold mr-160'>
              <h2>Yas Island</h2>
            </div>
            <div>
              <p>This beautiful man-made island is nothing less than luxury and comfort with the picture-perfect view of the beach. You can spend your day enjoying sunbathing in a peaceful environment away from the busy routine of life. Other features of the island are its Yas water park, Yas Marina Circuit for car racing and Yas Malls for shopping</p>
            </div>

            <div className='text-4xl font-semibold'>
              <h2>Abu Dhabi Heritage Village – Discover History at Its Best!</h2>
            </div>
            <div>
              <p>This beautiful man-made island is nothing less than luxury and comfort with the picture-perfect view of the beach. You can spend your day enjoying sunbathing in a peaceful environment away from the busy routine of life. Other features of the island are its Yas water park, Yas Marina Circuit for car racing and Yas Malls for shopping</p>
            </div>

            <div className='mr-120'>
              <h2 className='text-3xl font-semibold'>Vital Information</h2><br/>
              <h2 className='text-2xl font-semibold'>TERMS & CONDITIONS</h2>
            </div>
            <div>
              <p>You have to book the Abu Dhabi City Tour at least 24 hours prior to your tour da</p>
              <p>Prices are on a shared / Private basis as per option selected or available at time of booking</p>
              <p>All the prices are applicable per person only.</p>
              <p>For kids up to 2 Years are Free of Charge, 3 years and above same price will be charged as of an adult.</p>
            </div>

            <div>
              <h2 className='text-4xl font-semibold mr-120'>SEATING POLICY</h2>
            </div>
            <div className='mr-70'>
              <p>We hold the rights on allocation of seating as per availability.</p>
              <p>All the shared transfers are managed on SIC / Sharing with other Tourist.</p>
            </div>

            <div className='text-4xl font-semibold mr-50'>
              <h2>DRESS CODE FOR GRAND MOSQUE</h2>
            </div>
            <div>
              <p>Men: Long-Sleeve Shirts, and Full Length Trouser (ankle-length).</p>
              <p>Women: Long Trousers or Skirts, Long-Sleeve Shirts or Tops, Nothing Tight, Headscarf is a must to cover the head (important).</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AbuDhabiCityTour
