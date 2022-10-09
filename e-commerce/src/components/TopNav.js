import React from 'react'

const TopNav = () => {
  return (
    <div className='top-nav'>
      <div className="container">
        <small>Shoppa höstens erbjudande</small>
        <small className='center'>Rabattkod: AUTUMN22</small>
        <div className="social-icons">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-linkedin-in"></i>
          <i className="fa-brands fa-twitter"></i>
        </div>
      </div>
    </div>
  )
}

export default TopNav