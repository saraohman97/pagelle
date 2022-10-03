import React from 'react'
import showcase from '../img/showcase.jpg'
import pagelle from '../img/pagelle.png'
import img from '../img/img.jpg'
import chevron from '../img/chevron.png'

const MainView = () => {
  return (
    <div className='main-view'>
      <div className="showcase-img"><img src={showcase} alt="" /></div>

      <div className="category-box-1">
        <div className="title">
          <h3>Shoppa höstens mode på </h3>
          <img src={pagelle} alt="" />
        </div>

        <div className="img-container">
          <div className="img">
            <img src={img} alt="" />
            <img src={img} alt="" />
            <img src={img} alt="" />
            <img src={img} alt="" />
          </div>

          <img src={chevron} className='chevron-right' alt="" />
        </div>
      </div>



      <div className="category-box-2">
        <div className="title">
          <h3>Nytt på </h3>
          <img src={pagelle} alt="" />
        </div>

        <div className="img-container">
          <div className="img">
            <img src={img} alt="" />
            <img src={img} alt="" />
            <img src={img} alt="" />
            <img src={img} alt="" />
          </div>

          <img src={chevron} className='chevron-right' alt="" />
        </div>
      </div>


      <div className="category-box-3">
        <div className="title">
          <h3>Kvinnokläder på </h3>
          <img src={pagelle} alt="" />
        </div>

        <div className="img-container">
          <div className="img">
            <img src={img} alt="" />
            <img src={img} alt="" />
            <img src={img} alt="" />
            <img src={img} alt="" />
          </div>

          <img src={chevron} className='chevron-right' alt="" />
        </div>
      </div>
    </div>
  )
}

export default MainView