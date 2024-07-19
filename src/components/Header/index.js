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

  const onMenuButtonClicked = () => {
    onButtonToggle(prevState => !prevState)
  }

  const onClickMenuItem = () => {
    onButtonToggle(false)
  }

  return (
    <>
      <nav className="navbar-container">
        <div className="nav-container">
          <AnchorLink href="#home" className="nav-link-icon">
            <img
              src="https://res.cloudinary.com/dxs4gnnbs/image/upload/v1720699345/Your_paragraph_text_wrbl1a.png"
              className="navbar-icon"
              alt="nav logo"
              loading="lazy"
            />
          </AnchorLink>
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
            <li className="nav-item">
              <AnchorLink href="#projects" className="nav-link-item">
                My Works
              </AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink href="#projects" className="nav-link-item">
                Services
              </AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink href="#projects" className="nav-link-item">
                Contact Info
              </AnchorLink>
            </li>
          </ul>
          <div className="mobile-container">
            <button
              type="button"
              className="trigger-button"
              onClick={onMenuButtonClicked}
            >
              <RxHamburgerMenu size={30} />.
            </button>
          </div>
        </div>
      </nav>

      {isButtonClicked && (
        <ul className="menu-list-container">
          <AnchorLink href="#home" className="nav-link-item">
            <li className="menu-item" onClick={onClickMenuItem}>
              Home
            </li>
          </AnchorLink>
          <AnchorLink href="#about" className="nav-link-item">
            <li className="menu-item" onClick={onClickMenuItem}>
              About
            </li>
          </AnchorLink>
          <AnchorLink href="#skills" className="nav-link-item">
            <li className="menu-item" onClick={onClickMenuItem}>
              My Skills
            </li>
          </AnchorLink>
          <AnchorLink href="#projects" className="nav-link-item">
            <li className="menu-item" onClick={onClickMenuItem}>
              Projects
            </li>
          </AnchorLink>
          <AnchorLink href="#projects" className="nav-link-item">
            <li className="menu-item" onClick={onClickMenuItem}>
              My Works
            </li>
          </AnchorLink>
          <AnchorLink href="#projects" className="nav-link-item">
            <li className="menu-item" onClick={onClickMenuItem}>
              Services
            </li>
          </AnchorLink>
          <AnchorLink href="#projects" className="nav-link-item">
            <li className="menu-item" onClick={onClickMenuItem}>
              Contact Info
            </li>
          </AnchorLink>
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
