import { Link } from 'react-router-dom';
import massage1 from '../assets/vibration.png';
import massage2 from '../assets/reflexology.png';
import massage3 from '../assets/massage1.png';
import massage4 from '../assets/chairmassage.png';

function ServiceList() {
  return (
    <section>
      <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-2'>
        <header className='text-center'>
          <h2 className='text-xl font-bold text-gray-900 sm:text-3xl'>
            Therapeutic Massages
          </h2>

          <p className='mx-auto mt-4 max-w-md text-gray-500'>
            Therapeutic Massage applies pressure on the energetic lines and
            points more intense than the Massage for relaxation.
          </p>
        </header>

        <ul className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          <li>
            <a href='#' className='group block overflow-hidden'>
              <img
                src={massage1}
                alt=''
                className='h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]'
              />

              <div className='relative bg-white pt-3'>
                <h3 className='text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4'>
                  Reflexology
                </h3>
              </div>
            </a>
          </li>

          <li>
            <a href='#' className='group block overflow-hidden'>
              <img
                src={massage2}
                alt=''
                className='h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]'
              />

              <div className='relative bg-white pt-3'>
                <h3 className='text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4'>
                  Shiatsu
                </h3>
              </div>
            </a>
          </li>

          <li>
            <a href='#' className='group block overflow-hidden'>
              <img
                src={massage3}
                alt=''
                className='h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]'
              />

              <div className='relative bg-white pt-3'>
                <h3 className='text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4'>
                  Vibration
                </h3>
              </div>
            </a>
          </li>

          <li>
            <a href='#' className='group block overflow-hidden'>
              <img
                src={massage4}
                alt=''
                className='h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]'
              />

              <div className='relative bg-white pt-3'>
                <h3 className='text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4'>
                  Chair Massage
                </h3>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <ol className='flex justify-center mt-10 gap-2 text-xs font-medium'>
        <li>
          <a
            href='#'
            className='inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180'
          >
            <span className='sr-only'>Prev Page</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-3 w-3'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                clipRule='evenodd'
              />
            </svg>
          </a>
        </li>

        <li>
          <Link
            to='/'
            className='block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900'
          >
            1
          </Link>
        </li>

        <li>
          <Link
            to='/about'
            className='block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900'
          >
            2
          </Link>
        </li>

        <li>
          <Link
            to='/services'
            className='block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900'
          >
            3
          </Link>
        </li>

        <li>
          <Link
            to='/'
            className='block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900'
          >
            4
          </Link>
        </li>

        <li>
          <a
            href='#'
            className='inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180'
          >
            <span className='sr-only'>Next Page</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-3 w-3'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                clipRule='evenodd'
              />
            </svg>
          </a>
        </li>
      </ol>
    </section>
  );
}

export default ServiceList;
