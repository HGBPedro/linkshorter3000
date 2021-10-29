import React from 'react'
import indexImage from './Assets/indexImage.png'

function Home () {
  return (
    <div className='home'>
      <h1>Linkshorter 3000</h1>
      <p>The best link shortener around</p>
      <div className='home__button-group'>
        <button>Get started</button>
        <button>About</button>
      </div>      
    </div>
  )
}

export default Home