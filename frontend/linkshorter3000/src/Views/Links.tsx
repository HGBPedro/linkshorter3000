import React, { useState } from 'react'
import Navbar from 'Components/Navbar'

function Links() {
  const [links, setlinks] = useState(['1'])

  return (
    <>
      <Navbar />
      <div className='links-container'>
        <h3>Link shortener</h3>
        <form action="" className='links-container__form'>
          <div>
            <input type="text" className='links-container__input' />
            <button className='links-container__button'>Encurtar</button>
          </div>
          <div>
            <input type="text" className='links-container__input' disabled />
            <div className='links-container__button-group'>
              <button className='links-container__button'>Copiar</button>
              <button className='links-container__button'>Compartilhe</button>
            </div>
          </div>
        </form>
        <aside className="links-contaner__list-div">
          <ul className="links-contaner__list">
            {links.map(item => {
              return (
                <li>
                  <div className='links-container__list-item'>
                    <p>Link N</p>
                    <p>Link url</p>
                    <span className='links-container__circle' />
                  </div>
                </li>
              )
            })}
          </ul>
        </aside>
        <div className="links-container__details">
          <h3>LInk N</h3>
          <p>Link url</p>
          <div>
            <span>QRCODE</span>
            <p>link original</p>
            <p>Criado em: DD/MM/YYYY</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Links