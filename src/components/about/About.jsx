import React from 'react'
import './about.css'
import ME from'../../assets/other-me.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>6+ Years Working</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>Various Business and Software Enginnering Projects</small>
            </article>
          </div>

          <p>
            Currently a 3rd year Computer Science Major and Business Student in Trinity College Dublin. I love music, football, 
            motorsport and hockey. Please see more about my achievments and hobbies in my CV and don't be afraid to reach out below!
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk!</a>
        </div>
      </div>
    </section>
  )
}

export default About