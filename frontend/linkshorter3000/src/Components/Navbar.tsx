import React from 'react'

function Navbar () {
  return (
    <div className='navbar'>
      <p>Linkshorter 3000</p>
      <div className='navbar__button-group'>
        <a className='navbar__button' href="/">Inicio</a>
        <a className='navbar__button' href="/links">Links</a>
        <a className='navbar__button' href="/about">Sobre mim</a>
      </div>
    </div>
  )
}

export default Navbar