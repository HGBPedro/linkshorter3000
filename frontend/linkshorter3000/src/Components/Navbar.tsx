import React, { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import menuIcon from 'Assets/menuIcon.svg'
import closeIcon from 'Assets/closeIcon.svg'

function Navbar () {
  const [toggleMenu, setToggleMenu] = useState(false)
  const icon = toggleMenu ? closeIcon : menuIcon

  const location = useLocation()
  return (
    <nav className='navbar'>
      <Link to='/' className='navbar__home'>
        <p>Linkshorter 3000</p>
      </Link>
      <img src={icon} className='navbar__menu-toggle' onClick={() => setToggleMenu(!toggleMenu)}/>
      <ul className={toggleMenu ? 'navbar__button-group--show' : 'navbar__button-group'}>
        <li>
          <Link
            className='navbar__button' 
            to="/"
            onClick={() => setToggleMenu(false)}
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            className={location.pathname === '/links' ? 'navbar__button underlined' : 'navbar__button'}
            to="/links"
            onClick={() => setToggleMenu(false)}
          >
            Links
          </Link>
        </li>
        <li>
          <Link
            className={location.pathname === '/about' ? 'navbar__button underlined' : 'navbar__button'}
            to="/about"
            onClick={() => setToggleMenu(false)}
          >
            Sobre mim
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar