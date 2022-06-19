import React, { useState } from 'react'
import Navbar from 'Components/Navbar'
import { animatedChain, copyIcon, LinksBlob1, LinksBlob2, rightArrow } from 'Assets'
import { Player } from '@lottiefiles/react-lottie-player'
import axios, { AxiosResponse } from 'axios'

function Links() {
  const [responseId, setResponseId] = useState('')
  const [url, setUrl] = useState('')
  const redirectLink = process.env.REACT_APP_SHORTENER_LINK + '/api/redirect/' + responseId

  function postLink (values: React.SyntheticEvent) {
    values.preventDefault()

    axios.post('/api/create', { url }, {
      baseURL: process.env.REACT_APP_SHORTENER_LINK,
      headers: { Response: 'application/json'}
    }).then((response: AxiosResponse) => {
      setResponseId(response.data?._id)
    }).catch()
  }

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
        <form onSubmit={postLink} className='links-container__text-group'>
          <span className='links-container__header'>Basta inserir o link no campo abaixo</span>
          <input name='url' type="text" className='links-container__input' onChange={event => setUrl(event.target.value)}/>
          <button className='links-container__button' type='submit'>
            <img className='links-container__button--svg' src={rightArrow} alt='submit link' />
          </button>
          <div className='links-container__link-result'>
            <span className='links-container__result-text'>
              {responseId && redirectLink}
            </span>
            <img
              className='links-container__result-icon'
              alt="Copiar link"
              src={copyIcon}
              onClick={() => navigator.clipboard && navigator.clipboard.writeText(redirectLink)}
            />
          </div>
        </form>
      </div>
    </>
  )
}

export default Links