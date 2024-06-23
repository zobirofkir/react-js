import React, { useState } from 'react'
import { Link } from 'react-router-dom';


function HomeScreen() {
  const cards = [1, 2, 3];
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
          <div>
            <nav className="bg-black w-full xl:p-5 p-2">
              <div className="flex justify-between items-center px-4 py-2">
                <div className="text-white font-bold text-xl">
                  <Link to={'/'}>Home</Link>
                </div>
                <div className="block lg:hidden">
                  <button className="text-white focus:outline-none" onClick={toggleMenu}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                  </button>
                </div>
                <div className="hidden lg:flex space-x-10">
                  <Link to={"/about"} className='text-white font-bold text-xl'>About</Link>
                  <Link to={'/contact'} className='text-white font-bold text-xl'>Contact</Link>
                  <a href="#" className="text-white font-bold text-xl">Login</a>
                  <a href="#" className="text-white font-bold text-xl">Register</a>
                </div>
              </div>
              {isOpen && (
                <div className="lg:hidden">
                  <a href="" className="block text-white font-bold text-xl px-4 py-2">About</a>
                  <a href="" className="block text-white font-bold text-xl px-4 py-2">Contact</a>
                  <a href="" className="block text-white font-bold text-xl px-4 py-2">Login</a>
                  <a href="" className="block text-white font-bold text-xl px-4 py-2">Register</a>
                </div>
              )}
            </nav>
          </div>


          <section className='flex p-10 xl:justify-normal justify-center py-44 bg-body-image bg-cover bg-center bg-no-repeat'>

              <div className='space-y-2 p-5 my-24 bg-gost-image bg-center bg-cover bg-no-repeat relative  xl:left-36  rounded shadow-2xl'>
                <h1 className='xl:text-2xl font-bold uppercase whitespace-nowrap text-white '>Hello I'm Zobir Ofkir</h1>
                <p className='text-lg font-bold text-white'> I'm a Developer </p>
                <div className='container xl:m-24 m-10 py-10'>
                <a href='/contact'> <button className='bg-gray-700 p-5 rounded-full xl:p-5 whitespace-nowrap text-white'> Contact Me </button> </a>
                </div>
              </div>

              <div className='relative xl:left-2/4'>
                <img src='https://www.icegif.com/wp-content/uploads/2022/10/icegif-1192.gif' className='xl:w-full xl:h-full xl:flex hidden'/>
              </div>
          </section>

          <div className='flex justify-center align-center text-center py-10 font-bold size-2xl bg-about-image'>
          <h1>About Me</h1>
        </div>

      <section className='grid xl:gap-4 gap-2 xl:grid-cols-3 xl:grid-rows-1 bg-about-image'>
        {cards.map((card, index) => (
          <div className='p-10 bg-card-image bg-cover bg-center bg-no-repeat shadow-2xl m-10 rounded '>
              <h3 className='justify-center align-center flex text-white'>
                Web Developement
              </h3>
              <div className='flex justify-center align-center'>
                <img src='https://png.pngtree.com/png-vector/20220704/ourmid/pngtree-scary-cat-face-illustration-vector-png-image_5594216.png'/>
              </div>
              <p className='justify-center align-center flex text-white'>Web DevelopementWeb DevelopementWeb DevelopementWeb Developement</p>
          </div>
        ))}
      </section>

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

      <footer class="bg-black rounded-lg shadow m-4">
          <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span class="text-sm text-gray-500 sm:text-center text-white">© 3034 <a href="https://flowbite.com/" class="hover:underline">ZOBIR OFKIR</a>. All Rights Reserved.
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
              <li>
                  <a href="#" class="hover:underline me-4 md:me-6 text-white">About</a>
              </li>
              <li>
                  <a href="#" class="hover:underline me-4 md:me-6 text-white">Privacy Policy</a>
              </li>
              <li>
                  <a href="#" class="hover:underline me-4 md:me-6 text-white">Licensing</a>
              </li>
              <li>
                  <a href="#" class="hover:underline text-white">Contact</a>
              </li>
          </ul>
          </div>
      </footer>

    </>
  )
}

export default HomeScreen