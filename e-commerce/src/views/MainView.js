import React from 'react'
import showcase from '../img/showcase.jpg'

const MainView = () => {
  return (
    <div className='main-view'>
      <div className="showcase-img"><img src={showcase} alt="" /></div>
    </div>
  )
}

export default MainView