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
            <Link to='/vibration'>
              <li>
                <div href='#' className='group block overflow-hidden'>
                  <img
                    src={LisbonImg}
                    alt=''
                    className='h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]'
                  />

                  <div className='relative bg-white pt-3'>
                    <h3 className='text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4'>
                      LISBOA
                    </h3>

                    <p className='mt-2'>
                      <span className='sr-only'> Regular Price </span>
                    </p>
                  </div>
                </div>
              </li>
            </Link>

            <Link to='/reflexology'>
              <li>
                <div href='#' className='group block overflow-hidden'>
                  <img
                    src={sintraImg}
                    alt=''
                    className='h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]'
                  />

                  <div className='relative bg-white pt-3'>
                    <h3 className='text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4'>
                      SINTRA
                    </h3>

                    <p className='mt-2'>
                      <span className='sr-only'> Regular Price </span>
                    </p>
                  </div>
                </div>
              </li>
            </Link>

            <Link to='/chairmassage'>
              <li>
                <div href='#' className='group block overflow-hidden'>
                  <img
                    src={portoImg}
                    alt=''
                    className='h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]'
                  />

                  <div className='relative bg-white pt-3'>
                    <h3 className='text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4'>
                      PORTO
                    </h3>

                    <p className='mt-2'>
                      <span className='sr-only'> Regular Price </span>
                    </p>
                  </div>
                </div>
              </li>
            </Link>

            <Link to='/shiatsu'>
              <li>
                <div href='#' className='group block overflow-hidden'>
                  <img
                    src={algarveImg}
                    alt=''
                    className='h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]'
                  />

                  <div className='relative bg-white pt-3'>
                    <h3 className='text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4'>
                      ALGARVE
                    </h3>

                    <p className='mt-2'>
                      <span className='sr-only'> Regular Price </span>
                    </p>
                  </div>
                </div>
              </li>
            </Link>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default TourPage;
