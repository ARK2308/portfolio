import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <Link to="mailto:abdulark500@gmail.com"><i class="ri-mail-line"></i></Link>
        <Link to="https://github.com/ARK2308"><i class="ri-github-line"></i></Link>
        <Link to="https://www.linkedin.com/in/abdul-raheem-khan-a114a4331/"><i class="ri-linkedin-fill"></i></Link> 
    </div>
  )
}

export default Footer