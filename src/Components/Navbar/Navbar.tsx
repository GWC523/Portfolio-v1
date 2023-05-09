import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";

/* Images */
import Sun from '../../Assets/Images/Navbar/sunny.png';

/* CSS */
import './Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface NavbarProps {
  path: any,
  backPath: any
}

function Navbar({path, backPath} : NavbarProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  let navigate = useNavigate();

  return (
    <nav className="navigation">
      <button 
        className="hamburger"
        onClick={() => {
            setIsExpanded(!isExpanded)
        }}
      >
      <FontAwesomeIcon
        icon={'bars'}
        title={'close'}
        aria-hidden='true'
        className='menu-nav-icon'
       />      
      </button>
      <div
        className={isExpanded ? "navigation-menu expanded" : "navigation-menu"}>
        <ul>
          <li onClick={() => navigate(backPath)}>
            <a>{isExpanded ? 
                    "Home" :    
                    <FontAwesomeIcon
                            icon={'arrow-left-long'}
                            title={'close'}
                            aria-hidden='true'
                            className='back-nav-icon'
                    />}
            </a>
          </li>
          <li>
            <a className={path == "/aboutMe" ? "active-link": "inactive-link"}>About</a>
          </li>
          <li>
            <a className={path == "/Works" ? "active-link": "inactive-link"}>Works</a>
          </li>
        </ul>
      </div>
      <span className='lightmode-toggle'>
        <img src={Sun} className='light-mode-icon'/>
      </span>
    </nav>
  )
}

export default Navbar