import { useState, useContext } from 'react';
import { AuthContext } from '@/context/auth.context';
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
  const { isLoggedIn, logoutUser } = useContext(AuthContext);
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
      {!isLoggedIn ? (
        <nav className='navbar'>
          <div className='navbar-logo font-semibold'>
            <p>DRIVER CARE</p>
          </div>
          <ul className='nav-menu'>
            <li className='nav-item-auth'>
              <Link
                to='/signup'
                onClick={closeMobileMenu}
                className='text-white bg-green-500 hover:bg-green-600 transition-all duration-200 ease-out rounded px-4 py-2'
              >
                Sign Up
              </Link>
            </li>
            <li className='nav-item-auth'>
              <Link
                to='/login'
                onClick={closeMobileMenu}
                className='text-white bg-blue-700 hover:bg-blue-800 transition-all duration-200 ease-out rounded px-4 py-2'
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>
      ) : (
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
            {/* Render other navbar items here */}
            {/* Make sure to handle other navbar items */}
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

            <li className='nav-item'>
              <button
                onClick={logoutUser}
                className='rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary ml-4'
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

export default Navbar;
