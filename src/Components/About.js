import React from 'react'

function About() {
  const cards = [1, 2, 3];
  return (
    <div>
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
    </div>
  )
}

export default About