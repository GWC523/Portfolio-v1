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
          <li onClick={() => navigate(-1)}>
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
          <li onClick={() => navigate('/aboutMe')}>
            <a className={path == "/aboutMe" ? "active-link": "inactive-link"}>About</a>
          </li>
          <li onClick={() => navigate('/works')}>
            <a className={path == "/works" ? "active-link": "inactive-link"}>Works</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar