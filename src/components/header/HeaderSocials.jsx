import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/elliot-lyons-6602361b0/' target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href='https://github.com/elliot-lyons' target="_blank" rel="noreferrer"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials