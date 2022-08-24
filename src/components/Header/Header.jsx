import "./Header.css"

import logo from "../../assets/logo.png"
import search from "../../assets/header/search.svg"
import user from "../../assets/header/user.svg"
import shoppingCart from "../../assets/header/shopping-cart.svg"
import frenchFlag from "../../assets/header/french-flag.svg"
import englishFlag from "../../assets/header/english-flag.svg"

import { Link } from "react-router-dom"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import switchLang from "../../redux/actions/index"

const Header = () => {
  const [flag, setFlag] = useState(englishFlag)

  const dispatch = useDispatch()
  const data = useSelector((state) => state.allLanguages.language)

  const languageSettings = () => {
    if (flag === frenchFlag) {
      setFlag(englishFlag)
      dispatch(switchLang("eng"))
      console.log(flag)
    } else {
      setFlag(frenchFlag)
      dispatch(switchLang("fr"))
      console.log(flag)
    }
  }

  return (
    <header>
      <Link to="/" className="header-logo">
        <img src={logo} alt="logo de carteapecher"></img>
        <h1>CARTEDEPECHE.FR</h1>
      </Link>
      <nav>
        <label>☰</label>
        <input id="menu-toggle" type="checkbox" />
        <ul className="menu-1">
          <li>{data.header.practicalInformations}</li>
          <li>{data.header.about}</li>
          <li>{data.header.help}</li>
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
          <li className="language-menu" onClick={() => languageSettings()}>
            <img src={flag} alt="drapeau français" />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
