import { useState, useEffect } from 'react';
import { getService } from '@/api/services.api';
import { Link } from 'react-router-dom';
import shiatsuImg from '../../assets/shiatsu.png';
import redicon from '../../assets/redicon.png';
import loadingIMG from '../../assets/LoadingNews.gif';

function Shiatsu({ MapsComponent }) {
  const [services, setServices] = useState();
  const [loading, setLoading] = useState(true);

  const getServices = async () => {
    try {
      const response = await getService('shiatsu');
      console.log(response);
      console.log(response.data);
      setServices(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  return loading ? (
    <div className='flex flex-col justify-center items-center'>
      <img src={loadingIMG} alt='Loading...' />
      <p>Loading...</p>
    </div>
  ) : (
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
                <p className='text-lg font-medium leadi'>Shiatsu:</p>
                <p className='leadi'>
                  In the Japanese language, shiatsu means `finger pressure`.
                  Shiatsu techniques include massages with fingers, thumbs,
                  elbow, knuckle, feet and palms; acupressure, assisted
                  stretching; and joint manipulation and mobilization. To
                  examine a patient, a shiatsu practitioner uses palpation and,
                  sometimes, pulse diagnosis.
                </p>
                <h1 className='font-semibold'>
                  Common body parts treated by shiatsu:
                </h1>
                <ul>
                  <li>- Shoulder</li>
                  <li>- Arm</li>
                  <li>- Upper back</li>
                  <li>- Lower back</li>
                  <li>- Calf</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='lg:w-1/2 xl:w-3/5 bg-gray-200'>
            <div className='flex items-center justify-center p-4 md:p-8 lg:p-12 relative group'>
              <img
                src={shiatsuImg}
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
                  <Link to={`/services/oneItem/${service._id}`}>
                    <button className='flex items-center mt-4 bg-blue-500 text-white gap-1 px-4 py-2 cursor-pointer text-gray-800 font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3'>
                      View details
                      <svg
                        className='w-5 h-5'
                        stroke='currentColor'
                        strokeWidth='1.5'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5'
                          strokeLinejoin='round'
                          strokeLinecap='round'
                        ></path>
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
      <hr style={{ paddingBottom: 50 }}></hr>
      <div style={{ paddingBottom: 50 }}>
        <h1 className='text-center font-semibold text-2xl mb-6'>
          Check all Massage Houses on the map with red icon
          <img
            src={redicon}
            alt='Icon'
            className='inline-block h-10 w-10 ml-2'
          />
        </h1>
        <MapsComponent />
      </div>
    </>
  );
}

export default Shiatsu;
