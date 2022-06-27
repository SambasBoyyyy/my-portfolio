import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        
        <a href={CV} download className='btn'>Get the CV</a>
        <a href="https://www.facebook.com/messages/t/100011463729389" className='btn btn-primary'>Let's Talk</a>
        
        
        </div>
  )
}

export default CTA