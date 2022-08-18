import "./Header.css"

import logo from "../../assets/logo.png"
import search from "../../assets/header/search.svg"
import user from "../../assets/header/user.svg"
import shoppingCart from "../../assets/header/shopping-cart.svg"
import frenchFlag from "../../assets/header/french-flag.svg"
import chevronDown from "../../assets/header/chevron-down.svg"

import data from "../../data/lang/fr/Header.js"

const Header = () => {
  return (
    <header>
      <div className="header-logo">
        <img src={logo} alt="logo de carteapecher"></img>
        <h1>CARTEDEPECHE.FR</h1>
      </div>
      <nav>
        <label>☰</label>
        <input id="menu-toggle" type="checkbox" />
        <ul className="menu-1">
          <li>{data.practicalInformations}</li>
          <li>{data.about}</li>
          <li>{data.help}</li>
        </ul>
        <ul className="menu-2">
          <li>
            <img src={search} alt="user icon"></img>
          </li>
          <li>
            <img src={user} alt="user icon"></img>
          </li>
          <li>
            <img src={shoppingCart} alt="shopping cart icon"></img>
          </li>
          <li>
            <img src={frenchFlag} alt="drapeau français" />
            <img src={chevronDown} alt="flèche vers le bas" />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
