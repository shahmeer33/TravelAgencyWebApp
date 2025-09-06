import React from 'react'
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <div  className='main flex bg-black text-white items-center  justify-between py-10 px-40 ' >
           <div className='container-1 flex flex-col gap-5'  >

            <div>
                                 <h3>CONTACT INFO</h3>

            </div>

                 <div>
                  <p> office No .M-09 ,Mezzanine FlOOR Ayal Nasir<br/> Building,Ayal Naseer st Deira Dubai,UAE</p>
                       <p>Landline No.+971-4-8353637</p>
                       <p>Mobile No.+971-508287672/+971-56-9973292</p>
                       <p>Whatsapp No.+971-50-8287672</p>
                       <p> Email ID info@fourteenstartravels.ae</p>  
                 </div>
           </div>

           <div className='container-2 flex flex-col gap-5' >

           <div>
                            <h3>ABOUT US</h3>

           </div>

            <div  className='flex flex-col'>
    <Link to="/aboutus"  >About us</Link>
                <Link to="/refundandcancellationpolicy"  >Refund and Cancellation policy</Link>
                <Link to="/dubaiexcursions"    >Dubai excusrions</Link>
                <Link  to="/VisaServices"     >Visa Service</Link>
                <Link to="/packagetours"    >Package Tours</Link>
                 <Link to="/blogs"    >Blogs</Link>
                 <Link to="/aboutus"    > Contact Us</Link>

            </div>
           
           </div>

           <div className='container-3 flex flex-col  justify-between h-full mb-30 gap-5 '   >
            <div   >
               <h3>PAY SAFELY WITH US</h3>

            </div>
               <p>The payment is encrypted <br/>and transmiited securley with an SSL protocol</p>
           </div>
    </div>
  )
}

export default Footer
