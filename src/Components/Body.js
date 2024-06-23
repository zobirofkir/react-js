import React from 'react'

function Body() {
  return (
    <div>
      <section className='flex p-10 xl:justify-normal justify-center py-44 bg-body-image bg-cover bg-center bg-no-repeat'>

        <div className='space-y-2 p-5 my-24 bg-gost-image bg-center bg-cover bg-no-repeat relative  xl:left-36  rounded shadow-2xl'>
          <h1 className='xl:text-2xl font-bold uppercase whitespace-nowrap text-white '>Hello I'm Zobir Ofkir</h1>
          <p className='text-lg font-bold text-white'> I'm a Developer </p>
          <div className='container xl:m-24 m-10 py-10'>
          <a href=''> <button className='bg-gray-700 p-5 rounded-full xl:p-5 whitespace-nowrap text-white'> Contact Me </button> </a>
          </div>
        </div>

        <div className='relative xl:left-2/4'>
          <img src='https://www.icegif.com/wp-content/uploads/2022/10/icegif-1192.gif' className='xl:w-full xl:h-full xl:flex hidden'/>
        </div>
      </section>
    </div>
  )
}

export default Body