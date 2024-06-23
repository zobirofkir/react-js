import React from 'react'

function Contact() {
  return (
    <div>
      <div className='bg-contact-image p-10 justify-center align-center flex'>
        <h3 className='font-bold size-24 whitespace-nowrap text-white'>Contact Me</h3>
      </div>
      <section className='flex justify-center alignt-center bg-contact-image bg-cover bg-center bg-no-repeat py-24'>
        <div className='bg-contact-image xl:p-32 p-5 rounded shadow-2xl '>
          <form>
            <input name='email' placeholder='Email ...' className='p-5 rounded-full m-5'/>
            <input name='message' placeholder='Message ...' className='p-5 rounded-full m-5'/>
            <button className='bg-blue-700 p-8 rounded-full text-white'>Send</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact