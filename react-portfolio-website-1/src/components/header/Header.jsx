import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/better.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="intro">
          <h5>Hello I'm</h5>
          <h1>Elliot Lyons</h1>
          <h5 className="text-light">Computer Science and Business Student</h5>
        </div>
        
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me"/>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header