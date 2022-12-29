import React from 'react'
import './portfolio.css'

import KG from '../../assets/PDF Kerry Group Report.pdf'
import CN from '../../assets/CSU 33031 ASSIGNMENT 2 REPORT PDF.pdf'
import COVID from '../../assets/COVID Project.zip'
import DEMO1 from '../../assets/CS1013-DemoForBestProject-19.mp4'
import CC from '../../assets/Sem2 Essay PDF.pdf'
import DEMO2 from '../../assets/Video Presentation.mp4'
import CMM from '../../assets/Marketing.pdf'

import IMG1 from '../../assets/port1.jpg'
import IMG2 from '../../assets/port2.jpg'
import IMG3 from '../../assets/port3.jpg'
import IMG4 from '../../assets/port4.jpg'
import IMG5 from '../../assets/port5.jpg'
import IMG6 from '../../assets/port6.jpg'
import IMG7 from '../../assets/port7.jpg'
import IMG8 from '../../assets/port8.jpg'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
            <h3>Microsoft Pneumothorax Detection Software</h3>
            <a href="https://github.com/cianmawhinney/microsoft-pneumothorax-classifier" className='btn' target='_blank'>Repository</a>
            <a href="https://pneumothorax.mawh.in/index.html" className='btn btn-primary' target='_blank'>Website</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>GitHub Productivity Measurer</h3>
          <a href="https://github.com/jawood25/Software-Enginerring-Main-Project-Group-1" className='btn' target='_blank'>Repository</a>
          <a href="https://group1-performance-measurer.herokuapp.com" className='btn btn-primary' target='_blank'>Website</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
            <h3>Kerry Group: Fundamental Equity Analysis</h3>
            <a href={KG} className='btn btn-primary' download>Download Report</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <div className="portfolio__item-image">
            <h3>Computer Networks: Flow Forwarding Network Using an SD-WAN Overlay</h3>
            <a href="https://github.com/elliot-lyons/comp-networks-assmt-2" className='btn' target='_blank'>Repository</a>
            <a href={CN} className='btn btn-primary' download>Download Report</a>
          </div>
          </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <div className="portfolio__item-image">
            <h3>US COVID-19 Analysis Software</h3>
            <a href={COVID} className='btn' download>Source Code</a>
            <a href={DEMO1} className='btn btn-primary' download>View Demo</a>
          </div>
          </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <div className="portfolio__item-image">
            <h3>Climate Change: The Promises and Perils of Strategic Cognition</h3>
            <a href={CC} className='btn btn-primary' download>Download Paper</a>
          </div>
          </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG7} alt="" />
          </div>
          <div className="portfolio__item-image">
            <h3>TransLink Bus Route Planner</h3>
            <a href="https://github.com/elliot-lyons/alg-and-data-structures-2-project" className='btn' target='_blank'>Repository</a>
            <a href={DEMO2} className='btn btn-primary' download>View Demo</a>
          </div>
          </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG8} alt="" />
          </div>
            <h3>Contemporary Marketing Management Issues Faced in Rolex</h3>
            <a href={CMM} className='btn btn-primary' download>Download Paper</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio