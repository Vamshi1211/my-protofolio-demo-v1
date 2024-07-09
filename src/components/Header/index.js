import {useState} from 'react'
import {Link} from 'react-router-dom'
import {RxHamburgerMenu} from 'react-icons/rx'
import './index.css'

const Header = () => {
  const [isButtonClicked, onButtonToggle] = useState(false)

  const onButtonClicked = () => {
    onButtonToggle(prevState => !prevState)
  }

  const onClickMenuItem = () => {
    onButtonToggle(false)
  }

  return (
    <>
      <nav className="navbar-container">
        <p className="navbar-icon">V.</p>
        <ul className="desktop-nav-items">
          <li className="nav-item">
            <Link to="/" className="nav-link-item">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link-item">
              About
            </Link>
          </li>
          <li className="nav-item">Projects</li>
          <li className="nav-item">My Works</li>
          <li className="nav-item">Services</li>
          <li className="nav-item">Contact Info</li>
        </ul>
        <div className="mobile-menu-container">
          <button
            type="button"
            className="trigger-button"
            onClick={onButtonClicked}
          >
            <RxHamburgerMenu size={30} />.
          </button>
        </div>
      </nav>

      {isButtonClicked && (
        <ul className="menu-list-container">
          <li className="menu-item" onClick={onClickMenuItem}>
            Home
          </li>
          <li className="menu-item" onClick={onClickMenuItem}>
            About
          </li>
          <li className="menu-item" onClick={onClickMenuItem}>
            Projects
          </li>
          <li className="menu-item" onClick={onClickMenuItem}>
            My Works
          </li>
          <li className="menu-item" onClick={onClickMenuItem}>
            Services
          </li>
          <li className="menu-item" onClick={onClickMenuItem}>
            Contact Info
          </li>
        </ul>
      )}
    </>
  )
}
export default Header
