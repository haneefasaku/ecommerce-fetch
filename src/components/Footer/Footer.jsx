import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        &copy; AJ Tech {new Date().getFullYear()}
    </div>
  )
}

export default Footer