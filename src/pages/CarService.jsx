import { Link } from 'react-router-dom';
import boschcarImg from '../assets/boschcar.jpg';
import euromasterImg from '../assets/euromaster.jpg';
import mforceImg from '../assets/mforce_boa.jpg';
import norautoImg from '../assets/norauto.jpg';

function CarService() {
  return (
    <div>
      <section>
        <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
          <header className='text-center'>
            <h2 className='text-xl font-bold text-gray-900 sm:text-3xl'>
              Vehicle Maintenance
            </h2>
          </header>

          <ul className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
            <Link to='/boschcarservice'>
              <li>
                <div className='group block relative overflow-hidden'>
                  <img
                    src={boschcarImg}
                    alt='Lisbon'
                    className='h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]'
                  />
                  <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition duration-300 opacity-0 group-hover:opacity-100'>
                    <h3 className='text-white text-xl font-bold text-center'>
                      BOSCH SERVICE
                    </h3>
                  </div>
                </div>
                <h3 className='mt-2 text-sm font-bold text-gray-700 group-hover:underline group-hover:underline-offset-4'>
                  BOSCH SERVICE
                </h3>
              </li>
            </Link>
            <Link to='/euromaster'>
              <li>
                <div className='group block relative overflow-hidden'>
                  <img
                    src={euromasterImg}
                    alt='Sintra'
                    className='h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]'
                  />
                  <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition duration-300 opacity-0 group-hover:opacity-100'>
                    <h3 className='text-white text-xl font-bold text-center'>
                      EUROMASTER
                    </h3>
                  </div>
                </div>
                <h3 className='mt-2 text-sm font-bold text-gray-700 group-hover:underline group-hover:underline-offset-4'>
                  EUROMASTER
                </h3>
              </li>
            </Link>
            <Link to='/mforce'>
              <li>
                <div className='group block relative overflow-hidden'>
                  <img
                    src={mforceImg}
                    alt='Sintra'
                    className='h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]'
                  />
                  <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition duration-300 opacity-0 group-hover:opacity-100'>
                    <h3 className='text-white text-xl font-bold text-center'>
                      MFORCE
                    </h3>
                  </div>
                </div>
                <h3 className='mt-2 text-sm font-bold text-gray-700 group-hover:underline group-hover:underline-offset-4'>
                  MFORCE
                </h3>
              </li>
            </Link>
            <Link to='/norauto'>
              <li>
                <div className='group block relative overflow-hidden'>
                  <img
                    src={norautoImg}
                    alt='Sintra'
                    className='h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]'
                  />
                  <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition duration-300 opacity-0 group-hover:opacity-100'>
                    <h3 className='text-white text-xl font-bold text-center'>
                      NORAUTO
                    </h3>
                  </div>
                </div>
                <h3 className='mt-2 text-sm font-bold text-gray-700 group-hover:underline group-hover:underline-offset-4'>
                  NORAUTO
                </h3>
              </li>
            </Link>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default CarService;
