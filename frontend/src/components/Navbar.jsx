import { useState } from 'react';
import Dropdown from '../components/Dropdown';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faTimes,
  faCaretDown,
} from '@fortawesome/free-solid-svg-icons';
import './CSS/Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link
          to='/'
          className='navbar-logo font-semibold'
          onClick={closeMobileMenu}
        >
          <p>DRIVER CARE</p>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <FontAwesomeIcon icon={click ? faTimes : faBars} />
        </div>

        <ul className={click ? 'nav-menu active ' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>

          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Services <FontAwesomeIcon icon={faCaretDown} />
            </Link>
            {dropdown && <Dropdown />}
          </li>

          <li className='nav-item'>
            <Link to='/news' className='nav-links' onClick={closeMobileMenu}>
              News
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              to='/bookings'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Bookings
            </Link>
          </li>

          <li className='nav-item-auth ml-8'>
            <Link to='/signup' onClick={closeMobileMenu}>
              <Button className='text-white bg-green-500 hover:bg-green-600 transition-all duration-200 ease-out'>
                Sign Up
              </Button>
            </Link>
          </li>

          <li className='nav-item-auth ml-4'>
            <Link to='/login' onClick={closeMobileMenu}>
              <Button className='text-white bg-blue-700 hover:bg-blue-800 transition-all duration-200 ease-out'>
                Login
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
