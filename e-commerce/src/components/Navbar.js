import { useState } from 'react'
import pagelle from '../img/pagelle.png'
import { NavLink, Link } from 'react-router-dom'
import cartIcon from '../img/cart-icon.png'
import MenuClothes from '../components/menu/MenuClothes'

const Navbar = () => {

  const [showClothes, setShowClothes] = useState(false)
  const [showNews, setShowNews] = useState(false)

  const toggleClothes = () => {
    showClothes
    ? setShowClothes(false)
    : setShowClothes(true)
  }

  return (
    <div className='navbar'>
      <Link to='/'><img src={pagelle} alt="" /></Link>

      <div className="nav-links">
        <NavLink to='/nyheter'>Nyheter</NavLink>
        <li onClick={toggleClothes}>Kläder</li>
        {showClothes && <MenuClothes />}
        <NavLink to='/skor'>Skor</NavLink>
        <NavLink to='/accessoarer'>Accessoarer</NavLink>
        <NavLink to='/business'>Business woman</NavLink>
        <NavLink to='/frakt'>Frakt & villkor</NavLink>
        <NavLink to='/om-oss'>Om oss</NavLink>

        <div className="shopping-cart"><img src={cartIcon} alt="" /></div>
      </div>
    </div>
  )
}

export default Navbar