import {useState} from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Home from '../Home'
import About from '../About'
import Skills from '../Skills'
import Projects from '../Projects'
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
            <AnchorLink href="#home" className="nav-link-item">
              Home
            </AnchorLink>
          </li>
          <li className="nav-item">
            <AnchorLink href="#about" className="nav-link-item">
              About
            </AnchorLink>
          </li>
          <li className="nav-item">
            <AnchorLink href="#skills" className="nav-link-item">
              My Skills
            </AnchorLink>
          </li>
          <li className="nav-item">
            <AnchorLink href="#projects" className="nav-link-item">
              Projects
            </AnchorLink>
          </li>
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
            <AnchorLink href="#about" className="nav-link-item">
              About
            </AnchorLink>
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
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </>
  )
}
export default Header
