import React from 'react'
import Navbar from 'Components/Navbar'
import ProfileImage from 'Assets/profileImage.jpeg'
import { ReactComponent as LinkedinIcon } from 'Assets/linkedinIcons.svg'
import { ReactComponent as GitHubIcon } from 'Assets/githubIcon.svg' 

function About () {
  return (
    <div className='about'>
      <Navbar />
      <h4 className='about__header'>Sobre mim</h4>
      <img className='about__profile-image' src={ProfileImage} alt="Imagem de perfil" />
      <h3 className='about__profile-name'>Pedro H. G. Bonel</h3>
      <p className='about__profile-profession'>Front-End Developer</p>
      <div className='about__grid'>
        <p className='about__description'>Projeto desenvolvido com o objetivo de aprofundar meus conhecimentos em JS e ReactJS.
          Outros projetos estão disponíveis em meu GitHub.
        </p>
        <div className='about__icons'>
          <div className='about__icon'>
            <GitHubIcon />
            <p>github.com/pentrU</p>
          </div>
          <div className='about__icon'>
            <LinkedinIcon />
            <p>linkedin.com/in/pedrohbonel</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About