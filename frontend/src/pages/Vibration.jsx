import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getService } from '@/api/services.api';
import BookingSection from '@/components/BookingSection';
import chairImg from '../assets/chairmassage.png';

function Vibration() {
  const [services, setServices] = useState();
  /* 
  const { serviceType } = useLocation(); */

  const getServices = async () => {
    try {
      const response = await getService('vibration');
      console.log(response);
      console.log(response.data);
      setServices(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  return (
    <>
      <section className='bg-white text-gray-100 mt-12'>
        <div className='container flex flex-col-reverse mx-auto lg:flex-row'>
          <div className='flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 bg-gray-200 text-gray-900'>
            <div className='flex space-x-2 sm:space-x-4 mt-8'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                className='flex-shrink-0 w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
                ></path>
              </svg>
              <div className='space-y-2'>
                <p className='text-lg font-medium leadi'>Vibration:</p>
                <p className='leadi'>
                  Vibrations are a massage technique in which tissues are
                  pressed and released in an up and down movement. A vibration
                  massage creates a vibrating and shaking motion onto the
                  muscles that can be performed in a soothing or stimulating
                  way.
                </p>
              </div>
            </div>
          </div>
          <div className='lg:w-1/2 xl:w-3/5 bg-gray-200'>
            <div className='flex items-center justify-center p-4 md:p-8 lg:p-12 relative group'>
              <img
                src={chairImg}
                alt='Description of Image'
                className='rounded-lg shadow-lg bg-gray-500 aspect-video sm:min-h-96 transition duration-500 ease-in-out transform group-hover:scale-110'
              />
              <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out'>
                <a
                  href='https://www.youtube.com/watch?v=WDcm8p_2VGM&ab_channel=Physio.co.uk'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-white text-lg bg-black bg-opacity-30 p-3 rounded'
                >
                  Watch Video
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='m-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
        <div className=' grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8'>
          {services &&
            services.map(service => (
              <div
                className='divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm'
                key={service._id}
              >
                <div className='p-6 sm:px-8'>
                  <h2 className='text-lg font-medium text-gray-900'>
                    {service.company.name}
                  </h2>

                  <p className='mt-2 text-gray-700'>
                    Address: {service.company.address}
                  </p>
                  <p className='mt-2 text-gray-700'>
                    Contact: {service.company.contact}
                  </p>
                  <p className='mt-2 text-gray-700'>
                    Website: {service.company.website}
                  </p>

                  <p className='mt-2 sm:mt-4'>
                    <strong className='text-3xl font-bold text-gray-900 sm:text-4xl'>
                      {service.price}€
                    </strong>
                  </p>

                  <BookingSection>
                    <div>
                      <button
                        type='button'
                        className='mt-4 block rounded border border-gray-500 bg-primary px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-black sm:mt-6'
                      >
                        Book Now
                      </button>
                    </div>
                  </BookingSection>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Vibration;
