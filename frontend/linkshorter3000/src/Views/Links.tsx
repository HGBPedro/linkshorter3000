import React from 'react'
import Navbar from 'Components/Navbar'
import { animatedChain, copyIcon, LinksBlob1, LinksBlob2, rightArrow } from 'Assets'
import { Player } from '@lottiefiles/react-lottie-player';


function Links() {
  return (
    <>
      <Navbar />
      <div className='links-container'>
        <div className="links-container__icon-group">
          <img
            src={LinksBlob1}
            className='links-container__icon-background links-container__icon-background--blob1'
            alt="blob background"
          />
          <img
            src={LinksBlob2}
            alt="blob background"
            className='links-container__icon-background links-container__icon-background--blob1'
          />
          <div className='links-container__icon'>
            <Player speed={0.45} autoplay loop src={animatedChain} />
          </div>
        </div>
        <form action="" className='links-container__text-group'>
          <span className='links-container__header'>Basta inserir o link no campo abaixo</span>
          <input type="text" className='links-container__input' />
          <button className='links-container__button' type='submit'>
            <img className='links-container__button--svg' src={rightArrow} alt='submit link' />
          </button>
          <div className='links-container__link-result'>
            <span className='links-container__result-text'>
            lipsum.commmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
            </span>
            <img src={copyIcon} className='links-container__result-icon' alt="Copiar link" />
          </div>
        </form>
      </div>
    </>
  )
}

export default Links