import React from 'react'

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <h2 className='text header'>Linkshorter 3000</h2>
        <p className='text'>The best link shortener around</p>
        <div className='home__button-group'>
          <a href='links' className='home__button'>Get started</a>
          <a href='about' className='home__button'>About</a>
        </div>
      </div>
    </div>
  )
}

export default Home