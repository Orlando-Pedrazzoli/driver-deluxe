import { useState, useContext } from 'react';
import { AuthContext } from '@/context/auth.context';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './CSS/Navbar.css';

function Navbar() {
  const { isLoggedIn, logoutUser } = useContext(AuthContext);
  const [click, setClick] = useState(false);
  const [activeLink, setActiveLink] = useState('');

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

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleLinkClick = link => {
    setActiveLink(link);
    closeMobileMenu();
  };

  return (
    <>
      {!isLoggedIn ? (
        <nav className='navbar'>
          <div className='navbar-logo font-semibold'>
            <Link to='/' onClick={() => setActiveLink('')}>
              <p>DRIVER DELUXE</p>
            </Link>
          </div>
          <ul className='nav-menu'>
            <li className='nav-item-auth'>
              <Link
                to='/signup'
                onClick={() => handleLinkClick('/signup')}
                className={`text-white bg-green-500 hover:bg-green-600 transition-all duration-200 ease-out rounded px-4 py-2 ${
                  activeLink === '/signup' ? 'active' : ''
                }`}
              >
                Sign Up
              </Link>
            </li>
            <li className='nav-item-auth'>
              <Link
                to='/login'
                onClick={() => handleLinkClick('/login')}
                className={`text-white bg-blue-700 hover:bg-blue-800 transition-all duration-200 ease-out rounded px-4 py-2 ${
                  activeLink === '/login' ? 'active' : ''
                }`}
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
            onClick={() => setActiveLink('')}
          >
            <p>DRIVER DELUXE</p>
          </Link>

          <div className='menu-icon' onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faTimes : faBars} />
          </div>

          <ul className={click ? 'nav-menu active ' : 'nav-menu'}>
            <li className='nav-item'>
              <Link
                to='/allservices'
                className={`nav-links ${
                  activeLink === '/allservices' ? 'active' : ''
                }`}
                onClick={() => handleLinkClick('/allservices')}
              >
                All <FontAwesomeIcon />
              </Link>
            </li>
            <li
              className='nav-item'
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link
                to='/massages'
                className={`nav-links ${
                  activeLink === '/massages' ? 'active' : ''
                }`}
                onClick={() => handleLinkClick('/massages')}
              >
                Massages <FontAwesomeIcon />
              </Link>
            </li>
            <li
              className='nav-item'
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link
                to='/tourpage'
                className={`nav-links ${
                  activeLink === '/tourpage' ? 'active' : ''
                }`}
                onClick={() => handleLinkClick('/tourpage')}
              >
                Tours <FontAwesomeIcon />
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/carservice'
                className={`nav-links ${
                  activeLink === '/carservice' ? 'active' : ''
                }`}
                onClick={() => handleLinkClick('/carservice')}
              >
                Car Service
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/news'
                className={`nav-links ${
                  activeLink === '/news' ? 'active' : ''
                }`}
                onClick={() => handleLinkClick('/news')}
              >
                News
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/bookings'
                className={`nav-links ${
                  activeLink === '/bookings' ? 'active' : ''
                }`}
                onClick={() => handleLinkClick('/bookings')}
              >
                Bookings
              </Link>
            </li>

            <li className='nav-item flex justify-center md:justify-end'>
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
