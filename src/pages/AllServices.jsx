import React from 'react';
import massageimg from '../assets/massage.jpg';
import tourimg from '../assets/tour.jpg';
import maintenaceimg from '../assets/maintenance.jpg';
import newsimg from '../assets/news.jpg';
import { Link } from 'react-router-dom';

function AllServices() {
  return (
    <section className='p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800'>
      <div className='container mx-auto space-y-12'>
        <div className='flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row'>
          <img
            src={massageimg}
            alt=''
            className='h-80 dark:bg-gray-500 aspect-video'
          />
          <div className='flex flex-col justify-center flex-1 p-6 dark:bg-gray-50'>
            <h3 className='text-3xl font-bold'>
              Professional Massage Services for Drivers
            </h3>
            <p className='my-6 dark:text-gray-600'>
              Unwind and rejuvenate with our exclusive massage services tailored
              for drivers. Whether you're seeking relief from long hours on the
              road or simply want to pamper yourself, our skilled therapists are
              here to provide relaxation at your convenience. Enjoy a variety of
              massage techniques designed to ease tension, reduce stress, and
              promote overall well-being. Treat yourself to a moment of
              tranquility and experience the difference it makes for your
              journey.
            </p>
            <Link to='/massages'>
              <button class='flex items-center bg-gray-600 text-white gap-1 px-4 py-2 cursor-pointer text-gray-800 font-semibold tracking-widest rounded-md hover:bg-gray-400 duration-300 hover:gap-2 hover:translate-x-3'>
                Explore
                <svg
                  class='w-5 h-5'
                  stroke='currentColor'
                  stroke-width='1.5'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5'
                    stroke-linejoin='round'
                    stroke-linecap='round'
                  ></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>
        <div className='flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse'>
          <img
            src={tourimg}
            alt=''
            className='h-80 dark:bg-gray-500 aspect-video'
          />
          <div className='flex flex-col justify-center flex-1 p-6 dark:bg-gray-50'>
            <h3 className='text-3xl font-bold'>
              Explore Tours around Portugal
            </h3>
            <p className='my-6 dark:text-gray-600'>
              Embark on unforgettable adventures with our tour section, designed
              to help drivers explore the beauty of Portugal like never before.
              From scenic drives to cultural excursions, we offer a variety of
              tours that showcase the country's rich history, stunning
              landscapes, and vibrant culture. Whether you're seeking
              off-the-beaten-path experiences or iconic landmarks, our curated
              tours provide the perfect opportunity to immerse yourself in the
              essence of Portugal. Get ready to create lasting memories and
              discover hidden gems with our expertly crafted tours.
            </p>
            <Link to='/tourpage'>
              <button class='flex items-center bg-gray-600 text-white gap-1 px-4 py-2 cursor-pointer text-gray-800 font-semibold tracking-widest rounded-md hover:bg-gray-400 duration-300 hover:gap-2 hover:translate-x-3'>
                Explore
                <svg
                  class='w-5 h-5'
                  stroke='currentColor'
                  stroke-width='1.5'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5'
                    stroke-linejoin='round'
                    stroke-linecap='round'
                  ></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>
        <div className='flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row'>
          <img
            src={maintenaceimg}
            alt=''
            className='h-80 dark:bg-gray-500 aspect-video'
          />
          <div className='flex flex-col justify-center flex-1 p-6 dark:bg-gray-50'>
            <h3 className='text-3xl font-bold'>
              Expert Car Maintenance for Drivers
            </h3>
            <p className='my-6 dark:text-gray-600'>
              Ensure your vehicle stays in top condition with our comprehensive
              car maintenance services designed specifically for drivers. From
              routine inspections to major repairs, our skilled technicians have
              you covered. With a focus on reliability and efficiency, we
              provide a wide range of services to keep your drive smooth and
              worry-free. Trust us to maintain your vehicle's performance and
              safety, so you can focus on the road ahead with confidence.
            </p>
            <Link to='/maintenance'>
              <button class='flex items-center bg-gray-600 text-white gap-1 px-4 py-2 cursor-pointer text-gray-800 font-semibold tracking-widest rounded-md hover:bg-gray-400 duration-300 hover:gap-2 hover:translate-x-3'>
                Explore
                <svg
                  class='w-5 h-5'
                  stroke='currentColor'
                  stroke-width='1.5'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5'
                    stroke-linejoin='round'
                    stroke-linecap='round'
                  ></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>
        <div className='flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse'>
          <img
            src={newsimg}
            alt=''
            className='h-80 dark:bg-gray-500 aspect-video'
          />
          <div className='flex flex-col justify-center flex-1 p-6 dark:bg-gray-50'>
            <h3 className='text-3xl font-bold'>
              Latest Updates and Insights for Drivers
            </h3>
            <p className='my-6 dark:text-gray-600'>
              Stay ahead of the curve with our news section dedicated to
              providing drivers with the latest updates, insights, and industry
              trends. Whether it's news on road regulations, technology
              advancements, or industry developments, we've got you covered. Our
              curated articles and informative content aim to keep you informed
              and empowered, ensuring you have the knowledge you need to
              navigate your journey effectively. Stay connected, stay informed,
              and drive with confidence.
            </p>
            <Link to='/news'>
              <button class='flex items-center bg-gray-600 text-white gap-1 px-4 py-2 cursor-pointer text-gray-800 font-semibold tracking-widest rounded-md hover:bg-gray-400 duration-300 hover:gap-2 hover:translate-x-3'>
                Explore
                <svg
                  class='w-5 h-5'
                  stroke='currentColor'
                  stroke-width='1.5'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5'
                    stroke-linejoin='round'
                    stroke-linecap='round'
                  ></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AllServices;
