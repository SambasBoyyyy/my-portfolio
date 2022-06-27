import React from 'react'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import './header.css'
import ME from '../../assets/me.png'
const Header = () => {
  return (
      <header>
      
     <div className="container header__container">
     
     <h4>Hello I'm</h4>
     <h1>SAMIUL BASIR</h1>
     <h5 className='text-light'>FullStack Developer</h5>
     <CTA/>

     <div className="me">
      <img src={ME} alt="" />
     </div>

     <HeaderSocials />

    <a href="#content"  className='scroll__down'>Scoll Down</a>

  
     </div>
      
      </header>
    
    
  )
}

export default Header