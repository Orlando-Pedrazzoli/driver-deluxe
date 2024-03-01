import React from 'react';
import hero_img from '../assets/img-hero.png';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section>
      <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16'>
          <div className='relative h-64 overflow-hidden sm:h-80 lg:order-last lg:h-full'>
            <img src={hero_img} alt='' className='rounded-lg' />
          </div>

          <div className='lg:py-24'>
            <h2 className='text-3xl font-bold sm:text-4xl'>
              Find & Book Appointment
            </h2>

            <p className='mt-5 text-gray-600'>
              As drivers, we often overlook the importance of maintaining a
              relaxed and focused state behind the wheel. However, driving
              safely not only safeguards our well-being but also enhances the
              overall journey experience. <br /> With our innovative massage
              app, drivers can discover the finest massage spots across
              Portugal, ensuring a rejuvenating experience awaits at every turn.
              By prioritizing safety and comfort during your travels, our app
              not only promotes responsible driving habits but also encourages a
              holistic approach to well-being.
            </p>

            <Link
              to='/services'
              className='mt-8 inline-block rounded bg-red-500 px-10 py-3 text-sm font-medium text-white transition hover:bg-red-600 f'
            >
              Explore Now
            </Link>
          </div>
        </div>
        <span className='flex items-center'>
          <span className='h-px flex-1 bg-gray-300'></span>
          <span className='shrink-0 px-6'></span>
          <span className='h-px flex-1 bg-gray-300'></span>
        </span>
      </div>
    </section>
  );
}

export default Hero;
