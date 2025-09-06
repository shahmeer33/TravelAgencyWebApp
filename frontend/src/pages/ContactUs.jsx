import React from 'react'
import Form from '../components/Form'
import Button from "../components/Button"

const ContactUs = () => {
  return (
    <div className='flex mt-20  pb-20   justify-center  gap-50 ' >
        <div className='Contact-form gap-5 flex flex-col gap-5'  >
           <h1  className='text-2xl font-semibold'>Contact Form</h1>
<Form/>

<Button  value="Submit"/>

        </div>
        <div className='get-social flex flex-col gap-5'  >
            <h1  className='text-2xl font-semibold'   >Get Social</h1>
            <div className='flex  gap-5' >
                <img alt="gmail" />
                 <img  alt="facebook" />
                <img alt="Instagram"         />
                 <img alt="Whatsapp"   />
                    <img alt="Linkdein"   />
             </div>
             <div className='contact-details flex flex-col gap-4'  >

              <div>
                  <h2 className='text-2xl font-semibold '>Contact Details</h2>
              </div>
                  <div className='flex flex-col gap-4'   >  
                       <div className='item-1 flex gap-15'  >
                          <img alt="house"  />
                                <p>
                               Shop No 3.Maryam Baqer Building ,Ayal Naseer Street ,Deira ,Dubai ,UAE
                           </p>
                       </div>

                       <div className='item-2 flex gap-15'  >
                         <img alt="phone" className='mt-3'     />
                          <p>
                               Landline <br/>
                                +971 4 220 2045 / +971 4 333 9675 / +971 4 263 9144 <br/>
                                Mobile No. +971567219751
                           </p>
                       </div>
                          <div  className='item- flex gap-20' >
                           <img alt="fax" className='mt-3'  />
                           <p className='ml-3' >  
                                Fax No <br/>
                            +971 4 220 2046
                           </p>
                       </div>


                       <div  className='item-4 flex gap-15 '  >
                         
                     <img  alt="message"  className='mt-3'  /> 
                            <p className='mr-3' >
                                Email <br/>
                                
info@alnahditravels.com
                            </p>
                       </div>

                  </div>

                    
             </div>
        </div>

    </div>
  )
}

export default ContactUs
