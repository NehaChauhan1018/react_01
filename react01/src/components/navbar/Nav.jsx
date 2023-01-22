import React from 'react'
import Logo from '../../assets/logo.png';
import '../navbar/nav.css'

function Nav() {
  return (
    <div className='navbar'>
      <div className="left-div"><img src={Logo} alt="app logo" /></div>
      <div className="right-div">
        <ul className='nav-item'>
          <li> <a href="http://www.google.com">Home</a>  </li>
          <li> <a href="">About</a>  </li>
          <li><a href="">App</a>  </li>
          <li><a href="">Testimonials</a>  </li>
          <li><a href="">Contact us</a>  </li>
        </ul>
      </div>
    </div>
  )
}

export default Nav