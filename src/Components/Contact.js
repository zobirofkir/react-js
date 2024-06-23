import React from 'react'

function Contact() {
  return (
    <div>
      <div className='bg-contact-image p-10 flex justify-center items-center'>
        <h3 className='font-bold text-2xl text-white'>Contact Me</h3>
      </div>
      <section className='flex justify-center items-center bg-contact-image bg-cover bg-center bg-no-repeat py-24'>
        <div className='bg-contact-image xl:p-32 p-5 rounded shadow-2xl'>
          <form className='flex flex-col items-center'>
            <input name='email' placeholder='Email ...' className='p-5 rounded-full m-5 border border-gray-300'/>
            <input name='message' placeholder='Message ...' className='p-5 rounded-full m-5 border border-gray-300'/>
            <button className='bg-blue-700 p-3 rounded-full text-white hover:bg-blue-800 transition'>Send</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact
