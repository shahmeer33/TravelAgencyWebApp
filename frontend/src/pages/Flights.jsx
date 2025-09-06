import React from 'react'
import Form from "../components/Form"
import Button from "../components/Button"

const Flights = () => {
  return (
    <div className='main flex flex-col gap-5 justify-start w-full justify-center justify-start py-10  ml-50'    >
           
           <h2 className='text-4xl' >The Sky is Waiting for You</h2>

           <p className=''  >With Al Nahdi Travel and Tourism, you can easily book any ticket you need to travel safely, thanks <br/>  to our detailed process of searching and booking tickets. Please use the form to get in touch with <br/> us.

Your name</p>

<div  className='mr-30 flex flex-col gap-5' >
      <form className='flex flex-col gap-5 w-70  '   >

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

<div className='input-4 flex flex-col gap-3'  >

   <label className='ml-3'    >Your message</label>
   <input 
  type="text" 
  placeholder="Enter your Message"
  class="w-200 px-4 py-2 border-none rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-lg transition"

/>

</div> 
      </form>
          <Button  value="submit" />
</div>
    


    </div>
  )
}

export default Flights
