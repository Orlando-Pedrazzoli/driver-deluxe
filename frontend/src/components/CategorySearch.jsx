import React, { useState, useEffect } from 'react';
import { getAllServices } from '../api/services.api';
import img_hero from '../assets/img-hero.png';
import massage1 from '../assets/massage1.png';
import massge2 from '../assets/reflexology.png';
import massage3 from '../assets/chairmassage.png';
import massage4 from '../assets/vibration.png';

function CategorySearch() {
  const [services, setServices] = useState([]);

  const getServices = async () => {
    try {
      const response = await getAllServices();
      setServices(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  return (
    <div className='mb-10 items-center flex flex-col gap-2'>
      <h2 className='font-bold text-4xl tracking-wide'>Search Massage </h2>
      <h2 className='text-gray-500 mt-3 text-xl'>
        Search your massage and Book Appointment
      </h2>
      <div className='relative'>
        <label htmlFor='Search' className='sr-only'>
          Search
        </label>

        <input
          type='text'
          id='Search'
          placeholder='Search for...'
          className='w-full rounded-md border-gray-200 border-2 p-3 mt-2 py-2.5 pe-10 shadow-sm sm:text-sm'
        />

        <span className='absolute inset-y-0 end-0 grid w-10 place-content-center'>
          <button type='button' className='text-gray-600 hover:text-gray-800'>
            <span className='sr-only'>Search</span>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='h-4 w-4'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
              />
            </svg>
          </button>
        </span>
      </div>
      <div className='grid grid-cols-1 m-7 gap-4 lg:grid-cols-4 lg:gap-16'>
        <div className='h-40 rounded-lg bg-gray-200'>
          <img src={massage1} alt='' className='h-full w-full object-cover' />
        </div>
        <div className='h-40 rounded-lg bg-gray-200'>
          <img src={massage3} alt='' className='h-full w-full object-cover' />
        </div>
        <div className='h-40 rounded-lg bg-gray-200'>
          <img src={massge2} alt='' className='h-full w-full object-cover' />
        </div>
        <div className='h-40 rounded-lg bg-gray-200 '>
          <img src={massage4} alt='' className='h-full w-full object-cover' />
        </div>
      </div>
    </div>
  );
}

export default CategorySearch;
