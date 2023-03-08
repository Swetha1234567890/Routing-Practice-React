// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="container">
    <div className="header">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png "
        className="logo"
        alt="wave"
      />
      <h1 className="header-name">Wave</h1>
    </div>
    <ul className="list-container">
      <li>
        <Link className="home" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="about" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="contact" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
