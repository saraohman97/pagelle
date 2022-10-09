import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../img/img.jpg'

const MenuClothes = () => {
  return (
    <div className='menu-clothes'>
      <div className="text">
        <h2>Kläder</h2>
        <ul className='menu-link'>
          <Link to='/kläder'>Skjortor & Blusar</Link>
          <Link to='/kläder'>Tröjor</Link>
          <Link to='/kläder'>Koftor & Sweatshirts</Link>
          <Link to='/kläder'>Jackor & kappor</Link>
          <Link to='/kläder'>Kostym</Link>
          <Link to='/kläder'>Byxor</Link>
          <Link to='/kläder'>Jeans</Link>
          <Link to='/kläder'>Shorts</Link>
          <Link to='/kläder'>Jumpsuits</Link>
          <Link to='/kläder'>Kjolar</Link>
          <Link to='/kläder'>Klänningar</Link>
          <Link to='/kläder'>Badkläder</Link>
          <Link to='/kläder'>Basplagg</Link>
          <Link to='/kläder'>Strumpbyxor & Tights</Link>
          <Link to='/kläder'>Underkläder</Link>
          <Link to='/kläder'>Sovplagg</Link>

          <Link to='/kläder' className='clr-pink'>Loungewear</Link>
          <Link to='/kläder' className='clr-pink'>Träningskläder</Link>
        </ul>
      </div>
      
      <img src={img} alt="" />
    </div>
  )
}

export default MenuClothes