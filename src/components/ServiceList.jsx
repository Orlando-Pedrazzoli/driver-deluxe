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
                <div className='group block relative overflow-hidden'>
                  <img
                    src={vibrationImg}
                    alt='Lisbon'
                    className='h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]'
                  />
                  <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition duration-300 opacity-0 group-hover:opacity-100'>
                    <h3 className='text-white text-xl font-bold text-center'>
                      VIBRATION
                    </h3>
                  </div>
                </div>
                <h3 className='mt-2 text-sm font-bold text-gray-700 group-hover:underline group-hover:underline-offset-4'>
                  VIBRATION
                </h3>
              </li>
            </Link>
            <Link to='/reflexology'>
              <li>
                <div className='group block relative overflow-hidden'>
                  <img
                    src={reflexologyImg}
                    alt='Sintra'
                    className='h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]'
                  />
                  <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition duration-300 opacity-0 group-hover:opacity-100'>
                    <h3 className='text-white text-xl font-bold text-center'>
                      REFLEXOLOGY
                    </h3>
                  </div>
                </div>
                <h3 className='mt-2 text-sm font-bold text-gray-700 group-hover:underline group-hover:underline-offset-4'>
                  REFLEXOLOGY
                </h3>
              </li>
            </Link>
            <Link to='/chairmassage'>
              <li>
                <div className='group block relative overflow-hidden'>
                  <img
                    src={chairImg}
                    alt='Sintra'
                    className='h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]'
                  />
                  <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition duration-300 opacity-0 group-hover:opacity-100'>
                    <h3 className='text-white text-xl font-bold text-center'>
                      CHAIR MASSAGE
                    </h3>
                  </div>
                </div>
                <h3 className='mt-2 text-sm font-bold text-gray-700 group-hover:underline group-hover:underline-offset-4'>
                  CHAIR MASSAGE
                </h3>
              </li>
            </Link>
            <Link to='/shiatsu'>
              <li>
                <div className='group block relative overflow-hidden'>
                  <img
                    src={shiatsuImg}
                    alt='Sintra'
                    className='h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]'
                  />
                  <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition duration-300 opacity-0 group-hover:opacity-100'>
                    <h3 className='text-white text-xl font-bold text-center'>
                      SHIATSU
                    </h3>
                  </div>
                </div>
                <h3 className='mt-2 text-sm font-bold text-gray-700 group-hover:underline group-hover:underline-offset-4'>
                  SHIATSU
                </h3>
              </li>
            </Link>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default ServiceList;
