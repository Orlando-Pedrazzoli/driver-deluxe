import { Link } from 'react-router-dom';
import chairImg from '../assets/chairmassage.png';
import vibrationImg from '../assets/vibration.png';
import reflexologyImg from '../assets/reflexology.png';
import shiatsuImg from '../assets/shiatsu.png';

function ServiceList() {
  return (
    <div>
      <section>
        <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
          <header className='text-center'>
            <h2 className='text-xl font-bold text-gray-900 sm:text-3xl'>
              Massage Collection
            </h2>
          </header>

          <ul className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
            <Link to='/vibration'>
              <li>
                <div href='#' className='group block overflow-hidden'>
                  <img
                    src={vibrationImg}
                    alt=''
                    className='h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]'
                  />

                  <div className='relative bg-white pt-3'>
                    <h3 className='text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4'>
                      Vibration
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
                    src={reflexologyImg}
                    alt=''
                    className='h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]'
                  />

                  <div className='relative bg-white pt-3'>
                    <h3 className='text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4'>
                      Reflexology
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
                    src={chairImg}
                    alt=''
                    className='h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]'
                  />

                  <div className='relative bg-white pt-3'>
                    <h3 className='text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4'>
                      Chair Massage
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
                    src={shiatsuImg}
                    alt=''
                    className='h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]'
                  />

                  <div className='relative bg-white pt-3'>
                    <h3 className='text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4'>
                      Shiatsu
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

export default ServiceList;
