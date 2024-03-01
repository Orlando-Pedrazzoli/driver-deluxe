import React from 'react';
import img_main from '../assets/chairmassage.png';

function SingleService() {
  return (
    <section>
      <div className='mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:h-screen lg:grid-cols-2'>
          <div className='relative z-10 lg:py-16'>
            <div className='relative h-64 sm:h-80 lg:h-full'>
              <img
                alt=''
                src={img_main}
                className='absolute inset-0 h-full w-full object-cover'
              />
            </div>
          </div>

          <div className='relative flex items-center bg-gray-100'>
            <span className='hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100'></span>

            <div className='p-8 sm:p-16 lg:p-24'>
              <h2 className='text-2xl font-bold sm:text-3xl'>Chair Massage</h2>

              <p className='mt-4 text-gray-600'>
                Chair massage was developed from Japanese therapists to be used
                in the big business centers and companies to relieve the tension
                and improve the results of the employees. It is a quick and
                economical way to relax and prevent/treat pains and stiffness on
                the muscles of the upper part of the body. The duration of the
                massage is between 15 and 30 mins, depends on the request. It is
                a massage that is suitable as for private as for corporate
                needs. It could be done everywhere as it needs very little space
                and it is done on portable chair. For the massage are not used
                oils and the client don´t need to take off the clothing.
              </p>

              <a
                href='#'
                className='mt-8 inline-block rounded border border-red-600 bg-red-500 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-black focus:outline-none '
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleService;
