import React from 'react'

const Form = () => {
  return (
    <div>

      <form className='flex flex-col gap-5 w-70  '   >

<div className='input-1'   >
<label>Your Name</label>
   <input 
  type="text" 
  placeholder="Enter Your Name"
  class="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
/>

</div>

    <div className='input-2'  >
      <label>Your Email</label>
   <input 
  type="text" 
  placeholder="Enter Your Email"
  class="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
/>
    </div>

    <div className='input-3'  >
      <label>Enter your Subject</label>
   <input 
  type="text" 
  placeholder="Enter text"
  class="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
/>
    </div>

<div className='input-4'  >

   <label>Your message</label>
   <input 
  type="text" 
  placeholder="Enter your Message"
  class="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
/>

</div> 
      </form>
   

    </div>
  )
}

export default Form
