import React from 'react'
import Nav from '../navbar/Nav'
import aboutimg  from '../../assets/trafalgar-header illustration 1.png';
import '../about/about.css'

function About() {
  return (
    <div>
      <Nav/>

      <div className='about-title'>
        <div className='left-box'>
        <h1>Virtual healthcare for you</h1>
        <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
        <button type="button">Consult today</button>
        </div>
      
      <div className='right-box'>
        <img src={aboutimg} alt="" />
        </div>
      </div>

    </div>
  )
}

export default About