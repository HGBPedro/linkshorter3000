import React from 'react'
import indexImage from 'Assets/indexImage.png'

function Home() {
  return (
    <div className='home'>
      <img src={indexImage} alt="home logo" className='home__logo' />
      <div className='home__container'>
        <h2 className='header'>Linkshorter 3000</h2>
        <p>The best link shortener around</p>
        <div className='home__button-group'>
          <a href='links' className='home__button'>Get started</a>
          <a href='about' className='home__button'>About</a>
        </div>
      </div>
    </div>
  )
}

export default Home