import { Link } from 'react-router-dom';
import portoImg from '../assets/porto.jpg';
import LisbonImg from '../assets/Lisboa.jpg';
import sintraImg from '../assets/sintra.jpg';
import algarveImg from '../assets/algarve.jpg';

function TourPage() {
  return (
    <div>
      <section>
        <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
          <header className='text-center'>
            <h2 className='text-xl font-bold text-gray-900 sm:text-3xl'>
              Explore Tours around Portugal
            </h2>
          </header>

          <ul className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
            <Link to='/lisbontour'>
              <li>
                <div className='group block relative overflow-hidden'>
                  <img
                    src={LisbonImg}
                    alt='Lisbon'
                    className='h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]'
                  />
                  <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition duration-300 opacity-0 group-hover:opacity-100'>
                    <h3 className='text-white text-xl font-bold text-center'>
                      LISBOA
                    </h3>
                  </div>
                </div>
                <h3 className='mt-2 text-sm font-bold text-gray-700 group-hover:underline group-hover:underline-offset-4'>
                  LISBOA
                </h3>
              </li>
            </Link>
            <Link to='/sintratour'>
              <li>
                <div className='group block relative overflow-hidden'>
                  <img
                    src={sintraImg}
                    alt='Sintra'
                    className='h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]'
                  />
                  <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition duration-300 opacity-0 group-hover:opacity-100'>
                    <h3 className='text-white text-xl font-bold text-center'>
                      SINTRA & CASCAIS
                    </h3>
                  </div>
                </div>
                <h3 className='mt-2 text-sm font-bold text-gray-700 group-hover:underline group-hover:underline-offset-4'>
                  SINTRA & CASCAIS
                </h3>
              </li>
            </Link>
            <Link to='/portotour'>
              <li>
                <div className='group block relative overflow-hidden'>
                  <img
                    src={portoImg}
                    alt='Sintra'
                    className='h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]'
                  />
                  <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition duration-300 opacity-0 group-hover:opacity-100'>
                    <h3 className='text-white text-xl font-bold text-center'>
                      PORTO
                    </h3>
                  </div>
                </div>
                <h3 className='mt-2 text-sm font-bold text-gray-700 group-hover:underline group-hover:underline-offset-4'>
                  PORTO
                </h3>
              </li>
            </Link>
            <Link to='/algarvetour'>
              <li>
                <div className='group block relative overflow-hidden'>
                  <img
                    src={algarveImg}
                    alt='Sintra'
                    className='h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]'
                  />
                  <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition duration-300 opacity-0 group-hover:opacity-100'>
                    <h3 className='text-white text-xl font-bold text-center'>
                      ALGARVE
                    </h3>
                  </div>
                </div>
                <h3 className='mt-2 text-sm font-bold text-gray-700 group-hover:underline group-hover:underline-offset-4'>
                  ALGARVE
                </h3>
              </li>
            </Link>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default TourPage;
