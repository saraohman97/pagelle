import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../img/img.jpg'

const MenuClothes = () => {
  return (
    <div className='menu-clothes'>
      <div className="text">
        <h2>Kläder</h2>
        <ul className='menu-link'>
          <Link to='/'>Lorem</Link>
          <Link to='/'>Lorem</Link>
          <Link to='/'>Lorem</Link>
          <Link to='/'>Lorem</Link>
          <Link to='/'>Lorem</Link>
          <Link to='/'>Lorem</Link>
          <Link to='/'>Lorem</Link>
          <Link to='/'>Lorem</Link>
          <Link to='/'>Lorem</Link>
          <Link to='/'>Lorem</Link>
          <Link to='/'>Lorem</Link>
          <Link to='/'>Lorem</Link>
          <Link to='/'>Lorem</Link>
          <Link to='/'>Lorem</Link>
          <Link to='/'>Lorem</Link>
          <Link to='/'>Lorem</Link>
          <Link to='/'>Lorem</Link>
          <Link to='/'>Lorem</Link>
          <Link to='/'>Lorem</Link>
        </ul>
      </div>
      
      <img src={img} alt="" />
    </div>
  )
}

export default MenuClothes