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
            <Link to={`/services/${serviceId}`}>
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
            </Link>
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
        <span className='flex items-center mt-28'>
          <span className='h-px flex-1 bg-gray-300'></span>
          <span className='shrink-0 px-6'></span>
          <span className='h-px flex-1 bg-gray-300'></span>
        </span>
      </div>
    </section>
  );
}

export default ServiceList;
