import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className='bg-white border-b border-gray-200'>
      <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <div className='md:flex md:items-center md:gap-12'>
            <Link to='/' className='block'>
              <span className='sr-only'>Home</span>
              <p className='font-bold tracking-wide text-2xl '>DRIVER CARE</p>
            </Link>
          </div>

          <div className='hidden md:block'>
            <nav aria-label='Global'>
              <ul className='flex items-center gap-8 text-sm'>
                <li>
                  <Link
                    to='/'
                    className='text-gray-700 transition hover:text-gray-500/75'
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to='/services'
                    className='text-gray-700 transition hover:text-gray-500/75'
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to='/news'
                    className='text-gray-700 transition hover:text-gray-500/75'
                  >
                    News
                  </Link>
                </li>

                <li>
                  <Link
                    to='/contactus'
                    className='text-gray-700 transition hover:text-gray-500/75'
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className='flex items-center gap-4'>
            <div className='sm:flex sm:gap-4'>
              <Link
                to='/login'
                className='rounded-md bg-red-500 px-5 py-2.5 text-sm font-medium text-white shadow'
              >
                Login
              </Link>

              <div className='hidden sm:flex'>
                <Link
                  to='/signup'
                  className='rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600'
                >
                  Signup
                </Link>
              </div>
            </div>

            <div className='block md:hidden'>
              <button className='rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
