import { ReactComponent as Linkedin } from '../../assets/icons/linkedin.svg'
import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg'
import { ReactComponent as Website } from '../../assets/icons/website.svg'
import logo from '../../assets/images/logo.png'
import './index.scss'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-elements">
          <span className="app-title">
            <img src={logo} className="app-logo" alt="logo" />
          </span>
          <ul className="social-links">
            {/* <li>
              <a href="https://codewithbasit.netlify.app/" target="_blank" rel="noreferrer">
                <Website />
              </a>
            </li> */}
            <li>
              <a href="https://twitter.com/Kigbu_ai" target="_blank" rel="noreferrer">
                <Twitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/amekalo-kigbu-675938167/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
