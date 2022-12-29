import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className='service__head'>
            <h3>Software Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Managed a group of fellow students to release a GitHub insight website</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Worked with Microsoft and fellow students to release a Pneumothorax Detection Machine Learning Software</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Understanding of various languages within the front-end and back-end setting</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Ability to use code collaboration tools and work seamlessly in a team environment</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Flexible and Collaborative Employee</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>My wide array of professional experience and qualifications demonstrate a willingness to engage in any task required!</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I have worked in and lead/captained teams in professional, academic and sporting environments</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I am always delighted to try new things and more than eager to learn!</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Business Consultancy</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>A wide knowledge across many disciplines of the business world</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>A fundamentally sound mathematical and problem solving understanding</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Experience in various softwares including BigRedCloud, SAP, Smartsheet and Excel</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Experienced in writing reports and making recommendations in a team based environment</p>
            </li>
          </ul>
        </article>
      </div>


    </section>
  )
}

export default Services